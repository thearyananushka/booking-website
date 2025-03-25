

import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';


// Animated Party Background
const Feed = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 20px;
  padding: 20px 30px;
  background: #121212;
  background-size: 400% 400%;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
`;

const Card = styled(Link)`
  flex: 0 0 400px; 
  height: 350px;
  margin: 25px;
  background: #1e1e1e;
  border-radius: 28px;
  overflow: hidden;
  text-decoration: none;
  // box-shadow: 0 6px 12px 6px rgb(60, 60, 60);
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

  h2 {
    font-size: 1.5rem;
    color: #f1f1f1;
    margin: 10px;
    line-height: 1.4;
  }

  p {
    font-size: 0.9rem;
    color: #b0b0b0;
    margin: 0 10px 10px;
  }
`;

const MoreVideosContainer = styled.div`
  width: 100%;
  text-align: center;
  // margin-top: 30px;
  background: #121212;

`;

const MoreVideosButton = styled.button`
background: linear-gradient(90deg, #ff7eb3, #ff758c);
color: white;
font-size: 1.2rem;
font-weight: bold;
padding: 12px 24px;
border: none;
border-radius: 50px;
cursor: pointer;
position: relative;
overflow: hidden;
transition: transform 0.3s ease, box-shadow 0.3s ease, background 0.5s ease;

&:hover {
  background: linear-gradient(90deg, #ff758c, #ff7eb3);
  transform: scale(1.05);
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
const Heading = styled.h1`
  font-size: 2.5rem;
  font-weight: bold;
  color: #f39c12;
  text-decoration: underline;
  text-align: center;
  margin-bottom: 20px;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.4);
  
`;


const Main = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 30px;
  margin-top: 5px;
  border-radius: 15px;
  // background: #121212;
  background: linear-gradient(45deg, #212121, #2e3b4e, #5f3c8a);
  background-size: 400% 400%;
  animation: gradientShift 10s ease infinite;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);

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

const videos = [
  {
    id: 1,
    thumbnail: 'https://images.unsplash.com/photo-1719937206255-cc337bccfc7d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxfHx8ZW58MHx8fHx8',
    title: 'Web Development Lecture 1',
    duration: '2 hr',
    videoSrc: 'https://videos.pexels.com/video-files/2053100/2053100-sd_640_360_30fps.mp4',
  },
  {
    id: 2,
    thumbnail: 'https://images.unsplash.com/photo-1521302200778-33500795e128?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8dmlkZW8lMjB0aHVtYm5haWxzfGVufDB8fDB8fHww',
    title: 'Web Development Lecture 2',
    duration: '2 hr',
    videoSrc: 'https://videos.pexels.com/video-files/3018669/3018669-sd_640_360_24fps.mp4',
  },
  {
    id: 3,
    thumbnail: 'https://images.unsplash.com/photo-1665686304129-a6e2d16923e8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8d29ya2luZyUyMGZyb20lMjBob21lfGVufDB8fDB8fHww',
    title: 'Web Development Lecture 3',
    duration: '2 hr',
    videoSrc: 'https://videos.pexels.com/video-files/3018669/3018669-sd_640_360_24fps.mp4',
  },
  { id: 4,
     thumbnail: 'https://images.unsplash.com/photo-1489110804417-276c3f517515?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHdvcmtpbmclMjBmcm9tJTIwaG9tZXxlbnwwfHwwfHx8MA%3D%3D',
      title: 'Web Development Lecture 4',
      duration: '2 hr',
      videoSrc: 'https://videos.pexels.com/video-files/855623/855623-sd_540_360_24fps.mp4' },

  { id: 5,
     thumbnail: 'https://images.unsplash.com/photo-1554412661-828c8d34bb9c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHdvcmtpbmclMjBmcm9tJTIwaG9tZXxlbnwwfHwwfHx8MA%3D%3D',
      title: 'Web Development Lecture 5',
      duration: '2 hr',
       videoSrc: 'https://videos.pexels.com/video-files/2935032/2935032-sd_640_360_30fps.mp4' },

  { id: 6,
     thumbnail: 'https://images.unsplash.com/photo-1554412977-0809adc8a1b4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHdvcmtpbmclMjBmcm9tJTIwaG9tZXxlbnwwfHwwfHx8MA%3D%3D',
      title: 'Web Development Lecture 6',
       duration: '2 hr',
       videoSrc: 'https://videos.pexels.com/video-files/2536758/2536758-sd_640_360_24fps.mp4' },

  { id: 7,
     thumbnail: 'https://images.unsplash.com/photo-1586957067130-f3fe4fb76cf4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHdvcmtpbmclMjBmcm9tJTIwaG9tZXxlbnwwfHwwfHx8MA%3D%3D', 
     title: 'Web Development Lecture 7',
     duration: '2 hr', 
     videoSrc: 'https://videos.pexels.com/video-files/2915101/2915101-sd_640_360_25fps.mp4' },

  { id: 8,
     thumbnail: 'https://plus.unsplash.com/premium_photo-1679236716619-7d87bd1f6bb3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjV8fHdvcmtpbmclMjBmcm9tJTIwaG9tZXxlbnwwfHwwfHx8MA%3D%3D',
      title: 'Web Development Lecture 8', 
     duration: '2 hr',
      videoSrc: 'https://videos.pexels.com/video-files/2330708/2330708-sd_640_360_24fps.mp4' },

  { id: 9,
     thumbnail: 'https://plus.unsplash.com/premium_photo-1675008166566-064f6d2aff3d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzd8fHdvcmtpbmclMjBmcm9tJTIwaG9tZXxlbnwwfHwwfHx8MA%3D%3D', 
     title: 'Web Development Lecture 9',
      duration: '2 hr', 
      videoSrc: 'https://videos.pexels.com/video-files/3129977/3129977-sd_640_360_30fps.mp4' },
  { id: 10,
     thumbnail: 'https://images.unsplash.com/photo-1586957067130-f3fe4fb76cf4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHdvcmtpbmclMjBmcm9tJTIwaG9tZXxlbnwwfHwwfHx8MA%3D%3D', 
     title: 'Web Development Lecture 7',
     duration: '2 hr', 
     videoSrc: 'https://videos.pexels.com/video-files/2915101/2915101-sd_640_360_25fps.mp4' },

  { id: 11,
     thumbnail: 'https://plus.unsplash.com/premium_photo-1679236716619-7d87bd1f6bb3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjV8fHdvcmtpbmclMjBmcm9tJTIwaG9tZXxlbnwwfHwwfHx8MA%3D%3D',
      title: 'Web Development Lecture 8', 
     duration: '2 hr',
      videoSrc: 'https://videos.pexels.com/video-files/2330708/2330708-sd_640_360_24fps.mp4' },

  { id: 12,
     thumbnail: 'https://plus.unsplash.com/premium_photo-1675008166566-064f6d2aff3d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzd8fHdvcmtpbmclMjBmcm9tJTIwaG9tZXxlbnwwfHwwfHx8MA%3D%3D', 
     title: 'Web Development Lecture 9',
      duration: '2 hr', 
      videoSrc: 'https://videos.pexels.com/video-files/3129977/3129977-sd_640_360_30fps.mp4' },
];

const VidCard = () => {
  return (
    <>
    <Main>
      <Heading>Stream the World: Instant Access to What You Love</Heading>
      </Main>
      <Feed>
        {videos.map((video) => (
          <Card to={`/video/${video.id}/4521`} key={video.id}>
            <img src={video.thumbnail} alt={video.title} />
            <h2>{video.title}</h2>
            <p>{video.duration}</p>
          </Card>
        ))}
      </Feed>
      
      <MoreVideosContainer>
        <MoreVideosButton>Load More Videos</MoreVideosButton>
      </MoreVideosContainer>
      
    </>
  );
};

export default VidCard;