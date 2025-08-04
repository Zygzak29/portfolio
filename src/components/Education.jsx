import React from 'react';

const Education = () => {
  const educationDetails = [
    {
      logo: "logo-arrow",
      degree: '5th class',
      institution: 'Technikum Inforamtyczne SCI',
      grades: 'In progress',
      year: '2021-2026?',
      desc: "IT technical school with specialization in cybersecurity, computer networks, computer systems administration and programming",
    },
    {
      logo: "logo-play",
      degree: 'Primary/Completed',
      institution: 'Primary School No. 28 named after Bolesław Czwójdziński in Szczecin',
      grades: 'Average grade: 5.61 (The highest in the year)',
      year: '2013-2021',
      desc: "Public primary school in the Płonia district of Szczecin",       
    },
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      <h3 className="text-4xl text-center font-semibold mb-1">
          My <span className="text-cyan-600">Education</span>
        </h3>
      <p className="text-lg text-center font-normal ">My educational details are as follows.</p>
      <hr className="border-gray-300 w-full mb-8" />
      <div>
        {educationDetails.map((edu, index) => (
          <div key={index} className="bg-gray-200 rounded-lg shadow-md p-6 flex flex-col items-start mb-4">
            <ion-icon name={edu.logo} class="text-primary text-xl mr-2" />
            <div className="text-lg font-medium mb-2 text-gray-700">{edu.degree}</div>
            <div className="flex-1">
              <div className="text-base text-gray-500">{edu.institution}</div>
              <div className="text-base text-gray-500">{edu.grades}</div>
              <div className="text-base text-gray-500">{edu.year}</div>
            </div>
            <p className="text-gray-700">{edu.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Education;
