import { Routes, Route } from "react-router-dom";
import MainLayout from "./components/MainLayout";
import Contact from "./components/Contact";
import EventPage from "./components/Event";
import Venue from "./components/venue/Venue";
import WedCard from './components/venue/WedCard';
import EventCeleb from "./components/EventCeleb"
import Car from './components/venue/Car';
import Disney from './components/venue/Disney'
import SingerList from './components/venue/SingerList'
import Celeb from './components/venue/Celeb'
import Videos from './components/vidstream/Videos'
import Video from './components/vidstream/Video';
import VidCard from './components/vidstream/VidCard';


function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/events" element={<EventPage />} />
      <Route path="/venue" element={<Venue />} />
      <Route path="/celeb" element={<EventCeleb />} />
      <Route path="/celeb" element={<EventCeleb />} />
      <Route path="/venue/:id" element={<WedCard />} />
      <Route path="/singer-list" element={<SingerList />} />


        <Route path="/rental-cars" element={<Car />} />
        <Route path="/disneyland" element={<Disney />} />
        <Route path="/celeb" element={<Celeb />} />
        <Route path="/video/:categoryId/:videoId" element={<Video/>} />
        <Route path="/videos" element={<VidCard />} />
        <Route path="/vid" element={<Videos />} />

    </Routes>
  );
}

export default App;
