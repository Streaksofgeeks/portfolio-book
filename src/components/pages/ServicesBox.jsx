import React from 'react'
import { AiFillLayout } from 'react-icons/ai'
import { HiMiniComputerDesktop } from 'react-icons/hi2'
import { MdOutlinePhoneAndroid } from 'react-icons/md'

const ServicesData = [
  {
    name: "UX research",
    description: 'I specialize in leveraging Figma to craft intuitive and visually compelling UI/UX designs for diverse challenges.',
    icon: <AiFillLayout className='text-4xl' />,
    bgColor: "bg-blue-500/70"
  },
  {
    name: "App Development",
    description: 'I utilize React Native and the MERN stack to develop seamless, high-performance mobile.',
    icon: <MdOutlinePhoneAndroid className='text-4xl' />,
    bgColor: "bg-lime-500/70"
  },
  {
    name: "Web Development",
    description: 'I specialize in React for frontend and Node.js, Express, and Firebase for backend web solutions.',
    icon: <HiMiniComputerDesktop className='text-4xl' />,
    bgColor: "bg-fuchsia-500/70"
  },
  {
    name: "Product Development",
    description: 'I specialize in end-to-end product development, turning ideas into functional and user-centric solutions',
    icon: <AiFillLayout className='text-4xl' />,
    bgColor: "bg-orange-500/70"
  },
]

const ServicesBox = () => {
  return (
    <div className='h-full mt-10 text-white'>
      <div className='grid grid-cols-2  gap-6  '>


        {
          ServicesData.map(({ name, description, icon, bgColor }) => (
            <div className={`p-3 ${bgColor} min-h-[180px] rounded-md  shadow shadow-black`}>
              <div className='p-3 space-y-3 '>
                {icon}
                <h1>{name}</h1>
                <p>{description}</p>

              </div>
            </div>

          ))}

      </div>
    </div>
  )
}

export default ServicesBox
