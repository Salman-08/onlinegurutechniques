import React, { useState } from 'react';

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAnswer = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-16 bg-gray text-dark-blue">
      <div className="max-w-7xl mx-auto px-6 sm:px-12">
        <div className="text-center mb-12" data-aos="fade-up">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-black mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg sm:text-xl text-dark-blue">
            Find answers to common questions about our services.
          </p>
        </div>

        <div className="space-y-6">
          {/* FAQ Item 1 */}
          <div className="bg-white rounded-lg shadow-lg" data-aos="fade-up" data-aos-delay="200">
            <button
              className="w-full text-left px-6 py-4 font-medium text-black focus:outline-none"
              onClick={() => toggleAnswer(0)}
            >
              <div className="flex justify-between items-center">
                <span>How can you help me with my coding issues?</span>
                <svg
                  className={`w-6 h-6 transform transition-transform ${activeIndex === 0 ? 'rotate-180' : ''}`}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </button>
            {activeIndex === 0 && (
              <div className="px-6 py-4 text-sm text-neutral-500">
                We assist with debugging, code optimization, and solving common coding problems in languages such as HTML, CSS, JavaScript, Python, and PHP.
              </div>
            )}
          </div>

          {/* FAQ Item 2 */}
          <div className="bg-white rounded-lg shadow-lg" data-aos="fade-up" data-aos-delay="400">
            <button
              className="w-full text-left px-6 py-4 font-medium text-black focus:outline-none"
              onClick={() => toggleAnswer(1)}
            >
              <div className="flex justify-between items-center">
                <span>What services do you provide for hardware/software troubleshooting?</span>
                <svg
                  className={`w-6 h-6 transform transition-transform ${activeIndex === 1 ? 'rotate-180' : ''}`}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </button>
            {activeIndex === 1 && (
              <div className="px-6 py-4 text-sm text-neutral-500">
                We provide assistance with diagnosing and fixing issues related to operating systems, application errors, device malfunctions, and more.
              </div>
            )}
          </div>

          {/* Add more FAQ items in a similar pattern with AOS animations */}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
