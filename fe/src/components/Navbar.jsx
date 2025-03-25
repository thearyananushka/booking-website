import { useState } from "react";
import { FaSearch, FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";
import Events from "./events"

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  window.onscroll = () => {
    setIsScrolled(window.scrollY > 50);
    return () => (window.onscroll = null);
  };

  return (
    <nav className={`fixed top-0 w-full px-6 py-4 z-50 transition-all ${isScrolled ? "bg-black shadow-lg" : "bg-transparent"}`}>
      <div className="flex items-center justify-between max-w-7xl mx-auto">
        {/* Logo */}
        <Link to="/" className="text-white text-2xl font-bold">
          A2-Event
        </Link>

        {/* Navigation Links */}
        <ul className="hidden md:flex gap-6 text-white">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/events">Events</Link></li>
          <li><Link to="/celeb">Celeb</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>

        {/* Icons */}
        <div className="flex gap-4 text-white">
          <FaSearch className="cursor-pointer" />
          <FaUser className="cursor-pointer" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

