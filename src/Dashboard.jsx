import React from 'react';
import Profile from './Profile';

function Dashboard() {
  return (
    <div>
      <Profile/>
      <p>Welcome to your Dashboard.</p>
      <button>Start ordering</button>
    </div>
  );
}
export default Dashboard;
