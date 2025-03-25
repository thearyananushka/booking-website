import img from "../assets/images.jpg"

const MovieRow = ({ title }) => {
    return (
      <div className="px-10 my-8">
        <h2 className="text-2xl font-semibold text-white mb-4">{title}</h2>
        <div className="flex space-x-4 overflow-x-scroll scrollbar-hide scroll-smooth">
          <MovieCard image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTc9APxkj0xClmrU3PpMZglHQkx446nQPG6lA&s" />
          <MovieCard image={img} />
          <MovieCard image="/movie3.jpg" />
          <MovieCard image="/movie4.jpg" />
        </div>
      </div>
    );
  };
  
  const MovieCard = ({ image }) => (
    <div className="relative w-44 h-64 rounded-lg overflow-hidden shadow-lg cursor-pointer group">
      <img
        src={image}
        alt="Movie"
        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
    </div>
  );
  
  export default MovieRow;
  