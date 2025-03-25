import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";



const events = [
  { id: 1, title: "Event 1", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTB6jQH76Aqx2EmQaDmxPhhwQWC3tys6xFyOg&s" },
  { id: 2, title: "Event 2", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHRU2ow2tmNWNY19dMq__KcpXupM__rJApfg&s" },
  { id: 3, title: "Event 3", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTB6jQH76Aqx2EmQaDmxPhhwQWC3tys6xFyOg&s" },
  { id: 4, title: "Event 4", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQK5CqiQQDLVEVd_mEtfKpqF8MTZj0SqiEEWg&s" },
  { id: 5, title: "Event 5", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHRU2ow2tmNWNY19dMq__KcpXupM__rJApfg&s" },
];

const Showcase = () => {
  return (
    <div className="w-[90vw] lg:w-[85vw] mx-auto mt-6 relative">
      <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-white">Latest Releases</h2>
      <Swiper
        modules={[Navigation, Autoplay]}
        spaceBetween={20}
        slidesPerView={2}
        breakpoints={{
          640: { slidesPerView: 3 },
          1024: { slidesPerView: 4 },
        }}
        navigation
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        loop
        className="rounded-xl overflow-hidden"
      >
        {events.map((event) => (
          <SwiperSlide key={event.id}>
            <div className="w-full h-[250px] md:h-[300px] rounded-lg overflow-hidden shadow-lg">
              <img
                src={event.img}
                alt={event.title}
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
              />
              <div className="text-center mt-2 text-lg font-medium text-white">{event.title}</div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Showcase;
