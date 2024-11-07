// src/components/UserProfiles.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './User Profiles.css';

const UserProfiles = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      const response = await axios.get('https://jsonplaceholder.typicode.com/users');
      setUsers(response.data);
    };

    fetchUsers();
  }, []);

  return (
    <div className="user-profiles-container">
      <h2>User Profiles</h2>
      {users.map(user => (
        <Link to={`/user/${user.id}`} key={user.id} className="profile-card">
          <h3>{user.name}</h3>
          <p>{user.email}</p>
        </Link>
      ))}
    </div>
  );
};

export default UserProfiles;