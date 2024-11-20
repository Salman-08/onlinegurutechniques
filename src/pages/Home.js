import React from 'react';

const HomePage = () => {
  return (
    <section id="home" className="relative h-screen bg-dark-blue overflow-hidden">
      {/* Background Shapes (static circles) */}
      <div className="absolute top-0 left-0 w-full h-full z-0">
        <div className="absolute top-10 left-10 w-32 h-32 rounded-full bg-orange opacity-30"></div>
        <div className="absolute bottom-20 right-20 w-48 h-48 rounded-full bg-gray opacity-30"></div>
        <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-white opacity-20"></div>
      </div>

      {/* Content (Slogan, Call to Action, etc.) */}
      <div className="relative z-10 flex flex-col justify-center items-center h-full text-center text-white px-4 sm:px-8 lg:px-12">
        {/* Welcoming Message */}
        <div className="max-w-4xl w-full text-center mx-auto mb-6">
          <h2 data-aos="fade-up" data-aos-duration="1500" className="text-2xl sm:text-3xl lg:text-4xl font-semibold mb-4">
            Welcome to OnlineGuruTechniques!
          </h2>
        </div>

        {/* New Slogan with AOS Animation */}
        <div className="max-w-4xl w-full text-center mx-auto mb-6">
          <h1 data-aos="fade-up" data-aos-duration="1500" className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-6">
            Unlock Your Full Potential in Coding and Tech
          </h1>
        </div>

        {/* Description */}
        <div className="max-w-4xl w-full text-center mx-auto mb-8">
          <p data-aos="fade-up" data-aos-duration="1500" data-aos-delay="300" className="text-lg sm:text-xl">
            Explore solutions for coding challenges, project assistance, and more. We are here to help you grow!
          </p>
        </div>

        {/* Call to Action */}
        <div className="max-w-4xl w-full text-center mx-auto">
          <a
            href="#services"
            data-aos="fade-up"
            data-aos-duration="1500"
            data-aos-delay="600"
            className="bg-orange text-black py-3 px-6 rounded-lg font-semibold text-lg hover:bg-yellow-500 transition duration-300"
          >
            Get Started
          </a>
        </div>
      </div>

      {/* Decorative Gradient Shape (Optional) */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black to-transparent z-0"></div>
    </section>
  );
};

export default HomePage;
