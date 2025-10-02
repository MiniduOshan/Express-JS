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