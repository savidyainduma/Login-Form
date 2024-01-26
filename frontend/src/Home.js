import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';


function Home() {
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:8081/home');
        setUserData(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className='d-flex justify-content-center align-items-center bg-primary vh-100'>
      
      <div className='bg-white p-3 rounded w-75'>
      <h2>User Data</h2>
      <table className="table table-bordered table-hover border-black p-3">
        <thead className='thead thead-dark'>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Phone Number</th>
            <th>City</th>
          </tr>
        </thead>
        <tbody>
          {userData.map((user) => (
            <tr key={user.id}>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.mobile}</td>
              <td>{user.city}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <p>Not a member? <a href='/signup'>Create Account</a> from here. </p>
      </div>
    </div>
  )
}
export default Home;