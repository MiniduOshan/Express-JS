import React from 'react'
import Form from './form'

function UserTable() {
  return (
    <div className='flex flex-col items-center mt-10 ml-10 mr-10'>
      <h2 className='text-center text-2xl font-bold my-6'>User List</h2>
      <table className='min-w-full border border-gray-300'>
            <tr className='bg-gray-200'>
              <th className='border border-gray-300 p-2'>First Name</th>
              <th className='border border-gray-300 p-2'>Last Name</th>
              <th className='border border-gray-300 p-2'>Email</th>
            </tr>
            <tr>
              <td>{Form.firstName}</td>
              <td>{Form.lastName}</td>
              <td>{Form.email}</td>
            </tr>
       </table>     
    </div>
  )
}

export default UserTable