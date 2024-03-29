import React from 'react'
import { useSelector } from 'react-redux'

function Navbar() {
  const { amount } = useSelector((data) => data.shop);
  return (
    <>
      <div className='max-w-3xl mx-auto py-5 px-3 flex justify-between items-center'>
      <h2 className='text-3xl font-medium'>Home</h2>
      <p>
        <span className='mr-1'>Shop</span>
        <span className='badge badge-secondary'>{ amount }</span>
      </p>
    </div>
      <h1 className='py-5 text-4xl text-center font-medium'>Redux Store</h1>
    </>
  ) 
}

export default Navbar