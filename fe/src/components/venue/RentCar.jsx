

import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

// Styled components

const Container = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column; /* Column direction to accommodate heading */
  align-items: center;
  background: #fff;
`;

const Heading = styled.h1`
  font-size: 2.5rem;
  color: #00C6FF;
  margin-bottom: 40px;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const CardWrapper = styled.div`
  display: flex;
  gap: 50px;
  justify-content: center;
  flex-wrap: wrap; /* Allows cards to wrap on smaller screens */
  width: 100%;
`;

const Card = styled(Link)`
  width: 400px;
  height: 330px;
  background: #fff;
  border-radius: 8px;
  text-decoration: none;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(30, 144, 255, 0.5);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    width: 100%;
    height: 230px;
    object-fit: cover;
  }

  .content {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 10px;
  }

  h3 {
    font-size: 1.5rem;
    color: #000;
    margin: 0;
  }

  button {
    background: #ff4081;
    color: white;
    border: none;
    border-radius: 50px;
    padding: 10px 20px;
    cursor: pointer;
    transition: background 0.3s ease;
    margin-top: 10px;

    &:hover {
      background: #f50c33;
    }
  }

  @media (max-width: 768px) {
    width: 100%;
    height: auto;
    margin-bottom: 20px;

    h3 {
      font-size: 1.2rem;
    }

    button {
      font-size: 1rem;
      padding: 8px 15px;
    }
  }
`;

const HomePage = () => {
  return (
    <Container>
      {/* Heading */}
      <Heading>Explore Our Offers</Heading>
      
      {/* Cards Section */}
      <CardWrapper>
        {/* Luxury Car Card */}
        <Card to="/rental-cars">
          <img src="https://media.istockphoto.com/id/537384323/photo/red-sport-car.webp?a=1&b=1&s=612x612&w=0&k=20&c=cbu3mvuFedtFosj5rjfDB2C9OzTJgOJH8W8o9uuaC8s=" alt="Rental Car" />
          <div className="content">
            <h3>Rent Luxury Car</h3>
            <button>Explore All</button>
          </div>
        </Card>

        {/* Disneyland Card */}
        <Card to="/disneyland">
          <img src="https://images.unsplash.com/photo-1641478853132-b8a0ba2d73a7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8RGlzbmV5bGFuZHxlbnwwfHwwfHx8MA%3D%3D" alt="Disneyland" />
          <div className="content">
            <h3>Explore Disneyland Magic</h3>
            <button>Explore All</button>
          </div>
        </Card>

        {/* Add more cards as necessary */}
      </CardWrapper>
    </Container>
  );
};

export default HomePage;

