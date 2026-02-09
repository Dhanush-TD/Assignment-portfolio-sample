import React, { useState } from "react";

function UsersComponent() {
  const initialUsers = [
    {
      id: 1,
      name: "Alice Johnson",
      email: "alice@example.com",
      phone: "555-1234",
      address: "123 Main St",
    },
    {
      id: 2,
      name: "Bob Smith",
      email: "bob@example.com",
      phone: "555-5678",
      address: "456 Elm St",
    },
    {
      id: 3,
      name: "Charlie Brown",
      email: "charlie@example.com",
      phone: "555-9101",
      address: "789 Oak St",
    },
  ];

  const [users, setUsers] = useState([]);
  const [showUsers, setShowUsers] = useState(false);

  const addAllUsers = () => {
    setUsers(initialUsers);
    setShowUsers(true);
  };

  const deleteAllUsers = () => {
    setUsers([]);
    setShowUsers(false);
  };

  const deleteUser = (id) => {
    const updatedUsers = users.filter((user) => user.id !== id);
    setUsers(updatedUsers);

    if (updatedUsers.length === 0) {
      setShowUsers(false);
    }
  };

  return (
    <div>
      <h2>User Management Panel</h2>

      {}
      {!showUsers && (
        <button onClick={addAllUsers}>Add All Users</button>
      )}

      {showUsers && (
        <button onClick={deleteAllUsers}>Delete All Users</button>
      )}

      {}
      {showUsers && users.length > 0 && (
        <table border="1" cellPadding="10" style={{ marginTop: "15px" }}>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Address</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id}>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.phone}</td>
                <td>{user.address}</td>
                <td>
                  <button onClick={() => deleteUser(user.id)}>
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default UsersComponent;
