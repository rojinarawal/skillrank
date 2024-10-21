import React, { useContext, useState } from 'react';
import { FaUser } from 'react-icons/fa';
import { IoMdLock } from 'react-icons/io';
import { useNavigate } from 'react-router-dom';
import UserContext from '../contexts/UserContext';

const Login = () => {
  const [loginData, setLoginData] = useState({ username: '', password: '' });
  const [errorMessage, setErrorMessage] = useState(''); // For any login errors
  const navigate = useNavigate(); // intialization
  const { setUser } = useContext(UserContext);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginData({ ...loginData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    //Dummy login
    if (loginData.username && loginData.password) {
      setUser({ username: loginData.username }); //set the user context
      navigate('/dashboard');
    } else {
      setErrorMessage('Invalid username and password');
    }
  };

  return (
    <div
      className='h-screen w-screen bg-cover bg-center'
      style={{ backgroundImage: "url('/src/assets/background.jpg')" }}
    >
      <div className='flex justify-center rounded-sm'>
        <form
          onSubmit={handleSubmit}
          className='flex flex-col gap-6 bg-opacity-30 backdrop-blur-2xl rounded-lg px-10 py-8 mt-36 lg:w-1/4 md:w-1/3 sm:w-2/5
           h-96 shadow-md text-white cursor-pointer'
        >
          <h2 className='text-center font-bold text-3xl mb-4'>Login</h2>
          <div className='relative'>
            <input
              type='text'
              placeholder='Username'
              name='username'
              value={loginData.username}
              onChange={handleChange}
              className='block border bg-transparent rounded-full w-full px-3 py-2 text-sm focus:outline-none placeholder:text-white'
            />
            <FaUser className='absolute top-3 right-5 h-4 w-3' />
          </div>
          <div className='relative'>
            <input
              placeholder='Password'
              type='password'
              name='password'
              value={loginData.password}
              onChange={handleChange}
              className='block border bg-transparent rounded-full w-full px-3 py-2 text-sm focus:outline-none placeholder:text-white'
            />
            <IoMdLock className='absolute top-3 right-4 h-4 w-5' />
          </div>
          <div className='flex justify-center mt-6'>
            <button
              type='submit'
              className='shadow-md py-1 bg-customPurple rounded-full w-full'
            >
              LOGIN
            </button>
          </div>
          <h2 className='text-center text-sm hover:underline'>
            Dont have an account? <strong>Register</strong>
          </h2>
        </form>
      </div>
    </div>
  );
};

export default Login;
