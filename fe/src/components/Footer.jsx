// import React from "react";
// import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";

// const Footer = () => {
//   return (
//     <footer className="relative bg-[#0a0a0a] text-white py-12 px-6">
//       {/* Neon Glow Border */}
//       <div className="absolute top-0 left-1/2 w-[90%] h-[2px] bg-gradient-to-r from-transparent via-[#ff00ff] to-transparent blur-sm"></div>

//       <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row justify-between items-center text-center md:text-left">
//         {/* Logo & About Section */}
//         <div className="mb-6 md:mb-0">
//           <h2 className="text-3xl font-extrabold text-white tracking-wider">
//             🎟️ A2 Aryan
//           </h2>
//           <p className="text-gray-400 text-sm mt-2 max-w-[300px]">
//             Experience the thrill of live events, concerts, and workshops like never before!
//           </p>
//         </div>

//         {/* Quick Links */}
//         <div className="flex flex-col md:flex-row gap-6 text-gray-400 text-sm">
//           <a href="#" className="hover:text-white transition">About</a>
//           <a href="#" className="hover:text-white transition">Events</a>
//           <a href="#" className="hover:text-white transition">Privacy Policy</a>
//           <a href="#" className="hover:text-white transition">Contact</a>
//         </div>

//         {/* Social Media Links */}
//         <div className="flex gap-4 mt-6 md:mt-0">
//           <a href="#" className="text-gray-400 hover:text-[#ff00ff] transition text-xl">
//             <FaFacebookF />
//           </a>
//           <a href="#" className="text-gray-400 hover:text-[#ff00ff] transition text-xl">
//             <FaTwitter />
//           </a>
//           <a href="#" className="text-gray-400 hover:text-[#ff00ff] transition text-xl">
//             <FaInstagram />
//           </a>
//           <a href="#" className="text-gray-400 hover:text-[#ff00ff] transition text-xl">
//             <FaYoutube />
//           </a>
//         </div>
//       </div>

//       {/* Divider */}
//       <div className="w-[90%] mx-auto border-t border-gray-700 opacity-50 my-6"></div>

//       {/* Copyright */}
//       <p className="text-gray-500 text-sm text-center">
//         © {new Date().getFullYear()} EventWave. All rights reserved.
//       </p>
//     </footer>
//   );
// };

// export default Footer;




import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube, FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="relative bg-[#0a0a0a] text-white py-12 px-6 overflow-hidden">
      {/* Neon Glow Border */}
      <div className="absolute top-0 left-1/2 w-[90%] h-[2px] bg-gradient-to-r from-transparent via-[#1e88e5] to-transparent blur-sm"></div>

      <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-4 gap-10 text-center md:text-left">
        {/* Logo & About Section */}
        <div>
          <h2 className="text-3xl font-extrabold text-[#1e88e5] tracking-wider glow-text">
            🎟️ A2 Events
          </h2>
          <p className="text-gray-400 text-sm mt-2">
            Elevate your event experience with **A2 Events** – where every moment becomes extraordinary! 🎭✨
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Quick Links</h3>
          <ul className="text-gray-400 space-y-2">
            <li><a href="#" className="hover:text-[#1e88e5] transition duration-300">About Us</a></li>
            <li><a href="#" className="hover:text-[#1e88e5] transition duration-300">Events</a></li>
            <li><a href="#" className="hover:text-[#1e88e5] transition duration-300">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-[#1e88e5] transition duration-300">Contact</a></li>
          </ul>
        </div>

        {/* Event Categories */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Event Categories</h3>
          <ul className="text-gray-400 space-y-2">
            <li><a href="#" className="hover:text-[#1e88e5] transition duration-300">Concerts</a></li>
            <li><a href="#" className="hover:text-[#1e88e5] transition duration-300">Workshops</a></li>
            <li><a href="#" className="hover:text-[#1e88e5] transition duration-300">Sports</a></li>
            <li><a href="#" className="hover:text-[#1e88e5] transition duration-300">Conferences</a></li>
          </ul>
        </div>

        {/* Contact Section */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Contact Us</h3>
          <div className="text-gray-400 space-y-3">
            <p className="flex items-center justify-center md:justify-start gap-2">
              <FaMapMarkerAlt className="text-[#1e88e5]" /> Mumbai, India
            </p>
            <p className="flex items-center justify-center md:justify-start gap-2">
              <FaPhoneAlt className="text-[#1e88e5]" /> +91 98765 43210
            </p>
            <p className="flex items-center justify-center md:justify-start gap-2">
              <FaEnvelope className="text-[#1e88e5]" /> support@a2events.com
            </p>
          </div>
        </div>
      </div>

      {/* Newsletter Subscription */}
      <div className="mt-10 text-center">
        <h3 className="text-xl font-semibold text-white mb-3">Stay Updated!</h3>
        <p className="text-gray-400 text-sm mb-4">Subscribe to our newsletter for exclusive event updates and offers.</p>
        <div className="flex justify-center items-center gap-2">
          <input
            type="email"
            placeholder="Enter your email"
            className="p-2 rounded-lg bg-gray-800 text-white border border-gray-600 focus:outline-none"
          />
          <button className="px-4 py-2 bg-[#1e88e5] text-white font-semibold rounded-lg hover:bg-[#1565c0] transition">
            Subscribe
          </button>
        </div>
      </div>

      {/* Social Media Links */}
      <div className="flex justify-center gap-4 mt-6">
        {[
          { icon: <FaFacebookF />, link: "#" },
          { icon: <FaTwitter />, link: "#" },
          { icon: <FaInstagram />, link: "#" },
          { icon: <FaYoutube />, link: "#" }
        ].map((social, index) => (
          <a
            key={index}
            href={social.link}
            className="text-gray-400 hover:text-[#1e88e5] transition duration-300 text-xl transform hover:scale-110"
          >
            {social.icon}
          </a>
        ))}
      </div>

      {/* Divider */}
      <div className="w-[90%] mx-auto border-t border-gray-700 opacity-50 my-6"></div>

      {/* Copyright */}
      <p className="text-gray-500 text-sm text-center">
        © {new Date().getFullYear()} A2 Events. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
