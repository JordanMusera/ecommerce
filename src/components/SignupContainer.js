import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const SignupContainer = () => {
    const [userName, setUserName] = useState('');
    const [userEmail, setUserEmail] = useState('');
    const [userPassword, setUserPassword] = useState('');

    const createAccount = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('http://localhost:3000/users/create-user', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    userName,
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


    return (
        <div className='w-full h-full flex items-center justify-center'>
            <form className='bg-gray-100 sm:w-4/5 lg:w-2/4 xl:w-2/6 p-4 flex flex-col gap-4 rounded-md'
                onSubmit={createAccount}>
                <h1 className='font-bold text-2xl justify-center flex'>Sign Up</h1>
                <input type='text' className='h-8 px-2 rounded w-full' placeholder='enter username'
                    onChange={(e) => setUserName(e.target.value)} />
                <input type='email' className='h-8 px-2 rounded w-full' placeholder='enter email'
                    onChange={(e) => setUserEmail(e.target.value)} />
                <input type='password' className='h-8 px-2 rounded w-full' placeholder='enter password'
                    onChange={(e) => setUserPassword(e.target.value)} />
                <button type='submit' className='px-2 my-2 bg-green-500 h-8 rounded-lg'>Submit</button>
            </form>
            <ToastContainer position="top-right" autoClose={5000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover />
        </div>
    );
}

export default SignupContainer