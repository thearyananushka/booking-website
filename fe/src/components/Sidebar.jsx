// import { Home, Search, Tv, Play, Film, Bookmark } from "lucide-react";
// import { useState } from "react";

// const Sidebar = () => {
//   const [expanded, setExpanded] = useState(false);

//   return (
//     <div
//       className={`fixed sidebar top-0 left-0 h-full bg-black/80 backdrop-blur-lg shadow-lg transition-all duration-300 hover:w-60 w-16 p-4 flex flex-col gap-6 text-gray-300 border-r border-gray-700`}
//       onMouseEnter={() => setExpanded(true)}
//       onMouseLeave={() => setExpanded(false)}
//     >
//       <div className="text-xl font-bold text-white flex items-center gap-2">
//         {/* <img src="/hotstar-logo.png" alt="Logo" className="w-8" /> */}
//         {expanded && <span className="text-lg">A2 Event</span>}
//       </div>
//       <NavItem icon={Home} label="Home" expanded={expanded} />
//       <NavItem icon={Search} label="Search" expanded={expanded} />
//       <NavItem icon={Tv} label="Streams" expanded={expanded} />
//       <NavItem icon={Play} label="Movies" expanded={expanded} />
//       <NavItem icon={Film} label="Originals" expanded={expanded} />
//       <NavItem icon={Bookmark} label="Watchlist" expanded={expanded} />
//     </div>
//   );
// };

// const NavItem = ({ icon: Icon, label, expanded }) => {
//   return (
//     <div
//       className="flex items-center gap-4 p-3 hover:bg-white/10 rounded-lg cursor-pointer transition-all duration-300"
//     >
//       <Icon className="ankit  text-gray-400 group-hover:text-white" />
//       {expanded && <span className="text-white text-sm">{label}</span>}
//     </div>
//   );
// };

// export default Sidebar;



import { Home, Search, Tv, Play, Film, Bookmark } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom"; // Import Link

const Sidebar = () => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div
      className={`fixed sidebar top-0 left-0 h-full bg-black/80 backdrop-blur-lg shadow-lg transition-all duration-300 hover:w-60 w-16 p-4 flex flex-col gap-6 text-gray-300 border-r border-gray-700`}
      onMouseEnter={() => setExpanded(true)}
      onMouseLeave={() => setExpanded(false)}
    >
      <div className="text-xl font-bold text-white flex items-center gap-2">
        {expanded && <span className="text-lg">A2 Event</span>}
      </div>
      <NavItem icon={Home} label="Home" expanded={expanded} path="/" />
      <NavItem icon={Search} label="Search" expanded={expanded} path="/search" />
      <NavItem icon={Tv} label="Streams" expanded={expanded} path="/videos" />
      <NavItem icon={Play} label="Movies" expanded={expanded} path="/movies" />
      <NavItem icon={Film} label="Originals" expanded={expanded} path="/originals" />
      <NavItem icon={Bookmark} label="Watchlist" expanded={expanded} path="/watchlist" />
    </div>
  );
};

const NavItem = ({ icon: Icon, label, expanded, path }) => {
  return (
    <Link
      to={path} // Use Link for navigation
      className="flex items-center gap-4 p-3 hover:bg-white/10 rounded-lg cursor-pointer transition-all duration-300"
    >
      <Icon className="text-gray-400 group-hover:text-white" />
      {expanded && <span className="text-white text-sm">{label}</span>}
    </Link>
  );
};

export default Sidebar;
