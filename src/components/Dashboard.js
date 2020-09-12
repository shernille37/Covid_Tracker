import React from 'react';
import Subjects from './Subjects';

const Dashboard = () => {
  return (
    <div className='main'>
      <header>
        <h1>Covid 19 Tracker</h1>
        <h2>Italy</h2>
      </header>

      <Subjects />
    </div>
  );
};

export default Dashboard;
