import React from 'react';

const ProjectBox = ({ ProjectData }) => {
  return (
    <div className='flex flex-col items-center'>
      {ProjectData.map((project, index) => {
        return (
          <div key={index} className='flex items-center gap-7 mb-7'>
            {/* Image Section with Hover Effect */}
            <a
              href={project.previewLink}
              target="_blank"
              rel="noopener noreferrer"
              className='relative w-[300px] h-[200px] rounded-xl overflow-hidden group'
            >
              <img
                src={project.image}
                alt=""
                className='w-full h-full rounded-xl object-cover transition-transform duration-300 ease-in-out group-hover:scale-105'
              />
              <div className="absolute inset-0 bg-black bg-opacity-30 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute bottom-0 left-0 right-0 p-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className='text-lg font-medium'>{project.description}</p>
              </div>
            </a>
          </div>
        );
      })}
    </div>
  );
};

export default ProjectBox;
