
// ============  Main page ====================//

import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

// Styled components
const Main = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 0;
  margin: 0;
  width: 100%;
  border-radius: 0;
  background: linear-gradient(45deg, #212121, #2e3b4e, #5f3c8a);
  background-size: 400% 400%;
  animation: gradientShift 10s ease infinite;

  @keyframes gradientShift {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }
`;

const Heading = styled.h1`
  color: #f5f5f5;
  font-size: 2.5rem;
  margin: 0;
`;

const SubHeading = styled.h3`
  color: #b0b0b0;
  font-size: 1.2rem;
  margin-top: 10px;
`;

const Container = styled.div`
  padding: 20px 5%;
  width: 100%;
  background: #121212; /* Darker background */
`;

const HeaderRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 15px;
`;

const SectionTitle = styled.h2`
  font-size: 1.8rem;
  font-weight: bold;
  color: #f5f5f5;
  margin: 0;
`;

const ViewAllLink = styled(Link)`
  font-size: 1rem;
  font-weight: bold;
  color: #1e90ff;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
    color: #63b3ff;
  }
`;

const VideoRow = styled.div`
  display: flex;
  overflow-x: auto;
  gap: 35px;
  padding-bottom: 10px;
  width: 100%;
  scrollbar-width: thin;
  scrollbar-color: #1e90ff transparent;

  &::-webkit-scrollbar {
    height: 8px;
  }

  &::-webkit-scrollbar-thumb {
    background: #1e90ff;
    border-radius: 10px;
  }

  &::-webkit-scrollbar-track {
    background: transparent;
  }
`;

const ScrollButton = styled.button`
  position: absolute;
  top: 50%; /* Centers the button vertically within the row */
  transform: translateY(-50%);
  background: rgba(30, 144, 255, 0.8);
  border: none;
  color: #fff;
  cursor: pointer;
  border-radius: 50%;
  padding: 10px;
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background 0.3s, transform 0.3s;

  &:hover {
    background: rgba(30, 144, 255, 1);
    transform: scale(1.1);
  }

  ${(props) =>
    props.direction === 'left'
      ? 'left: -30px;' 
      : 'right: -20px;'} 
`;

const VideoRowWrapper = styled.div`
  position: relative; /* Allows buttons to be positioned relative to the row */
  display: flex;
  align-items: center;
`;

const VideoCard = styled(Link)`
  flex: 0 0 400px; /* Increased width for better scaling */
  height: 350px;
  background: #1e1e1e;
  border-radius: 8px;
  overflow: hidden;
  text-decoration: none;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 6px 20px rgba(30, 144, 255, 0.5);
  }

  img {
    width: 100%;
    height: 250px;
    object-fit: cover;
  }

  h3 {
    font-size: 1rem;
    color: #f5f5f5;
    margin: 10px;
  }

  p {
    font-size: 0.9rem;
    color: #b0b0b0;
    margin: 0 10px 10px;
  }
`;

// Mock video data
const videos = [
  { id: 1, thumbnail: 'https://images.pexels.com/photos/356056/pexels-photo-356056.jpeg?auto=compress&cs=tinysrgb&w=600', title: 'Video 1', duration: '10 min',videoSrc: 'https://videos.pexels.com/video-files/2053100/2053100-sd_640_360_30fps.mp4' },
  { id: 2, thumbnail: 'https://images.pexels.com/photos/2047905/pexels-photo-2047905.jpeg?auto=compress&cs=tinysrgb&w=600', title: 'Video 2', duration: '15 min' },
  { id: 3, thumbnail: 'https://images.pexels.com/photos/919734/pexels-photo-919734.jpeg?auto=compress&cs=tinysrgb&w=600', title: 'Video 3', duration: '20 min' },
  { id: 4, thumbnail: 'https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=600', title: 'Video 4', duration: '25 min' },
];

const VidCard = ({ title }) => {
  const videoRowRef = useRef();

  const scroll = (direction) => {
    if (direction === 'left') {
      videoRowRef.current.scrollBy({ left: -300, behavior: 'smooth' });
    } else {
      videoRowRef.current.scrollBy({ left: 300, behavior: 'smooth' });
    }
  };

  return (
    <Container>
      <HeaderRow>
        <SectionTitle>{title}</SectionTitle>
        <ViewAllLink to="/videos">View All</ViewAllLink>
      </HeaderRow>
      <VideoRowWrapper>
        <ScrollButton direction="left" onClick={() => scroll('left')}>
          &#9664;
        </ScrollButton>
        <VideoRow ref={videoRowRef}>
          {videos.map((video) => (
            <VideoCard to={`/video/${video.id}/4521`} key={video.id}>
              <img src={video.thumbnail} alt={video.title} />
              <h3>{video.title}</h3>
              <p>{video.duration}</p>
            </VideoCard>
          ))}
        </VideoRow>
        <ScrollButton direction="right" onClick={() => scroll('right')}>
          &#9654;
        </ScrollButton>
      </VideoRowWrapper>
    </Container>
  );
};

const VidCardPage = () => {
  const categories = [
    'Upcoming Videos',
    'Trending Now',
    'Recently Added',
    'Top Picks for You',
    'Live Stream Videos ',
    'Top Music Videos',
    'Live Shows',
    'Documentaries',
    'New Updates',
  ];

  return (
    <>
      <Main>
        <Heading>Unlimited Streaming Bliss</Heading>
        <SubHeading>Stream the World: Instant Access to What You Love</SubHeading>
      </Main>
      {categories.map((category, index) => (
        <VidCard title={category} key={index} />
      ))}
    </>
  );
};

export default VidCardPage;
