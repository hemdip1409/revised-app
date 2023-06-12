import React, { useEffect, useState } from "react";
import axios from "axios";

export default function UserList() {
  const [users, updateUser] = useState([]);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then(response => {
        updateUser(response.data); // Update state with response.data
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  return (
    <>
      <span>
        {users.map(user => (
          <h2 key={user.id}>{user.id}</h2>
        ))}
      </span>
    </>
  );
}
