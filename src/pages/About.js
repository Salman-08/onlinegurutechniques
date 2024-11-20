import React from 'react';
import Salman from '../assets/Salman.jpg'
import Abdullah from '../assets/Abdullah.png'

const About = () => {
  return (
    <section id="about" className="py-16 bg-gray text-dark-blue">
      <div className="max-w-7xl mx-auto px-6 sm:px-12">
        {/* Section Header */}
        <div className="text-center mb-12" data-aos="fade-up">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-black mb-4">
            Meet The Team
          </h2>
          <p className="text-lg sm:text-xl text-dark-blue">
            Our team of experts is here to help you with all your technical and educational needs.
          </p>
        </div>

        {/* Team Members */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
          {/* Salman Ahmad */}
          <div className="bg-white rounded-lg shadow-lg p-6 text-center" data-aos="fade-up" data-aos-delay="200">
            <img
              src={Salman} // Replace with Salman Ahmad's profile picture
              alt="Salman Ahmad"
              className="w-32 h-32 rounded-full mx-auto mb-4"
            />
            <h3 className="text-xl font-semibold text-dark-blue">Salman Ahmad</h3>
            <p className="text-gray-600 mb-4">Computer Science Graduate</p>
            <p className="text-gray-600">
              Salman is an expert in web development, solving hardware and software issues, and helping students with their technical problems.
              His goal is to make technology accessible and solve problems efficiently.
            </p>
          </div>

          {/* Abdullah Ghauri */}
          <div className="bg-white rounded-lg shadow-lg p-6 text-center" data-aos="fade-up" data-aos-delay="400">
            <img
              src={Abdullah} // Replace with Abdullah Ghauri's profile picture
              alt="Abdullah Ghauri"
              className="w-32 h-32 rounded-full mx-auto mb-4"
            />
            <h3 className="text-xl font-semibold text-dark-blue">Abdullah Ghauri</h3>
            <p className="text-gray-600 mb-4">Business Graduate</p>
            <p className="text-gray-600">
              Abdullah is an experienced business strategist, working alongside Salman to develop the platform and ensure it serves the needs
              of students effectively. He specializes in operations and user engagement.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
