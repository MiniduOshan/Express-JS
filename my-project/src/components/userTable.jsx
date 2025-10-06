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


// import React from 'react';
// import Form from './form'

// function UserTable({ users, onDelete, onEdit }) {
//   const handleEdit = async (id) => {
//     console.log('Edit clicked:', id);
//     alert(`Edit feature for user ${id} not implemented yet`);
//   };

//   const handleDelete = async (id) => {
//     if (!window.confirm('Are you sure you want to delete this user?')) return;
//     try {
//       const res = await fetch(`http://localhost:5000/api/users/${id}`, {
//         method: 'DELETE',
//       });
//       if (res.ok) {
//         alert('🗑️ User deleted');
//         if (onDelete) onDelete();
//       }
//     } catch (error) {
//       console.error('Error deleting user:', error);
//     }
//   };

//   return (
//     <div className="flex flex-col items-center mt-10 ml-10 mr-10">
//       <h2 className="text-center text-2xl font-bold my-6">User List</h2>
//       <table className="min-w-full border border-gray-300 bg-white">
//         <thead>
//           <tr className="bg-gray-200">
//             <th className="border border-gray-300 p-2">First Name</th>
//             <th className="border border-gray-300 p-2">Last Name</th>
//             <th className="border border-gray-300 p-2">Email</th>
//             <th className="border border-gray-300 p-2">Actions</th>
//           </tr>
//         </thead>
//         <tbody>
//           {users && users.length > 0 ? (
//             users.map((user) => (
//               <tr key={user._id} className="text-center">
//                 <td className="border border-gray-300 p-2">{user.firstName}</td>
//                 <td className="border border-gray-300 p-2">{user.lastName}</td>
//                 <td className="border border-gray-300 p-2">{user.email}</td>
//                 <td className="border border-gray-300 p-2 space-x-2">
//                   <button
//                     className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600"
//                     onClick={() => handleEdit(user._id)}
//                   >
//                     Edit
//                   </button>
//                   <button
//                     className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
//                     onClick={() => handleDelete(user._id)}
//                   >
//                     Delete
//                   </button>
//                 </td>
//               </tr>
//             ))
//           ) : (
//             <tr>
//               <td
//                 colSpan="4"
//                 className="text-center p-4 text-gray-500"
//               >
//                 No users found.
//               </td>
//             </tr>
//           )}
//         </tbody>
//       </table>
//     </div>
//   );
// }

// export default UserTable;

