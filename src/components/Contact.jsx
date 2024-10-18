import React from "react";
import { teamMembers } from "../constants/constants"; // Import team members from constants
import { FiMail } from "react-icons/fi";

const Contact = () => {
  // Define an array of team member names and their corresponding emails
  const teamContacts = [
    { name: "Satyam Raj", email: "satyamraj1643@gmail.com" },
    { name: "Aditya Kumar", email: "adityakumar5155@gmail.com" },
    { name: "Ritesh Raj Tiwari", email: "riteshrajtiwari.cse@gmail.com" },
    { name: "Nidhi Satyapriya", email: "satyapriyanidhi@gmail.com" },
    { name: "Roshan", email: "kumarros2002@gmail.com" },
    { name: "Ankur Dwivedi", email: "ankurdwivedi244@gmail.com" },
  ];

  return (
    <footer className="overflow-x-hidden">
      {/* Meet Our Team Section */}
      <div className="bg-gradient-to-r from-cyan-500 to-blue-500 py-12">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h3 className="text-3xl md:text-4xl font-extrabold mb-6 text-white">
            Meet Our Team
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {teamMembers.map((member) => (
              <div key={member.id} className="flex flex-col items-center">
                <div className="w-32 h-32 bg-white rounded-full shadow-lg hover:shadow-2xl transition-transform duration-300 transform hover:scale-105 flex items-center justify-center">
                  <img
                    src={member.imageUrl}
                    alt={member.name}
                    className="w-28 h-28 object-cover rounded-full"
                  />
                </div>
                <div className="text-center mt-4">
                  <h4 className="text-lg md:text-xl font-bold text-gray-100">
                    {member.name}
                  </h4>
                  <p className="text-gray-200 mt-1">{member.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Contact Us Section with full-width background */}
      <div className="bg-gradient-to-r from-gray-800 via-gray-900 to-black py-12">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h3 className="text-3xl md:text-4xl font-extrabold mb-6 text-white">
            Contact Us
          </h3>
          <p className="text-lg md:text-xl mb-6 text-gray-300">
            We would love to hear from you! Reach out to any of our team
            members:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {teamContacts.map((contact, index) => (
              <div key={index} className="flex justify-center">
                <a
                  href={`mailto:${contact.email}`}
                  className="flex items-center bg-cyan-600 hover:bg-cyan-500 text-white py-2 px-4 rounded-lg transition duration-300"
                  style={{ width: "220px" }} // Set fixed width for consistency
                >
                  <FiMail className="text-white text-xl mr-2" />
                  <span className="truncate">{contact.name}</span>{" "}
                  {/* Truncate long names */}
                </a>
              </div>
            ))}
          </div>

          {/* Copyright Section */}
          <p className="text-sm mt-8 text-white">
            © {new Date().getFullYear()} Netram. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Contact;
