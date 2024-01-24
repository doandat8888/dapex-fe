import { Input } from "@nextui-org/react";
import ButtonLoading from "../components/common/ButtonLoading";
import { useEffect, useState } from "react";
import isValidEmail from "../utils/validEmail";
import { Checkbox } from "@nextui-org/react";
import Logo from "../components/common/Logo";
import { Link, useNavigate } from "react-router-dom";
import userService from "../services/userService";
import { useAuth } from '../contexts/AuthContext'

const Login = () => {

    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [disabled, setDisabled] = useState<boolean>(true);
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const navigate = useNavigate();
    const { dispatchAuthAction } = useAuth();

    useEffect(() => {
        setDisabled(!!(email && isValidEmail(email) && password))
    }, [email, password])

    const onLogin = async() => {
        setIsLoading(true);
        try {
            const response = await userService.login(email, password);
            if(response && response.data) {
                console.log("Result login: ", response.data);
                dispatchAuthAction({
                    type: 'SET_TOKEN',
                    payload: response.data.accessToken
                });
                localStorage.setItem('token', response.data.accessToken)
                setIsLoading(false);
                navigate('/');
            }
        } catch (error: any) {
            console.log('Error when login: ', error.response.data.msg);
            setIsLoading(false);
        }
    }

    return (
        <div className='flex bg-[#0068ff] h-[100vh]'>
            <div className="left w-[70%] hidden lg:flex items-center justify-center">
                <div className="flex w-[400px] h-[400px] rounded-full bg-white items-center justify-center">
                    <Logo />
                </div>
            </div>
            <div className="right w-[30%] bg-white mx-auto min-w-[400px] px-10 flex items-center">
                <div className="login-form w-[100%]">
                    <div className="title">
                        <p className="lg:text-3xl sm:text-2xl text-xl font-bold my-8">Sign in</p>
                    </div>
                    <div className="inputs space-y-7">
                        <Input
                            isInvalid={email ? !isValidEmail(email) : false}
                            errorMessage={email && !isValidEmail(email) ? "Please enter a valid email" : ''}
                            size="md" radius="sm" isRequired={true} type="email" label="Email"
                            value={email}
                            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
                        />
                        <Input
                            size="md" radius="sm" isRequired={true} type="password" label="Password"
                            value={password}
                            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
                        />
                    </div>
                    <Checkbox className="mt-4" radius="full">
                        <p className="text-sm">Remember me</p>
                    </Checkbox>
                    <div className="my-8">
                        <ButtonLoading
                            disabled={!disabled}
                            radius="sm"
                            isLoading={isLoading}
                            onClickBtn={onLogin}
                            content="Sign in"
                            colorType={disabled ? "primary" : "default"}
                        />
                    </div>
                    <p className="text-center text-sm">Don't have an account? <Link className="text-[#0068ff]" to={'/'}>Sign up</Link></p>
                </div>
                
            </div>
        </div>
    )
}

export default Login