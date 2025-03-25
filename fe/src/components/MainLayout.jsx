import Sidebar from "./Sidebar";
import HeroSection from "./HeroSection";
// import MovieRow from "./MovieRow";
import SingerCard from "./Singer";
import TrendingEvents from "./TrendingEvents";
import TopCategories from "./TopCategories";
import FeaturedEvents from "./FeaturedEvents";
import Testimonials from "./Testimonial";
// import EventPartners from "./EventPartner";
// import TicketPricing from "./TicketPricing";
import Newsletter from "./Newsletter";
import Footer from "./Footer";
import FloatingNavbar from "./FloatingNavbar";

// import UpcomingEvents from "./UpcomingEvents";

const MainLayout = () => {
  return (
    <div className="flex bg-black text-white min-h-screen">
        <Sidebar />
      
      <div className="ml-15 w-full transition-all duration-301 ">
        <FloatingNavbar />
        <HeroSection />
        <SingerCard />
        <TrendingEvents />
        <TopCategories />
        <FeaturedEvents />
        <Testimonials />
        <Newsletter />
        <Footer />
        {/* <TicketPricing /> */}
        {/* <EventPartners /> */}
        {/* <UpcomingEvents /> */}
        {/* <MovieRow title="Latest Releases" />
        <MovieRow title="Trending Now" />
        <MovieRow title="Popular Shows" /> */}
      </div>
    </div>
  );
};

export default MainLayout;
