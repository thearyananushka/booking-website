

// import React from 'react';
// import styled from 'styled-components';
// import { Link } from "react-router-dom";

// const Card = styled.div`
//   border: 1px solid #ddd;
//   background: #fff;
//   border-radius: 10px;
//   overflow: hidden;
//   box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
//   min-height: 400px;
//   max-height: 550px;
//   display: flex;
//   flex-direction: column;
//   justify-content: space-between;

//   @media (max-width: 768px) {
//     min-height: 350px;
//   }
// `;

// const Image = styled.img`
//   width: 100%;
//   height: 250px;
//   object-fit: cover;

//   @media (max-width: 768px) {
//     height: 200px;
//   }
// `;

// const Info = styled.div`
//   padding: 15px;
//   display: flex;
//   flex-direction: column;
//   flex-grow: 1;
// `;

// const Title = styled.h3`
//   font-size: 18px;
//   margin: 0 0 10px;
//   color: #333;

//   @media (max-width: 768px) {
//     font-size: 16px;
//   }
// `;

// const Date = styled.p`
//   font-size: 14px;
//   color: #666;
//   margin: 5px 0;

//   @media (max-width: 768px) {
//     font-size: 12px;
//   }
// `;

// const Detail = styled.p`
//   font-size: 14px;
//   color: #444;
//   margin: 5px 0;

//   @media (max-width: 768px) {
//     font-size: 12px;
//   }
// `;

// const Filters = styled.div`
//   font-size: 14px;
//   color: #888;
//   margin: 5px 0;

//   @media (max-width: 768px) {
//     font-size: 12px;
//   }
// `;

// const Price = styled.p`
//   font-size: 16px;
//   font-weight: bold;
//   color: #333;
//   margin: 10px 0 0;

//   @media (max-width: 768px) {
//     font-size: 14px;
//   }
// `;

// const StyledButton = styled.button`
// background: linear-gradient(90deg, #ff7eb3, #ff758c);
// color: white;
// font-size: 1.2rem;
// font-weight: bold;
// padding: 12px 24px;
// border: none;
// border-radius: 50px;
// margin-bottom: 2px;
// cursor: pointer;
// position: relative;
// overflow: hidden;
// transition: transform 0.3s ease, box-shadow 0.3s ease, background 0.5s ease;

// &:hover {
//   background: linear-gradient(90deg, #ff758c, #ff7eb3);
//   transform: scale(1.05);
//   box-shadow: 0 8px 15px rgba(255, 117, 140, 0.3);
// }

// &:active {
//   transform: scale(0.95);
// }

// &:after {
//   content: '';
//   position: absolute;
//   top: 50%;
//   left: 50%;
//   width: 0;
//   height: 0;
//   background: rgba(255, 255, 255, 0.3);
//   border-radius: 50%;
//   transform: translate(-50%, -50%);
//   transition: width 0.4s ease, height 0.4s ease;
// }

// &:hover:after {
//   width: 300%;
//   height: 300%;
// }
// @media (max-width: 768px) {
//   font-size: 1rem;
//   padding: 10px 20px;
// }
// `;

// const EventCard = ({ event }) => {
//   const handleBooking = () => {
//     alert(`Booking for ${event.title} is initiated!`);
//     // Add booking logic here
//   };

//   return (
//     <Card>
      
//       <Link to={`/event/${event.id}`} >
//       <Image src={event.image} alt={event.title} />
//       <Info>
//         <Title>{event.title}</Title>
//         <Date>{event.date}</Date>
//         <Detail>{event.category}</Detail>
//         <Detail>{event.language}</Detail>
//         <Filters>{event.moreFilters.join(', ')}</Filters>
//         <Price>Price: ₹{event.price} Onwards</Price>
//       </Info>
//       </Link>
//       <StyledButton onClick={handleBooking}>Book Now</StyledButton>
//     </Card>
//   );
// };

// export default EventCard;








import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from "react-router-dom";
import { FaHeart } from "react-icons/fa";

const Card = styled.div`
  background: #121212;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.3);
  min-height: 420px;
  max-height: 570px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 16px rgba(255, 117, 140, 0.4);
  }

  @media (max-width: 768px) {
    min-height: 360px;
  }
`;

const Image = styled.img`
  width: 100%;
  height: 260px;
  object-fit: cover;
  filter: brightness(0.85) contrast(1.1);

  @media (max-width: 768px) {
    height: 210px;
  }
`;

const Info = styled.div`
  padding: 18px;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  color: #f5f5f5;
`;

const Title = styled.h3`
  font-size: 20px;
  margin: 0 0 12px;
  color: #ff5a75;

  @media (max-width: 768px) {
    font-size: 18px;
  }
`;

const Date = styled.p`
  font-size: 14px;
  color: #bbb;
  margin: 6px 0;

  @media (max-width: 768px) {
    font-size: 12px;
  }
`;

const Detail = styled.p`
  font-size: 15px;
  color: #ddd;
  margin: 6px 0;

  @media (max-width: 768px) {
    font-size: 13px;
  }
`;

const Filters = styled.div`
  font-size: 14px;
  color: #999;
  margin: 6px 0;

  @media (max-width: 768px) {
    font-size: 12px;
  }
`;

const Price = styled.p`
  font-size: 18px;
  font-weight: bold;
  color: #ff5a75;
  margin: 12px 0 0;

  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 18px;
`;

const StyledButton = styled.button`
  background: linear-gradient(90deg, #ff3d67, #ff758c);
  color: white;
  font-size: 1.2rem;
  font-weight: bold;
  padding: 14px 26px;
  border: none;
  border-radius: 30px;
  cursor: pointer;
  transition: transform 0.3s ease, box-shadow 0.3s ease, background 0.5s ease;

  &:hover {
    background: linear-gradient(90deg, #ff758c, #ff3d67);
    transform: scale(1.07);
    box-shadow: 0 10px 20px rgba(255, 117, 140, 0.4);
  }

  &:active {
    transform: scale(0.95);
  }

  @media (max-width: 768px) {
    font-size: 1rem;
    padding: 12px 22px;
  }
`;

const HeartIcon = styled(FaHeart)`
  font-size: 24px;
  cursor: pointer;
  transition: color 0.3s ease;
  color: ${props => (props.liked ? '#ff3d67' : '#999')};

  &:hover {
    color: #ff3d67;
  }
`;

const EventCard = ({ event }) => {
  const [liked, setLiked] = useState(false);

  const handleBooking = () => {
    alert(`Booking for ${event.title} is initiated!`);
  };

  return (
    <Card>
      <Link to={`/event/${event.id}`}>
        <Image src={event.image} alt={event.title} />
        <Info>
          <Title>{event.title}</Title>
          <Date>{event.date}</Date>
          <Detail>{event.category}</Detail>
          <Detail>{event.language}</Detail>
          <Filters>{event.moreFilters?.join(', ') || 'No Filters'}</Filters>
          <Price>Price: ₹{event.price} Onwards</Price>
        </Info>
      </Link>
      <ButtonContainer>
        <StyledButton onClick={handleBooking}>Book Now</StyledButton>
        <HeartIcon liked={liked} onClick={() => setLiked(!liked)} />
      </ButtonContainer>
    </Card>
  );
};

export default EventCard;
