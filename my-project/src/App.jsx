import React from 'react'
import Form from './components/form'
import UserTable from './components/userTable'

function App() {
  return (
    <div>
      <h1>Learn Express</h1>
      <Form />
      <UserTable />
      
    </div>
  )
}

export default App


// import React, { useState, useEffect } from 'react';
// import Form from './components/Form';
// import UserTable from './components/UserTable';

// function App() {
//   const [users, setUsers] = useState([]);

//   // Fetch all users from backend
//   const fetchUsers = async () => {
//     try {
//       const res = await fetch('http://localhost:5000/api/users');
//       const data = await res.json();
//       setUsers(data);
//     } catch (error) {
//       console.error('Error fetching users:', error);
//     }
//   };

//   // Run when component mounts
//   useEffect(() => {
//     fetchUsers();
//   }, []);

//   return (
//     <div className="min-h-screen bg-gray-50">
//       <h1 className="text-3xl font-bold text-center mt-6">User Management</h1>
//       <Form onUserAdded={fetchUsers} />
//       <UserTable users={users} onDelete={fetchUsers} onEdit={fetchUsers} />
//     </div>
//   );
// }

// export default App;
