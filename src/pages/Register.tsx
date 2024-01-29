import { Input } from "@nextui-org/react";
import ButtonLoading from "../components/common/ButtonLoading";
import { useEffect, useState } from "react";
import isValidEmail from "../utils/validEmail";
import { Checkbox } from "@nextui-org/react";
import Logo from "../components/common/Logo";
import { Link, useNavigate } from "react-router-dom";
import userService from "../services/userService";
import { useAuthStore } from "../stores/useUserStore";

const Register = () => {

    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [disabled, setDisabled] = useState<boolean>(true);
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [fullName, setFullName] = useState<string>("");
    const navigate = useNavigate();

    useEffect(() => {
        setDisabled(!!(email && isValidEmail(email) && password && fullName))
    }, [email, password, fullName])

    const onRegister = async() => {
        setIsLoading(true);
        try {
            const response = await userService.register(email, password, fullName);
            if(response && response.data) {
                console.log("Result register: ", response.data);
                const responseLogin = await userService.login(email, password);
                if(responseLogin && responseLogin.data) {
                    useAuthStore.getState().setToken(response.data.accessToken)
                    useAuthStore.getState().setRefreshToken(response.data.refreshToken)
                    navigate('/');
                }else {
                    alert("Error when login")
                }
                setIsLoading(false);
            }
        } catch (error: any) {
            console.log('Error when register: ', error.response.data.msg);
            setIsLoading(false);
        }
    }

    return (
        <div className='flex bg-[#0068ff] h-[100vh]'>
            <div className="left w-[70%] hidden lg:flex items-center justify-center">
                <div className="flex w-[400px] h-[400px] rounded-full bg-white items-center justify-center">
                    <Logo textSize="text-5xl"/>
                </div>
            </div>
            <div className="right w-[30%] bg-white mx-auto min-w-[400px] px-10 flex items-center">
                <div className="login-form w-[100%]">
                    <div className="title">
                        <p className="lg:text-3xl sm:text-2xl text-xl font-bold my-8">Sign up</p>
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
                         <Input
                            size="md" radius="sm" isRequired={true} label="Full name"
                            value={fullName}
                            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setFullName(e.target.value)}
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
                            onClickBtn={onRegister}
                            content="Sign in"
                            colorType={disabled ? "primary" : "default"}
                        />
                    </div>
                    <p className="text-center text-sm">Already had an account? <Link className="text-[#0068ff]" to={'/login'}>Sign in</Link></p>
                </div>
                
            </div>
        </div>
    )
}

export default Register