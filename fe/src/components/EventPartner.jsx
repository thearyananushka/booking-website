import React from "react";

const partners = [
  { name: "Red Bull", logo: "/images/redbull.png" },
  { name: "Spotify", logo: "/images/spotify.png" },
  { name: "Nike", logo: "/images/nike.png" },
  { name: "Coca-Cola", logo: "/images/cocacola.png" },
  { name: "Amazon", logo: "/images/amazon.png" },
];

const EventPartners = () => {
  return (
    <div className="w-full flex justify-center my-16 px-4">
      <div className="w-[85%] max-w-[1200px]">
        <h2 className="text-3xl font-bold text-white text-center mb-10">
          🤝 Our Proud Partners & Sponsors
        </h2>
        <div className="flex flex-wrap justify-center gap-8">
          {partners.map((partner, index) => (
            <div
              key={index}
              className="w-36 h-20 flex items-center justify-center bg-white p-4 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
            >
              <img
                src={partner.logo}
                alt={partner.name}
                className="max-w-full max-h-full object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EventPartners;
