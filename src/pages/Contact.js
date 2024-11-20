import React, { useState } from 'react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const Contact = () => {
  const [message, setMessage] = useState('');
  const [name, setName] = useState('');

  const handleSendMessage = (e) => {
    e.preventDefault();

    // WhatsApp number
    const whatsappNumber = '923092874587';

    // Format the message for WhatsApp
    const whatsappURL = `https://wa.me/${whatsappNumber}/?text=${encodeURIComponent(
      `I am *${name}*\n\n "${message}"`
    )}`;

    // Open the WhatsApp chat
    window.open(whatsappURL, '_blank');
  };

  return (
    <section id="contact" className="py-16 bg-gray text-dark-blue">
      <div className="max-w-7xl mx-auto px-6 sm:px-12">
        {/* Section Header with Animation */}
        <div className="text-center mb-12" data-aos="fade-up">
          <h2 className="text-4xl font-bold text-black mb-4">Contact Us</h2>
          <p className="text-lg text-gray-600">
            We're here to help! Reach out to us with your questions or concerns.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information with Animation */}
          <div className="bg-white rounded-lg shadow-lg p-6" data-aos="fade-up" data-aos-delay="200">
            <h3 className="text-xl font-semibold mb-4">Get in Touch</h3>
            <ul className="space-y-4">
              <li className="flex items-center text-gray-700">
                <FaPhone className="text-orange mr-4" />
                <span>+92-123-456-7890</span>
              </li>
              <li className="flex items-center text-gray-700">
                <FaEnvelope className="text-orange mr-4" />
                <a
                  href="mailto:onlinegurutechniques@gmail.com"
                  className="hover:underline"
                >
                  onlinegurutechniques@gmail.com
                </a>
              </li>
              <li className="flex items-center text-gray-700">
                <FaMapMarkerAlt className="text-orange mr-4" />
                <span>Mandi Bahauddin, Punjab, Pakistan</span>
              </li>
            </ul>
          </div>

          {/* Contact Form with Animation */}
          <div className="bg-white rounded-lg shadow-lg p-6" data-aos="fade-up" data-aos-delay="400">
            <h3 className="text-xl font-semibold mb-4">Send Us a Message</h3>
            <form onSubmit={handleSendMessage} className="space-y-4">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-orange focus:border-orange sm:text-sm p-2"
                  placeholder="Your Name"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  rows="4"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-orange focus:border-orange sm:text-sm p-2"
                  placeholder="Your Message"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full py-2 px-4 bg-orange text-white rounded-md shadow-md hover:bg-dark-blue transition duration-300"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
