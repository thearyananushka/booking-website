import React, { useState, useEffect } from "react";

const upcomingEvents = [
  {
    name: "Sunburn Music Festival",
    date: "2025-03-10T18:00:00",
    image: "https://source.unsplash.com/500x300/?concert,party",
  },
  {
    name: "Stand-Up Comedy Night",
    date: "2025-03-15T20:00:00",
    image: "https://source.unsplash.com/500x300/?comedy,stage",
  },
  {
    name: "Football Championship Finale",
    date: "2025-03-20T17:30:00",
    image: "https://source.unsplash.com/500x300/?football,stadium",
  },
];

const getTimeRemaining = (eventDate) => {
  const total = Date.parse(eventDate) - Date.now();
  const days = Math.floor(total / (1000 * 60 * 60 * 24));
  const hours = Math.floor((total / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((total / 1000 / 60) % 60);
  const seconds = Math.floor((total / 1000) % 60);
  return { total, days, hours, minutes, seconds };
};

const UpcomingEvents = () => {
  const [timers, setTimers] = useState(
    upcomingEvents.map((event) => getTimeRemaining(event.date))
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setTimers(upcomingEvents.map((event) => getTimeRemaining(event.date)));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full flex justify-center my-12 px-4">
      <div className="w-[85%] max-w-[1200px]">
        <h2 className="text-3xl font-bold text-white text-center mb-6">
          🎟️ Upcoming Events
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {upcomingEvents.map((event, index) => (
            <div
              key={index}
              className="bg-gray-900 rounded-lg overflow-hidden shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-blue-500/50"
            >
              <img src={event.image} alt={event.name} className="w-full h-48 object-cover" />
              <div className="p-6 text-white">
                <h3 className="text-xl font-semibold">{event.name}</h3>
                <div className="flex justify-between text-lg font-bold mt-4">
                  <span>📅 {new Date(event.date).toDateString()}</span>
                </div>
                <div className="mt-4 flex justify-center gap-4 text-xl font-semibold">
                  <div className="bg-blue-500 px-4 py-2 rounded-md">{timers[index].days}d</div>
                  <div className="bg-purple-500 px-4 py-2 rounded-md">{timers[index].hours}h</div>
                  <div className="bg-yellow-500 px-4 py-2 rounded-md">{timers[index].minutes}m</div>
                  <div className="bg-red-500 px-4 py-2 rounded-md">{timers[index].seconds}s</div>
                </div>
                <button className="w-full bg-blue-600 text-white py-3 mt-6 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-all">
                  🎫 Book Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default UpcomingEvents;
