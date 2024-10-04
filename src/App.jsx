import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const App = () => {
  return (
    <div>
      <Link to='/login' className='text-blue-500 hover:underline'>
        Go to Login
      </Link>
    </div>
  );
};

export default App;
