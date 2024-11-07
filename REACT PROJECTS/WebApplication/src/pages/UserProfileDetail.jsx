// src/components/UserProfileDetail.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import './UserProfileDetail.css'; // Ensure this matches the filename

const UserProfileDetail = () => {
  const { id } = useParams();
  const [user, setUser ] = useState(null);
  const [loading, setLoading] = useState(true); // State to track loading
  const [error, setError] = useState(null); // State to track errors

  useEffect(() => {
    const fetchUser Detail = async () => { // Corrected function name
      try {
        const response = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`);
        setUser (response.data);
      } catch (error) {
        console.error("Error fetching user details:", error);
        setError("Failed to fetch user details."); // Set error message
      } finally {
        setLoading(false); // Set loading to false after fetch
      }
    };

    fetchUser Detail(); // Corrected function call
  }, [id]);

  if (loading) return <div>Loading...</div>; // Show loading state
  if (error) return <div>{error}</div>; // Show error message if exists

  return (
    <div className="profile-detail-container">
      <h2>{user.name}</h2>
      <p>Email: {user.email}</p>
      <p>Phone: {user.phone}</p>
      <p>Website: {user.website}</p>
      <p>Company: {user.company.name}</p>
    </div>
  );
};

export default UserProfileDetail;