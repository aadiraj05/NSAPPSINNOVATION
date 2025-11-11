import React from "react";

function Contact() {
  return (
    <div className="min-h-screen flex flex-col items-center bg-gray-50 px-4">
      {/* Heading */}
      <h1 className="text-4xl font-bold text-gray-800 mt-24 mb-4 ">
        Contact Us
      </h1>

      {/* Contact Form */}
      <form className="w-full max-w-md bg-white p-6 rounded-2xl shadow-lg">
        {/* Name */}
        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-semibold mb-2">
            Name
          </label>
          <input
            type="text"
            placeholder="Enter your name"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black/40 focus:outline-none"
          />
        </div>

        {/* Email */}
        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-semibold mb-2">
            Email
          </label>
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black/40 focus:outline-none"
          />
        </div>

        {/* Message */}
        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-semibold mb-2">
            Message
          </label>
          <textarea
            rows="4"
            placeholder="Write your message..."
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black/40 focus:outline-none"
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-black text-white py-3 rounded-lg font-semibold hover:bg-gray-800 transition duration-200 cursor-pointer"
        >
          Send Message
        </button>
      </form>
    </div>
  );
}

export default Contact;
