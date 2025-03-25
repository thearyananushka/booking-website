const FeaturedSection = () => {
    return (
      <div className="relative w-full h-[80vh] bg-cover bg-center flex items-center justify-start px-12"
        style={{ backgroundImage: "url('/assets/featured.jpg')" }}>
        <div className="bg-gradient-to-r from-black/90 to-transparent absolute inset-0"></div>
        <div className="relative z-10 max-w-lg">
          <h1 className="text-5xl font-bold">दिल को तुमसे प्यार हुआ</h1>
          <p className="text-lg mt-3">5 years later! Chirag and Deepika are separated but memories of love remain...</p>
          <button className="mt-4 bg-white text-black px-6 py-2 rounded-lg">Watch Now</button>
        </div>
      </div>
    );
  };
  export default FeaturedSection;
  