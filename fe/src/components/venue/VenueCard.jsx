
import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";


const Card = styled.div`
  width: 350px;
  border: 1px solid #ddd;
  border-radius: 10px;
  overflow: hidden;
  margin: 15px;
  margin-left: 3%;
  box-shadow: 10px 14px 16px 10px rgba(0, 0, 0, 0.1);
  position: relative;
  background: #fff;
  

  &:hover {
    // transform: scale(1.01);
    box-shadow: 10px 14px 16px 10px rgba(0, 0, 0, 0.3);
  }
`;

const ImageContainer = styled.div`
  position: relative;
`;

const Badge = styled.div`
  position: absolute;
  top: 10px;
  left: 10px;
  background-color: #ff4081;
  color: #fff;
  padding: 5px 10px;
  font-size: 0.8rem;
  font-weight: bold;
  border-radius: 5px;
`;

const Image = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;

const Details = styled.div`
  padding: 15px;
`;

const Title = styled.h3`
  font-size: 1.2rem;
  margin: 0;
`;

const Rating = styled.div`
  display: flex;
  align-items: center;
  margin-top: 5px;
  font-size: 0.9rem;
  color: #666;

  span {
    margin-left: 5px;
    color: #f39c12;
  }
`;

const Info = styled.div`
  margin: 10px 0;
  font-size: 0.9rem;
  color: #555;
`;

const Price = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 0.9rem;

  div {
    margin-top: 5px;
  }

  span {
    font-weight: bold;
  }
`;

const Features = styled.div`
  font-size: 0.8rem;
  color: #777;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 10px;

`;

const StyledButton = styled.button`
  padding: 10px 20px;
  margin: 10px;
  background-color: #ff4081;
  color: white;
  border: none;
  border-radius: 50px;
  cursor: pointer;
  font-size: 1rem;
  overflow: hidden;
transition: transform 0.3s ease, box-shadow 0.3s ease, background 0.5s ease;

&:hover {
  background: linear-gradient(90deg, #ff758c, #ff7eb3);
  transform: scale(1.01);
  box-shadow: 0 8px 15px rgba(255, 117, 140, 0.3);
}

&:active {
    transform: scale(0.95);
  }
  
  &:after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 0;
    height: 0;
    background: rgba(255, 255, 255, 0.3);
    border-radius: 50%;
    transform: translate(-50%, -50%);
    transition: width 0.4s ease, height 0.4s ease;
  }
  
  &:hover:after {
    width: 300%;
    height: 300%;
  }
  @media (max-width: 768px) {
    font-size: 1rem;
    padding: 10px 20px;
  }
`;

const VenueCard = ({ venue }) => {
  const handleBooking = () => {
    // Handle booking functionality
    console.log(`Booking for ${venue.name}`);
  };

  const handleMessage = () => {
    // Handle send message functionality
    console.log(`Message for ${venue.name}`);
  };

  return (
    <Card>
        <Link to={`/venue/${venue.id}`}>
      <ImageContainer>
        <Image src={venue.image} alt={venue.name} />
        <Badge>{venue.badge}</Badge>
      </ImageContainer>
      <Details>
        <Title>{venue.name}</Title>
        <Rating>
          <span>{venue.rating} ★</span>
          <span>({venue.reviews} reviews)</span>
        </Rating>
        <Info>
          {venue.location} • {venue.type}
        </Info>
        <Price>
          <div>Veg: <span>{venue.vegPrice} per plate</span></div>
          <div>Non-Veg: <span>{venue.nonVegPrice} per plate</span></div>
        </Price>
        <Info>{venue.capacity} • {venue.rooms}</Info>
        <Features>{venue.features.join(" • ")}</Features>
      </Details>
      </Link>
      <ButtonContainer>
        <StyledButton onClick={handleBooking}>Book Now</StyledButton>
        <StyledButton onClick={handleMessage}>Send Message</StyledButton>
      </ButtonContainer>
    </Card>
  );
};

export default VenueCard;
