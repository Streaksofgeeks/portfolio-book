import React from 'react'
import ProjectBox from './ProjectBox'

const Project = ({ ProjectData }) => {
  return (
    <div className='p-10'>
      <div className='flex flex-col items-center'>
        <h1 className='inline-block text-3xl text-center font-bold mb-3 border-b-2 border-primary pb-1'>Projects</h1>
        <p className='text-sm text-slate-500 text-center md:w-[80%] mx-auto'>These are mainly frontend projects, I made to get the grasp of the frontend development.</p>
      </div>
      <br />
      <br />
      {/* Project section */}
      <ProjectBox ProjectData={ProjectData} />

    </div>
  )
}

export default Project
