import React from 'react'
import Form from './form'

function UserTable() {
  const handleEdit = () => {
    // Implement edit functionality
    console.log('Edit button clicked');
  }

  const handleDelete = () => {
    // Implement delete functionality
    console.log('Delete button clicked');
  }

  
  return (
    <div className='flex flex-col items-center mt-10 ml-10 mr-10'>
      <h2 className='text-center text-2xl font-bold my-6'>User List</h2>
      <table className='min-w-full border border-gray-300'>
            <thead>
            <tr className='bg-gray-200'>
              <th className='border border-gray-300 p-2'>First Name</th>
              <th className='border border-gray-300 p-2'>Last Name</th>
              <th className='border border-gray-300 p-2'>Email</th>
              <th></th>
              <th></th>
            </tr>
            </thead>
            <tbody>
            <tr>
              <td>{Form.firstName}</td>
              <td>{Form.lastName}</td>
              <td>{Form.email}</td>
<td><button className='bg-blue-500 text-white px-3 py-1 rounded' onClick={() => handleEdit(user._id)}>Edit</button></td>
  <td><button className='bg-red-500 text-white px-3 py-1 rounded' onClick={() => handleDelete(user._id)}>Delete</button></td>

            </tr>
            </tbody>
       </table>     
    </div>
  )
}

export default UserTable


// import React, { useState, useEffect } from 'react'

// function UserTable() {
//   const [users, setUsers] = useState([]);

//   // Fetch user data from backend
//   useEffect(() => {
//     fetch('http://localhost:5000/api/users') // change URL to your backend route
//       .then(res => res.json())
//       .then(data => setUsers(data))
//       .catch(err => console.error('Error fetching users:', err));
//   }, []);

//   const handleEdit = (id) => {
//     console.log('Edit button clicked for user:', id);
//     // You can open a form modal here for editing
//   }

//   const handleDelete = async (id) => {
//     console.log('Delete button clicked for user:', id);
//     try {
//       await fetch(`http://localhost:5000/api/users/${id}`, {
//         method: 'DELETE',
//       });
//       // remove deleted user from state
//       setUsers(users.filter(user => user._id !== id));
//     } catch (error) {
//       console.error('Error deleting user:', error);
//     }
//   }

//   return (
//     <div className='flex flex-col items-center mt-10 ml-10 mr-10'>
//       <h2 className='text-center text-2xl font-bold my-6'>User List</h2>

//       <table className='min-w-full border border-gray-300'>
//         <thead>
//           <tr className='bg-gray-200'>
//             <th className='border border-gray-300 p-2'>First Name</th>
//             <th className='border border-gray-300 p-2'>Last Name</th>
//             <th className='border border-gray-300 p-2'>Email</th>
//             <th className='border border-gray-300 p-2'>Actions</th>
//           </tr>
//         </thead>
//         <tbody>
//           {users.length > 0 ? (
//             users.map((user) => (
//               <tr key={user._id}>
//                 <td className='border border-gray-300 p-2'>{user.firstName}</td>
//                 <td className='border border-gray-300 p-2'>{user.lastName}</td>
//                 <td className='border border-gray-300 p-2'>{user.email}</td>
//                 <td className='border border-gray-300 p-2 space-x-2'>
//                   <button
//                     className='bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600'
//                     onClick={() => handleEdit(user._id)}
//                   >
//                     Edit
//                   </button>
//                   <button
//                     className='bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600'
//                     onClick={() => handleDelete(user._id)}
//                   >
//                     Delete
//                   </button>
//                 </td>
//               </tr>
//             ))
//           ) : (
//             <tr>
//               <td colSpan="4" className='text-center p-4 text-gray-500'>
//                 No users found
//               </td>
//             </tr>
//           )}
//         </tbody>
//       </table>
//     </div>
//   );
// }

// export default UserTable;
