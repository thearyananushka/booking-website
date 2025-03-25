import React from "react";
import { FaMusic, FaTheaterMasks, FaMicrophoneAlt, FaFutbol, FaChalkboardTeacher } from "react-icons/fa";

const categories = [
  { name: "Music", icon: <FaMusic />, color: "bg-blue-700 shadow-blue-700" },
  { name: "Theatre", icon: <FaTheaterMasks />, color: "bg-purple-700 shadow-purple-700" },
  { name: "Comedy", icon: <FaMicrophoneAlt />, color: "bg-yellow-700 shadow-yellow-700" },
  { name: "Sports", icon: <FaFutbol />, color: "bg-green-700 shadow-green-700" },
  { name: "Workshops", icon: <FaChalkboardTeacher />, color: "bg-red-700 shadow-red-700" },
];

const TopCategories = () => {
  return (
    <div className="w-full flex justify-center my-12 px-4">
      <div className="w-[85%] max-w-[1200px] mr-12"> {/* Matching Hero Section Width */}
        <h2 className="text-3xl font-bold text-white text-center mb-6">🎭 Top Categories</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
          {categories.map((category, index) => (
            <div
              key={index}
              className={`p-6 rounded-lg text-white text-center shadow-lg cursor-pointer transform transition-all hover:scale-100 hover:shadow-[0_0_20px] ${category.color}`}
            >
              <div className="text-4xl mb-3">{category.icon}</div>
              <p className="text-lg font-semibold">{category.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TopCategories;
