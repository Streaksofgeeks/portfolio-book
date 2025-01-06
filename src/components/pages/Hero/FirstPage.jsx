import React from 'react'
import img from "../../../assets/profile2.jpg"
const FirstPage = () => {
  return (
    <div className='ml-16 bg-slate-300 gap-2 h-full flex flex-col justify-center'>
      <div className='mx-auto w-[200px]'>
        <img className="rounded-full"
          src={img} alt="" /></div>
      <p className='text-2xl font-semibold'>HELLO</p>

      <h1 className='text-5xl font-bold'>I'm Purushottam</h1>
      <p className='text-2xl'>FULL STACK DEVELOPER</p>
      <p className=''>A motivated developer skilled in React.js, Vite, and Three.js, with a passion for creating dynamic UIs and an interest in backend development using Node.js and Firebase.</p>
      <div className='ml-7 mt-1'>
        <a href="#_" class="relative inline-block px-4 py-2 font-medium group">
          <span class="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-black group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
          <span class="absolute inset-0 w-full h-full bg-white border-2 border-black group-hover:bg-black"></span>
          <span class="relative text-black group-hover:text-white">Hire Me</span>
        </a>

      </div>

    </div>


  )
}

export default FirstPage
