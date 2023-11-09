import React, { useState, useEffect } from 'react';
import axios from 'axios';

const UserTable = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get('https://dummyjson.com/users')
      .then((response) => {
        console.log(response.data.users);
        setUsers(response.data.users)
    })
      .catch((error) => {
        console.error('Error fetching user data:', error);
      });
  }, []);

  return (
    <div>
      <table border={1}>
        <thead>
          <tr>
            <th>Sno</th>
            <th>Image</th>
            
            <th>First Name</th>
            <th>Last Name</th>
            <th>Gender</th>
            <th>Email</th>
            <th>Username</th>
            <th>Domain</th>
            <th>IP</th>
            <th>University</th>
            
          </tr>
        </thead>
        <tbody>
          {Array.isArray(users) ? (
            users.map((user) => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>
                  <img src={user.image} alt="User" style={{ width: '50px' }} />
                </td>
                <td>{user.firstName}</td>
                <td>{user.lastName}</td>
                <td>{user.gender}</td>
                <td>{user.email}</td>
                <td>{user.username}</td>
                <td>{user.domain}</td>
                <td>{user.ip}</td>
                <td>{user.university}</td>
                
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="8">Loading...</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default UserTable;