const LatestReleases = () => {
    return (
      <div className="p-6">
        <h2 className="text-2xl font-bold mb-4">Latest Releases</h2>
        <div className="flex overflow-x-scroll no-scrollbar space-x-4">
          {[1, 2, 3, 4, 5].map((item) => (
            <div key={item} className="w-[180px] h-[250px] bg-gray-800 rounded-lg overflow-hidden shadow-md">
              <img src={`/assets/latest_${item}.jpg`} alt="Movie" className="w-full h-full object-cover" />
            </div>
          ))}
        </div>
      </div>
    );
  };
  export default LatestReleases;
  