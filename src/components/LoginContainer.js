import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';

const LoginContainer = () => {
    const [userEmail, setUserEmail] = useState('');
    const [userPassword, setUserPassword] = useState('');

    const navigate = useNavigate();

    const loginAccount = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('http://localhost:3000/users/create-user', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    userEmail,
                    userPassword,
                }),
            });

            const responseText = await response.text();
            console.log(responseText);

            if (response.ok) {
                toast.success("Account created successfully!");
            } else {
                toast.error("Failed to create account: " + responseText);
            }
        } catch (error) {
            toast.error("An error occurred. Please try again later.");
            console.error('Fetch error:', error);
        }
    };

    const signUp=()=>{
      navigate('/pages/signup');
    }

    return (
        <div className='w-full h-full flex items-center justify-center'>
            <form className='bg-gray-100 sm:w-4/5 lg:w-2/4 xl:w-2/6 p-4 flex flex-col gap-4 rounded-md'
                onSubmit={loginAccount}>
                <h1 className='font-bold text-2xl justify-center flex'>Login</h1>
                <input type='email' className='h-8 px-2 rounded w-full' placeholder='enter email'
                    onChange={(e) => setUserEmail(e.target.value)} />
                <input type='password' className='h-8 px-2 rounded w-full' placeholder='enter password'
                    onChange={(e) => setUserPassword(e.target.value)} />
                <p className='font-semi-bold text-sm'>Fogort password?<span className='text-blue-500'>Reset</span></p>
                <button type='submit' className='px-2 mt-2 bg-green-500 h-8 rounded-lg'>Submit</button>
                <p className='font-semi-bold text-sm'>Don't have an account?<span onClick={signUp} className='text-blue-500 hover:cursor-pointer hover:font-bold'>Sign-up</span></p>
            </form>
            <ToastContainer position="top-right" autoClose={5000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover />
        </div>
    );
};

export default LoginContainer;
