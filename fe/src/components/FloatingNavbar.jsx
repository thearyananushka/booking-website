import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes, FaHome, FaCalendarAlt, FaInfoCircle, FaUser, FaMapMarkerAlt, FaStar } from "react-icons/fa";

const FloatingNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { name: "Home", path: "/", icon: <FaHome /> },
    { name: "Events", path: "/events", icon: <FaCalendarAlt /> },
    { name: "Venue", path: "/venue", icon: <FaMapMarkerAlt /> }, // ✅ Added Venue
    { name: "Celeb", path: "/celeb", icon: <FaStar /> }, // ✅ Added Celeb
    { name: "About", path: "/about", icon: <FaInfoCircle /> },
    { name: "Contact", path: "/contact", icon: <FaUser /> },
  ];

  return (
    <nav className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 bg-opacity-10 backdrop-blur-lg shadow-xl rounded-full px-8 py-4 flex justify-center items-center w-[85%] max-w-[600px] border border-white border-opacity-20">
      
      {/* Menu for Large Screens */}
      <ul className="hidden md:flex gap-10 text-white text-[15px] font-semibold tracking-wide justify-center w-full">
        {menuItems.map((item, index) => (
          <li key={index} className="relative group cursor-pointer">
            <Link to={item.path} className="transition-all duration-300">
              {item.name}
            </Link>
            <span className="absolute left-1/2 bottom-[-2px] w-0 group-hover:w-full h-[2px] bg-purple-400 transition-all duration-300 transform -translate-x-1/2"></span>
          </li>
        ))}
      </ul>

      {/* Mobile Menu Button */}
      <div className="md:hidden text-white text-2xl cursor-pointer absolute right-6" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <FaTimes /> : <FaBars />}
      </div>

      {/* Mobile Dropdown Menu */}
      <div
        className={`absolute top-[110%] left-1/2 transform -translate-x-1/2 w-[90%] max-w-[500px] bg-[#121212] bg-opacity-90 backdrop-blur-lg rounded-lg shadow-lg p-5 flex flex-col gap-4 transition-all duration-300 ease-in-out ${
          isOpen ? "opacity-100 scale-100" : "opacity-0 scale-95 pointer-events-none"
        }`}
      >
        {menuItems.map((item, index) => (
          <Link
            key={index}
            to={item.path}
            className="text-white flex items-center gap-3 hover:text-purple-400 transition"
            onClick={() => setIsOpen(false)}
          >
            {item.icon} {item.name}
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default FloatingNavbar;
