import React from 'react';
import { useSelector } from 'react-redux';

function Dashboard() {
  const userEmail = useSelector((state) => state.user.email);

  return (
    <div>
      <h1>Dashboard</h1>
      {userEmail && <p>Logged in as: {userEmail}</p>}
    </div>
  );
}

export default Dashboard;