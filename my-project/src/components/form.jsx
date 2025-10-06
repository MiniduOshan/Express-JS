import React from 'react'

function Form() {

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Form submitted!');
  }
  return (
    <div className='flex flex-col items-center mt-10'>
      <form className='flex flex-col gap-4 p-6 border border-gray-300 rounded-lg shadow-md w-96'>
        <label className='block text-center text-lg font-semibold mb-4'>User Information</label>
        <input type="text" placeholder="Enter your first name" className='p-2 border border-gray-300 rounded' />
        <input type="text" placeholder="Enter your last name" className='p-2 border border-gray-300 rounded' />
        <input type="email" placeholder="Enter your email" className='p-2 border border-gray-300 rounded' />
        <button 
             type="submit" 
             className='bg-blue-500 text-white p-2 rounded'
             onClick={handleSubmit}>Submit</button>
      </form>

    </div>
  )
}

export default Form



// import React, { useState } from 'react';

// function Form({ onUserAdded }) {
//   const [formData, setFormData] = useState({
//     firstName: '',
//     lastName: '',
//     email: '',
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       const res = await fetch('http://localhost:5000/api/users', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(formData),
//       });

//       if (res.ok) {
//         alert('✅ User added successfully!');
//         setFormData({ firstName: '', lastName: '', email: '' });
//         if (onUserAdded) onUserAdded(); // refresh table
//       } else {
//         alert('❌ Failed to add user');
//       }
//     } catch (error) {
//       console.error('Error adding user:', error);
//     }
//   };

//   return (
//     <div className="flex flex-col items-center mt-10">
//       <form
//         onSubmit={handleSubmit}
//         className="flex flex-col gap-4 p-6 border border-gray-300 rounded-lg shadow-md w-96 bg-white"
//       >
//         <label className="block text-center text-lg font-semibold mb-2">
//           Add New User
//         </label>

//         <input
//           type="text"
//           name="firstName"
//           value={formData.firstName}
//           onChange={handleChange}
//           placeholder="Enter first name"
//           className="p-2 border border-gray-300 rounded"
//           required
//         />

//         <input
//           type="text"
//           name="lastName"
//           value={formData.lastName}
//           onChange={handleChange}
//           placeholder="Enter last name"
//           className="p-2 border border-gray-300 rounded"
//           required
//         />

//         <input
//           type="email"
//           name="email"
//           value={formData.email}
//           onChange={handleChange}
//           placeholder="Enter email"
//           className="p-2 border border-gray-300 rounded"
//           required
//         />

//         <button
//           type="submit"
//           className="bg-blue-500 hover:bg-blue-600 text-white p-2 rounded"
//         >
//           Submit
//         </button>
//       </form>
//     </div>
//   );
// }

// export default Form;
