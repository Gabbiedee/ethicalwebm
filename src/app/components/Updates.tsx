import React from 'react';

const Updates = () => {
  return (
    <div className='flex flex-col justify-center items-center h-auto min-h-96 font-Sarabun px-5'>
      <div className='text-center flex flex-col justify-center items-center mb-5'>
        <h3 className='text-3xl md:text-4xl py-3'>Get latest updates</h3>
        <p className='opacity-50 w-full md:w-3/4'>
          Subscribe to our newsletter to get the latest news and updates on our products and services.
        </p>
      </div>
      <div className='m-5 w-full sm:w-3/4 md:w-2/6 flex justify-center'>
        <form className='w-full'>
          <input 
            type="email" 
            placeholder='Enter email' 
            className='p-3 w-full my-3 rounded-md border border-gray-300' 
          />
          <div className='bg-customGreen text-white text-center rounded-md p-2 mt-3'>
            <button type='submit' className='w-full'>
              Subscribe
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Updates;
