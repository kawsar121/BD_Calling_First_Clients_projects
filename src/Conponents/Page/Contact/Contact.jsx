import React from 'react';

const Contact = () => {
    return (
        <div>
            <div className="max-w-xl mx-auto mt-20 mb-36 bg-white p-8 rounded-xl shadow-lg">
        <h2 className="text-3xl font-bold text-pink-600 mb-6 text-center">Contact Us</h2>
        <form className="space-y-4">
          <div>
            <label className="block text-gray-700 font-medium mb-1">Name</label>
            <input
              type="text"
              placeholder="Your Name"
              className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-pink-400"
            />
          </div>
          <div>
            <label className="block text-gray-700 font-medium mb-1">Email</label>
            <input
              type="email"
              placeholder="you@example.com"
              className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-pink-400"
            />
          </div>
          <div>
            <label className="block text-gray-700 font-medium mb-1">Message</label>
            <textarea
              placeholder="Your Message"
              rows="4"
              className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-pink-400"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-pink-500 text-white font-semibold py-3 rounded-md hover:bg-pink-600 transition duration-300"
          >
            Send Message
          </button>
        </form>
      </div>
        </div>
    );
};

export default Contact;