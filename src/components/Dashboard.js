import React from 'react';
import Subjects from './Subjects';

const Dashboard = () => {
  const time = new Date();
  const fullDate = `${time.getDate()}/${
    time.getMonth() + 1
  }/${time.getFullYear()}`;

  return (
    <div className='main'>
      <header>
        <h1>Covid 19 Tracker</h1>
        <h2>
          <span style={{ color: 'green' }}>It</span>a
          <span style={{ color: 'red' }}>ly</span>
        </h2>
        <p>{fullDate}</p>
      </header>

      <Subjects />
    </div>
  );
};

export default Dashboard;
