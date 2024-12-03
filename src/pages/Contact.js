// src/pages/Contact.js
import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">Contact</h2>
        <form className="max-w-lg mx-auto">
          <div className="mb-4">
            <label className="block text-gray-700">Name</label>
            <input type="text" placeholder="Your Name" className="w-full p-2 border rounded" />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Email</label>
            <input type="email" placeholder="Your Email" className="w-full p-2 border rounded" />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Message</label>
            <textarea placeholder="Your Message" className="w-full p-2 border rounded" rows="4"></textarea>
          </div>
          <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
