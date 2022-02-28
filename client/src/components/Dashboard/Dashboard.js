import React from 'react';
import { useSelector } from 'react-redux';
import NavUser from '../topbar/NavUser';
import Profile from '../profile/Profile';

const Dashboard = () => {
  return <div>
      <NavUser/>
      <Profile/>

  </div>;
};

export default Dashboard;
