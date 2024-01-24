import React, { useCallback, useEffect } from 'react'
import { useAuth } from '../contexts/AuthContext'
import userService from '../services/userService';
import { useNavigate } from 'react-router';

const Home = () => {
    const token = localStorage.getItem('token');
    const navigate = useNavigate();

    const getCurrentUser = async() => {
        try {
            const response = await userService.getCurrentUser();
            if(response && response.data && response.data.data) {
                console.log('Current user: ', response.data.data);
            }
        } catch (error) {
            console.log(error);
        }
        
    }

    useEffect(() => {
        if(token) {
            getCurrentUser();
        }else {
            navigate('/login')
        }
        
    }, [token])

    return (
        <div className='font-bold'>

        </div>
    )
}

export default Home