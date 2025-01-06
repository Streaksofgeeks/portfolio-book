import React from 'react'
import ServicesBox from './ServicesBox.jsx'

const Services = () => {
  return (
    <div className='h-full page-shadow bg-white p-10'>
      {/*heading*/}
      <div className='flex flex-col items-center'>
        <h1 className='inline-block text-3xl text-center font-bold mb-3 border-b-2 border-primary pb-1'>Services</h1>
        <p className='text-sm text-slate-500 text-center md:w-[80%] mx-auto'>Discover the range of premium services I offer, designed to elevate your projects with expertise.</p>
      </div>
      {/*Services Cards*/}
      <div>
        <ServicesBox />
      </div>
    </div>
  )
}

export default Services
