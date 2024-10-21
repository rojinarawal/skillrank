import React, { useContext } from 'react';
import UserContext from '../contexts/UserContext';

const Dashboard = () => {
  const { user } = useContext(UserContext);
  return (
    <div className='h-screen w-screen flex justify-center items-center bg-slate-400'>
      <h1 className='text-3xl font-medium'>
        {`Welcome, ${user.username} to the dashboard!`}
      </h1>
    </div>
  );
};

export default Dashboard;
