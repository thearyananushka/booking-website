import React from "react";

const HeroSection = () => {
  return (
    <div className="relative h-screen w-full overflow-hidden flex items-center">
      {/* Background Image */}
      <img
        src="https://images.unsplash.com/photo-1489513691500-41ef4acdb665?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8ZXZlbnQlMjB3YWxscGFwZXJ8ZW58MHx8MHx8fDA%3D"
        alt="Event Banner"
        className="absolute inset-0 w-full h-full object-cover scale-110 transition-transform duration-[3000ms] ease-in-out hover:scale-100"
      />

      {/* Overlay for Cinematic Effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-transparent"></div>

      {/* Content Section */}
      <div className="absolute left-16 bottom-20 md:left-24 text-white space-y-5 max-w-lg animate-fadeIn">
        <h1 className="text-6xl font-extrabold tracking-wide drop-shadow-lg leading-tight">
          Ashoka - The Great ❤️
        </h1>
        <p className="text-lg text-gray-300 max-w-md leading-relaxed drop-shadow-md">
          It’s been **5 years**, and **Chirag & Deepika** are still together. Experience their love story like never before!
        </p>

        {/* CTA Buttons */}
        <div className="flex space-x-6">
          <button className="px-8 py-3 bg-white text-black font-semibold rounded-lg shadow-lg hover:bg-gray-200 transition-all duration-300">
            ▶ Watch Now
          </button>
          <button className="px-8 py-3 bg-gray-800 text-white font-semibold rounded-lg hover:bg-gray-700 transition-all duration-300">
            + Add to Watchlist
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;




// import React from "react";

// const HeroSection = () => {
//   return (
//     <div className="relative h-screen w-full overflow-hidden flex items-center justify-center">
//       {/* Background Image */}
//       <img
//         src="/path-to-your-image.jpg" // Replace with an actual image path
//         alt="Hero Background"
//         className="absolute w-full h-full object-cover"
//       />

//       {/* Overlay */}
//       <div className="absolute w-full h-full bg-black bg-opacity-50"></div>

//       {/* Content */}
//       <div className="relative text-center text-white z-10">
//         <h1 className="text-5xl font-bold">Welcome to Our Event</h1>
//         <p className="mt-4 text-lg">
//           Join us for an unforgettable experience!
//         </p>
//         <button className="mt-6 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-md">
//           Learn More
//         </button>
//       </div>
//     </div>
//   );
// };

// export default HeroSection;

