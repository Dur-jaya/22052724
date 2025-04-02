import React, { useState, useEffect } from 'react';

function TopUsers() {
  const [topUsers, setTopUsers] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/top-users') // Replace with your API endpoint
      .then(response => response.json())
      .then(data => setTopUsers(data))
      .catch(error => console.error('Error fetching top users:', error));
  }, []);

  return (
    <div>
      <h2>Top Users</h2>
      <ul>
        {topUsers.map(user => (
          <li key={user.id}>
            {user.username} - {user.postCount} posts
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TopUsers;
