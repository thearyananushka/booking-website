import React from "react";

const tickets = [
  {
    type: "Regular Pass",
    price: "$30",
    benefits: ["🎵 Access to General Area", "🍕 1 Free Snack", "🎫 Digital Ticket"],
    color: "bg--600 border-blue-400",
  },
  {
    type: "VIP Pass",
    price: "$80",
    benefits: ["🎤 Front Row Access", "🍽️ Complimentary Dinner", "🥂 VIP Lounge"],
    color: "bg--600 border-purple-400",
  },
  {
    type: "VVIP Pass",
    price: "$150",
    benefits: [
      "🚀 Backstage Meet & Greet",
      "🍾 Unlimited Drinks & Food",
      "🛏️ Exclusive Lounge Access",
    ],
    color: "bg-red-600 border-red-400",
  },
];

const TicketPricing = () => {
  return (
    <div className="w-full flex justify-center my-12 px-4">
      <div className="w-[85%] max-w-[1200px]">
        <h2 className="text-3xl font-bold text-white text-center mb-8">
          🎟️ Choose Your Ticket
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {tickets.map((ticket, index) => (
            <div
              key={index}
              className={`p-6 rounded-lg text-white text-center shadow-lg border-4 ${ticket.color} hover:scale-105 transition-transform duration-300 relative overflow-hidden`}
            >
              <h3 className="text-2xl font-bold mb-3">{ticket.type}</h3>
              <p className="text-3xl font-extrabold">{ticket.price}</p>
              <ul className="mt-4 text-lg">
                {ticket.benefits.map((benefit, i) => (
                  <li key={i} className="flex items-center gap-2 justify-center">
                    ✅ {benefit}
                  </li>
                ))}
              </ul>
              <button className="mt-6 bg-black text-white px-6 py-2 rounded-full hover:bg-gray-800 transition-all">
                Buy Now
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TicketPricing;
