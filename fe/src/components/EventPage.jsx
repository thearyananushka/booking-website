import React, { useState } from "react";
import styled from "styled-components";
import { FaCalendarAlt, FaMapMarkerAlt, FaSearch } from "react-icons/fa";

const eventsData = [
  { id: 1, title: "Music Concert", date: "March 20, 2025", location: "Mumbai", img: "concert.jpg" },
  { id: 2, title: "Tech Conference", date: "April 10, 2025", location: "Bangalore", img: "tech.jpg" },
  { id: 3, title: "Food Festival", date: "May 5, 2025", location: "Delhi", img: "food.jpg" },
  { id: 4, title: "Art Exhibition", date: "June 12, 2025", location: "Pune", img: "art.jpg" },
];

const EventPage = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredEvents = eventsData.filter((event) =>
    event.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Container>
      {/* Hero Section */}
      <Hero>
        <h1>A2 Events - Discover Amazing Experiences</h1>
        <SearchBox>
          <FaSearch className="icon" />
          <input
            type="text"
            placeholder="Search for events..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </SearchBox>
      </Hero>

      {/* Event Cards */}
      <EventGrid>
        {filteredEvents.map((event) => (
          <EventCard key={event.id}>
            <img src={event.img} alt={event.title} />
            <EventInfo>
              <h3>{event.title}</h3>
              <p><FaCalendarAlt /> {event.date}</p>
              <p><FaMapMarkerAlt /> {event.location}</p>
              <button>Get Tickets</button>
            </EventInfo>
          </EventCard>
        ))}
      </EventGrid>
    </Container>
  );
};

export default EventPage;

/* Styled Components */
const Container = styled.div`
  background: #0a0a0a;
  color: white;
  padding: 2rem;
  text-align: center;
`;

const Hero = styled.div`
  background: url("hero-bg.jpg") center/cover;
  padding: 4rem 0;
  text-align: center;
  font-size: 2rem;
  font-weight: bold;
`;

const SearchBox = styled.div`
  margin-top: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(255, 255, 255, 0.1);
  padding: 0.5rem;
  border-radius: 8px;
  input {
    background: transparent;
    border: none;
    outline: none;
    color: white;
    padding: 0.5rem;
    width: 250px;
  }
  .icon {
    color: white;
    margin-right: 8px;
  }
`;

const EventGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
  margin-top: 2rem;
`;

const EventCard = styled.div`
  background: #1e1e1e;
  border-radius: 10px;
  overflow: hidden;
  text-align: left;
  transition: transform 0.3s ease-in-out;
  &:hover {
    transform: scale(1.05);
  }
  img {
    width: 100%;
    height: 200px;
    object-fit: cover;
  }
`;

const EventInfo = styled.div`
  padding: 1rem;
  h3 {
    margin-bottom: 0.5rem;
    color: #1e88e5;
  }
  p {
    display: flex;
    align-items: center;
    gap: 5px;
    color: gray;
  }
  button {
    background: #1e88e5;
    color: white;
    border: none;
    padding: 0.5rem 1rem;
    margin-top: 1rem;
    border-radius: 5px;
    cursor: pointer;
    transition: background 0.3s;
    &:hover {
      background: #1565c0;
    }
  }
`;
