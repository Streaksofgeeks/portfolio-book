import React from 'react';

const SecondPage = () => {
  return (
    <div>
      <div className='flex flex-col justify-center items-center p-7 bg-gray-50'>
        {/* Heading Section */}
        <div className='relative text-center'>
          <h1 className='text-7xl text-purple-300 font-bold'>SKILLS</h1>
          <p className='absolute font-bold top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-4xl text-purple-600'>
            Skills
          </p>
        </div>

        {/* Skills List Section */}
        <div className='mt-5'>
          <ul className="grid grid-cols-2 gap-32 list-none pl-5">
            <li className="relative before:content-['•'] before:absolute before:-left-0.5 before:text-green-500 before:text-3xl before:top-1/2 before:-translate-y-1/2 text-gray-700 pl-5 flex font-semibold">
              React JS
            </li>
            <li className="relative before:content-['•'] before:absolute before:-left-0.5 before:text-green-500 before:text-3xl before:top-1/2 before:-translate-y-1/2 text-gray-700 pl-5 font-semibold">
              Tailwind CSS

            </li>

          </ul>
          <ul className="grid grid-cols-2 gap-32 list-none pl-5">
            <li className="relative before:content-['•'] before:absolute before:-left-0.5 before:text-green-500 before:text-3xl before:top-1/2 before:-translate-y-1/2 text-gray-700 pl-5 flex font-semibold">
              HTML5
            </li>
            <li className="relative before:content-['•'] before:absolute before:-left-0.5 before:text-green-500 before:text-3xl before:top-1/2 before:-translate-y-1/2 text-gray-700 pl-5 font-semibold">
              CSS

            </li>

          </ul>
          <ul className="grid grid-cols-2 gap-32 list-none pl-5">
            <li className="relative before:content-['•'] before:absolute before:-left-0.5 before:text-green-500 before:text-3xl before:top-1/2 before:-translate-y-1/2 text-gray-700 pl-5 flex font-semibold">
              Three JS
            </li>
            <li className="relative before:content-['•'] before:absolute before:-left-0.5 before:text-green-500 before:text-3xl before:top-1/2 before:-translate-y-1/2 text-gray-700 pl-5 font-semibold">
              Firebase
            </li>
          </ul>
          <ul className="grid grid-cols-2 gap-32 list-none pl-5">
            <li className="relative before:content-['•'] before:absolute before:-left-0.5 before:text-green-500 before:text-3xl before:top-1/2 before:-translate-y-1/2 text-gray-700 pl-5 flex font-semibold">
              Node JS
            </li>
            <li className="relative before:content-['•'] before:absolute before:-left-0.5 before:text-green-500 before:text-3xl before:top-1/2 before:-translate-y-1/2 text-gray-700 pl-5 font-semibold">
              Mongo Db
            </li>
          </ul>
          <ul className="grid grid-cols-2 gap-32 list-none pl-5">
            <li className="relative before:content-['•'] before:absolute before:-left-0.5 before:text-green-500 before:text-3xl before:top-1/2 before:-translate-y-1/2 text-gray-700 pl-5 flex font-semibold">
              Figma
            </li>
            <li className="relative before:content-['•'] before:absolute before:-left-0.5 before:text-green-500 before:text-3xl before:top-1/2 before:-translate-y-1/2 text-gray-700 pl-5 font-semibold">
              Express Js
            </li>
          </ul>
        </div>
      </div>

      <div className='flex flex-col justify-center items-center p-7 bg-gray-50'>
        {/* Heading Section */}
        <div className='relative text-center'>
          <h1 className='text-7xl text-purple-300 font-bold'>PROFILES</h1>
          <p className='absolute font-bold top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-4xl text-purple-600'>
            Profiles
          </p>
        </div>

        {/* Skills List Section */}
        <div className='mt-5 '>
          <ul className="grid grid-cols-2 gap-32 list-none pl-5">
            <li className="relative before:content-['•'] before:absolute before:-left-0.5 before:text-green-500 before:text-3xl before:top-1/2 before:-translate-y-1/2 text-gray-700 pl-5 flex font-semibold">
              <a href="https://github.com/Streaksofgeeks" target='_blank' class="relative rounded px-5 py-2.5 overflow-hidden group bg-green-500 hover:bg-gradient-to-r hover:from-green-500 hover:to-green-400 text-white hover:ring-2 hover:ring-offset-2 hover:ring-green-400 transition-all ease-out duration-300">
                <span class="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
                <span class="relative">Github</span>
              </a>
            </li>
            <li className="relative flex items-center before:content-['•'] before:absolute before:-left-0.5 before:text-green-500 before:text-3xl before:top-1/2 before:-translate-y-1/2 text-gray-700 pl-7 font-semibold">
              <a href="https://www.linkedin.com/in/purushottam-jha-8a2366230/" target='_blank' className="relative rounded px-5 py-2.5 overflow-hidden group bg-green-500 mt-2 hover:bg-gradient-to-r hover:from-green-500 hover:to-green-400 text-white hover:ring-2 hover:ring-offset-2 hover:ring-green-400 transition-all ease-out duration-300">
                <span className="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
                <span className="relative">LinkedIn</span>
              </a>
            </li>


          </ul>
          <br />
          <ul className="grid grid-cols-2 gap-32 list-none pl-5">
            <li className="relative before:content-['•'] before:absolute before:-left-0.5 before:text-green-500 before:text-3xl before:top-1/2 before:-translate-y-1/2 text-gray-700 pl-5 flex font-semibold">
              <a href="https://resume-dev-mine.netlify.app/" target='_blank' class="relative rounded px-5 py-2.5 overflow-hidden group bg-green-500 hover:bg-gradient-to-r hover:from-green-500 hover:to-green-400 text-white hover:ring-2 hover:ring-offset-2 hover:ring-green-400 transition-all ease-out duration-300">
                <span class="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
                <span class="relative">Resume</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SecondPage;
