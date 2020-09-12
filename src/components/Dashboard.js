import React from 'react';
import Subjects from './Subjects';

const Dashboard = () => {
  return (
    <div className='main'>
      <header>
        <h1>Covid 19 Tracker</h1>
        <h2>
          <span style={{ color: 'green' }}>It</span>a
          <span style={{ color: 'red' }}>ly</span>
        </h2>
      </header>

      <Subjects />
    </div>
  );
};

export default Dashboard;
