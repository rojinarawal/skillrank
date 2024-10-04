import React, { useState } from 'react';

const App = () => {
  const [loginData, setLoginData] = useState({ username: '', password: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginData({ ...loginData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data Submitted:', loginData);
  };

  return (
    <div className='flex justify-center mt-10 rounded-sm'>
      <form
        onSubmit={handleSubmit}
        className='flex flex-col gap-4 bg-gray-200 px-8 py-8 w-1/4 h-auto shadow-md'
      >
        <h2 className='text-center font-bold text-xl mb-5'>Login</h2>
        <label htmlFor='username' className='font-medium text-gray-700'>
          Username
        </label>
        <input
          type='text'
          name='username'
          value={loginData.username}
          onChange={handleChange}
          className='block border rounded-full px-3 py-1 shadow-sm focus:outline-none'
        />
        <label htmlFor='password' className='font-medium text-gray-700 '>
          Password
        </label>
        <input
          type='password'
          name='password'
          value={loginData.password}
          onChange={handleChange}
          className=' block border rounded-full px-3 py-1 shadow-sm focus:outline-none'
        />
        <div className='flex justify-center mt-8'>
          <button
            type='submit'
            className='shadow-md py-1 bg-purple-500 text-white rounded-full w-24 '
          >
            LOGIN
          </button>
        </div>
      </form>
    </div>
  );
};

export default App;
