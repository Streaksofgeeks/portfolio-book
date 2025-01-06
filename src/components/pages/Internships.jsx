import React from 'react';
import bizowl from "../../assets/Interships/bizowl.jpg";
import wictronix from "../../assets/Interships/wictronix.jpg";

const Internships = () => {
  const internships = [
    {
      id: 1,
      image: bizowl,
      title: 'BizOwl',
      tenure: "(Nov-2024 to Present)",
      description: [
        'Tech Stack: React, Firebase',
        'Contributing in product development from scratch as Full Stack Developer.',
        'Solving real-world problems along with the team',
      ],
      link: 'https://www.bizzowl.com/',
      certificationLink: 'https://drive.google.com/file/d/1XFt_H7pXerrxX1wZ_Avppt4CaDTCzSju/view?usp=sharing',
    },
    {
      id: 2,
      image: wictronix,
      title: 'Wictronix Infotech',
      tenure: "(May-2022 to July-2022)",
      description: [
        'Tech Stack: PHP, CSS, HTML, MySQL',
        'Contributed in many projects mainly as a Frontend Developer.',
        'Designed Figma accurate web pages for real clients.',
      ],
      link: 'https://wictronix.com/',
      certificationLink: 'https://drive.google.com/file/d/1hb38Xwp3jkPiUTcb99G8x89qj5oX-KXB/view?usp=sharing',
    },
  ];

  return (
    <div className="p-5 md:p-10">
      <div className="flex flex-col items-center">
        <h1 className="inline-block text-3xl text-center font-bold mb-3 border-b-2 border-primary pb-1">Internships</h1>
        <p className="text-sm text-slate-500 text-center md:w-[80%] mx-auto">
          Here below I have listed my internships and the tech I have used.
        </p>
      </div>

      <div className="mt-6 space-y-5">
        {internships.map((internship) => (
          <a
            key={internship.id}
            href={internship.link}
            target="_blank"
            rel="noopener noreferrer"
            className="block"
          >
            <div className="flex flex-col md:flex-row items-center p-5 bg-white shadow-lg rounded-lg hover:shadow-xl cursor-pointer transition-all">
              <div className="md:w-1/3 w-full mb-5 md:mb-0">
                <img src={internship.image} alt={internship.title} className="w-full h-auto rounded-lg shadow-md" />
              </div>
              <div className="md:w-2/3 md:pl-5 w-full">
                <div className="flex justify-between items-center mb-3">
                  <h3 className="text-xl font-semibold">{internship.title}</h3>
                  <p className="text-md text-gray-600 mr-2">{internship.tenure}</p>
                </div>
                <ul className="text-sm space-y-2 text-gray-700">
                  {internship.description.map((point, index) => (
                    <li key={index} className="flex items-start">
                      <span className="mr-2 text-primary">•</span>
                      {point}
                    </li>
                  ))}
                </ul>
                <a
                  href={internship.certificationLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-all">
                    Certification
                  </button>
                </a>
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Internships;
