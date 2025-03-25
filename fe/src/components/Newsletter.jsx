import React from "react";
import { FaPaperPlane } from "react-icons/fa";

const Newsletter = () => {
  return (
    <div className="relative w-full py-16 px-4 overflow-hidden bg-[#0a0a0a]">
      {/* Neon Glow Effect */}
      <div className="absolute inset-0 bg-[radial-gradient(circle,#ffffff0d_10%,transparent_80%)] opacity-30 pointer-events-none"></div>
      
      {/* Animated Particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white opacity-20 rounded-full animate-[twinkle_5s_linear_infinite]"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          ></div>
        ))}
      </div>

      <div className="max-w-[1200px] mx-auto text-center relative z-10">
        <h2 className="text-4xl font-extrabold text-white mb-4 tracking-wide drop-shadow-lg">
          🔥 Stay Ahead with Event Alerts!
        </h2>
        <p className="text-gray-400 text-lg mb-8 max-w-lg mx-auto leading-relaxed">
          Get **exclusive invites, trending events, and VIP access** straight to your inbox!  
          Subscribe now and never miss the next **big thing**.
        </p>

        <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full sm:w-[400px] px-6 py-3 text-white bg-gray-900 bg-opacity-80 rounded-md border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all placeholder-gray-400"
          />
          <button className="flex items-center gap-2 bg-gradient-to-r from-[#ff00ff] to-[#00eaff] px-8 py-3 rounded-md text-white font-semibold text-lg shadow-lg hover:opacity-90 transition-all">
            Subscribe <FaPaperPlane />
          </button>
        </div>

        <p className="text-gray-500 text-sm mt-4 italic">
          🚀 Get the latest event drops before anyone else!
        </p>
      </div>

      {/* Soft Glowing Borders */}
      <div className="absolute top-0 left-1/2 w-[90%] h-[2px] bg-gradient-to-r from-transparent via-[#ff00ff] to-transparent blur-sm"></div>
      <div className="absolute bottom-0 left-1/2 w-[90%] h-[2px] bg-gradient-to-r from-transparent via-[#00eaff] to-transparent blur-sm"></div>
    </div>
  );
};

export default Newsletter;
