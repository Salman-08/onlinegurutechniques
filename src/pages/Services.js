import React from 'react';
import { FaProjectDiagram, FaTools, FaClipboardList, FaBookOpen, FaLaptopCode, FaGlobe } from 'react-icons/fa'; // Import additional icon

const Services = () => {
    return (
        <section id="services" className="py-16 bg-gray text-dark-blue">
            <div className="max-w-7xl mx-auto px-6 sm:px-12">
                {/* Section Header */}
                <div className="text-center mb-12">
                    <h2
                        data-aos="fade-up"
                        className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-black mb-4"
                    >
                        Our Services
                    </h2>
                    <p
                        data-aos="fade-up"
                        data-aos-delay="300"
                        className="text-lg sm:text-xl text-dark-blue"
                    >
                        Providing solutions that help students in coding, project development, and tech support.
                    </p>
                </div>

                {/* Services Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 text-center">
                    {/* Service 1: Coding Solutions */}
                    <div
                        data-aos="fade-up"
                        data-aos-delay="400"
                        className="bg-white rounded-lg shadow-lg p-6 text-center transform hover:scale-105 transition duration-300"
                    >
                        <div className="mb-6">
                            {/* Icon: Code */}
                            <FaLaptopCode className="w-16 h-16 mx-auto text-orange" />
                        </div>
                        <h3 className="text-xl font-semibold text-dark-blue mb-4">Coding Solutions</h3>
                        <p className="text-lg text-dark-blue mb-4">
                            Get help with your coding problems, ranging from syntax issues to algorithm challenges.
                        </p>
                    </div>

                    {/* Service 2: Project Assistance */}
                    <div
                        data-aos="fade-up"
                        data-aos-delay="500"
                        className="bg-white rounded-lg shadow-lg p-6 text-center transform hover:scale-105 transition duration-300"
                    >
                        <div className="mb-6">
                            {/* Icon: Project Diagram */}
                            <FaProjectDiagram className="w-16 h-16 mx-auto text-orange" />
                        </div>
                        <h3 className="text-xl font-semibold text-dark-blue mb-4">Project Assistance</h3>
                        <p className="text-lg text-dark-blue mb-4">
                            We offer expert advice and guidance to help you build, implement, and perfect your projects.
                        </p>
                    </div>

                    {/* Service 3: Tech Support */}
                    <div
                        data-aos="fade-up"
                        data-aos-delay="600"
                        className="bg-white rounded-lg shadow-lg p-6 text-center transform hover:scale-105 transition duration-300"
                    >
                        <div className="mb-6">
                            {/* Icon: Tools */}
                            <FaTools className="w-16 h-16 mx-auto text-orange" />
                        </div>
                        <h3 className="text-xl font-semibold text-dark-blue mb-4">Tech Support</h3>
                        <p className="text-lg text-dark-blue mb-4">
                            Get timely support for software installations, tech troubleshooting, and more.
                        </p>
                    </div>

                    {/* Service 4: Assignment Help */}
                    <div
                        data-aos="fade-up"
                        data-aos-delay="700"
                        className="bg-white rounded-lg shadow-lg p-6 text-center transform hover:scale-105 transition duration-300"
                    >
                        <div className="mb-6">
                            {/* Icon: Clipboard List */}
                            <FaClipboardList className="w-16 h-16 mx-auto text-orange" />
                        </div>
                        <h3 className="text-xl font-semibold text-dark-blue mb-4">Assignment Help</h3>
                        <p className="text-lg text-dark-blue mb-4">
                            Get assistance with your assignments, including coding tasks, research, and writing.
                        </p>
                    </div>

                    {/* Service 5: Tech Learning Resources */}
                    <div
                        data-aos="fade-up"
                        data-aos-delay="800"
                        className="bg-white rounded-lg shadow-lg p-6 text-center transform hover:scale-105 transition duration-300"
                    >
                        <div className="mb-6">
                            {/* Icon: Book Open */}
                            <FaBookOpen className="w-16 h-16 mx-auto text-orange" />
                        </div>
                        <h3 className="text-xl font-semibold text-dark-blue mb-4">Tech Learning Resources</h3>
                        <p className="text-lg text-dark-blue mb-4">
                            Access tutorials and resources to improve your coding skills and understanding of key tech concepts.
                        </p>
                    </div>

                    {/* Service 6: Web Development Services */}
                    <div
                        data-aos="fade-up"
                        data-aos-delay="900"
                        className="bg-white rounded-lg shadow-lg p-6 text-center transform hover:scale-105 transition duration-300"
                    >
                        <div className="mb-6">
                            {/* Icon: Globe */}
                            <FaGlobe className="w-16 h-16 mx-auto text-orange" />
                        </div>
                        <h3 className="text-xl font-semibold text-dark-blue mb-4">Web Development Services</h3>
                        <p className="text-lg text-dark-blue mb-4">
                            Let us help you build a responsive, functional, and aesthetically pleasing website for your personal or business needs.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Services;
