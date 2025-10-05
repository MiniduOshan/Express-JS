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
            </tr>
            </thead>
            <tbody>
            <tr>
              <td>{Form.firstName}</td>
              <td>{Form.lastName}</td>
              <td>{Form.email}</td>
              <td><button className='rounded' onClick={handleEdit}>Edit</button></td>
              <td><button className='rounded' onClick={handleDelete}>Delete</button></td>

            </tr>
            </tbody>
       </table>     
    </div>
  )
}

export default UserTable