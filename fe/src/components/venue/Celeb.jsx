import React from "react";
import styled from "styled-components";
import { FaCalendarAlt, FaMapMarkerAlt } from "react-icons/fa";

// Styled Components
const Container = styled.div`
  font-family: Arial, sans-serif;
  margin: 0;
  padding: 0;
  color: #333;
`;

const Header = styled.div`
  position: relative;
  text-align: center;
  color: white;
`;

const BannerImage = styled.img`
  width: 100%;
  height: 550px;
`;

const Title = styled.h1`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 3rem;
`;



const BookButton = styled.button`
  position: absolute;
  bottom: 20px;
  right: 20px;
  background-color: #e91e63;
  color: white;
  font-size: 16px;
  font-weight: bold;
  border: 2px solid white ;
  padding: 12px 24px;
  border-radius: 50px;
  box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.3);
  transition: all 0.3s ease;
  cursor: pointer;
  outline: none;
  text-transform: uppercase;
  letter-spacing: 1px;

  &:hover {
    background-color: #c2185b;
    box-shadow: 0px 12px 20px rgba(0, 0, 0, 0.4);
    transform: translateY(-3px);
  }

  &:active {
    background-color: #ad1457;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.4);
    transform: translateY(2px);
  }
`;

const DetailsSection = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px;
  background-color: #FFF5EE;
//   background-color: #f8f9fa;
`;

const Detail = styled.div`
  display: flex;
  align-items: center;

  svg {
    margin-right: 8px;
    color: #ff5722;
  }
`;

const Price = styled.span`
  color: #e91e63;
  font-weight: bold;
`;

const AboutSection = styled.div`
  padding: 30px;
  background: white;
  text-align: center;
`;

const InterestSection = styled.div`
  text-align: center;
  margin: 20px 0;
`;

const InterestButton = styled.button`
  background-color: #e91e63;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #c2185b;
  }
`;

const SingerSection = styled.div`
  display: flex;
  align-items: center;
  padding: 20px;
  background-color: #f1f1f1;
`;

const SingerImage = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  margin-right: 15px;
`;

const VenueSection = styled.div`
  padding: 20px;
  iframe {
    width: 100%;
    height: 300px;
    border: none;
  }
`;

// Main Component
const EventPage = () => {
  return (
    <Container>
      {/* Header Section */}
      <Header>
        <BannerImage
          src="https://www.media4growth.com/wp-content/uploads/2024/08/1706605395.jpg"
          alt="Sonu Nigam Live"
        />
        <Title>Sonu Nigam Live</Title>
        <BookButton>Book Now</BookButton>
      </Header>

      {/* Details Section */}
      <DetailsSection>
        <Detail>
          <FaCalendarAlt />
          <span>Sat 25 Jan 2025 at 7:30 PM</span>
        </Detail>
        <Detail>
          <FaMapMarkerAlt />
          <span>Dublin Square, Phoenix Marketcity: Mumbai</span>
        </Detail>
        <Price>₹ 2,999 onwards</Price>
      </DetailsSection>

      {/* Interest Section */}
      <InterestSection>
        <p>1227 people have shown interest recently.</p>
        <InterestButton>Interested?</InterestButton>
      </InterestSection>

      {/* Singer Info */}
      <SingerSection>
        <SingerImage
          src="https://stat5.bollywoodhungama.in/wp-content/uploads/2023/04/Sonu-Nigam-performs-at-a-concert-in-Wembley-620.jpg"
          alt="Sonu Nigam"
        />
        <h3>Sonu Nigam</h3>
      </SingerSection>

      {/* About Section */}
      <AboutSection>
        
        <p>
          
<br />
          <b>Sonu Nigam is one of the most versatile and celebrated playback singers in the Indian music industry. Known for his soulful voice, extraordinary range, and ability to sing across genres, he has captivated millions of fans worldwide.His Live is an electrifying concert featuring the legendary
          Indian playback singer Sonu Nigam. Known for his soulful voice and
          versatility, he performs a mix of Bollywood hits and romantic songs.</b>
        </p>
        <br />
        <h2>Live Performances🎤✨</h2>
        <br />
        <p>Sonu Nigam's live concerts are known for their electrifying energy, audience interaction, and his ability to recreate magic with his voice. His stage presence and charisma make him a favorite among fans of all ages.
Sonu Nigam is regarded as one of the greatest singers of all time, often referred to as the "Modern Rafi" because of his similarities to the legendary Mohammad Rafi. His timeless songs and extraordinary voice continue to influence music lovers across the globe.</p>
      </AboutSection>

    </Container>
  );
};

export default EventPage;
