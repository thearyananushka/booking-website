
import React from 'react';
import styled from 'styled-components';



const Container = styled.div`
  font-family: 'Arial', sans-serif;
  max-width: 900px;
  padding: 25px;
  border: 1px solid #ddd;
  border-radius: 12px;
  background-color: #f9f9f9;
  box-shadow: 0 8px 18px rgba(0, 0, 0, 0.3);


  /* Adjust the position for mobile */
  // position: relative;
  // top: 0;
  // right: 0;
  // margin: 20px auto;
    position: absolute;
  top: 600px; 
  right: 30px;

  /* Responsive design */
  @media (max-width: 768px) {
    max-width: 100%;
    padding: 15px;
    box-shadow: none;
    border-radius: 0;
    position: relative;
  top: 0;
  right: 0;
  margin: 20px auto;
  }

  // position: relative;
  // top: 0;
  // right: 0;
  // margin: 20px auto;
//   position: absolute;
//   top: 600px; 
//   right: 30px;
`;




const Header = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-bottom: 20px;
`;

const Title = styled.h1`
  font-size: 2.2rem;
  font-weight: bold;
  color: #ff4081;
  margin: 0;

  @media (max-width: 768px) {
    font-size: 1.8rem;
  }
`;

const Subtitle = styled.div`
  color: #7f8c8d;
  font-size: 16px;

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

const EventDetails = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 16px;
  margin: 15px 0;

  span {
    font-weight: bold;
    color: #e74c3c;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    font-size: 14px;
  }

  span {
    font-weight: bold;
    color: #e74c3c;
  }
`;

const InterestedButton = styled.button`
  background: #ff4081;
  color: white;
  border: none;
  border-radius: 25px;
  padding: 8px 25px;
  font-size: 15px;
  cursor: pointer;
  transition: all 0.3s ease-in-out;

  &:hover {
    background: #c0392b;
    transform: scale(1.05);
  }

  @media (max-width: 768px) {
    width: 100%;
    padding: 12px;
    font-size: 16px;
  }
`;

const Note = styled.div`
  background: #ffefc3;
  padding: 15px;
  margin: 25px 0;
  border-left: 5px solid #e67e22;

  h3 {
    margin: 0 0 12px 0;
    font-size: 18px;
    font-weight: bold;
    color: #34495e;
  }

  p {
    font-size: 15px;
    color: #555;
    margin: 8px 0;
  }
`;

const AboutSection = styled.div`
  margin: 25px 0;

  h3 {
    font-size: 18px;
    font-weight: bold;
    margin-bottom: 12px;
    color: #2c3e50;
  }

  p {
    font-size: 15px;
    color: #7f8c8d;
    margin: 0;
  }
`;

const Gallery = styled.div`
  margin: 25px 0;

  h3 {
    font-size: 18px;
    font-weight: bold;
    margin-bottom: 12px;
    color: #2c3e50;
  }

  div {
    display: flex;
    gap: 15px;
  }

  img {
    width: 160px;
    height: 110px;
    border-radius: 10px;
    object-fit: cover;
    cursor: pointer;
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.1);

    &:hover {
      transform: scale(1.08);
      transition: transform 0.3s;
    }
    @media (max-width: 768px) {
        width: 45%;
        height: 100px;
      }
  }
`;

const FAQ = styled.details`
  margin-top: 25px;

  summary {
    font-size: 16px;
    font-weight: bold;
    cursor: pointer;
    color: #ff4081;

    &:hover {
      text-decoration: underline;
    }
  }

  div {
    margin-top: 12px;
    font-size: 15px;
    color: #7f8c8d;
  }
`;

const VideoSliderContainer = styled.div`
  width: 100%;
  overflow: hidden;
  background: linear-gradient(135deg, #fdfbfb 0%, #ebedee 100%);
  position: relative;
  padding: 30px 0;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    padding: 15px 0;
  }
`;

const VideoRowWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
`;

const VideoRow = styled.div`
  display: flex;
  overflow-x: auto;
  scroll-behavior: smooth;
  gap: 12px;
  padding: 15px 25px;

  -ms-overflow-style: none; /* IE */
  scrollbar-width: none; /* Firefox */
  
  &::-webkit-scrollbar {
    display: none; /* Safari and Chrome */
  }
`;

const VideoCard = styled.div`
  flex: 0 0 900px;
  height: 400px;
  position: relative;
  overflow: hidden;
  border-radius: 16px;
  background: #000;
  box-shadow: 0 8px 15px rgba(0, 0, 0, 0.6);
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.9);
  }

  @media (max-width: 768px) {
    flex: 0 0 100%;
    height: 200px;
  }

  iframe {
    width: 100%;
    height: 100%;
    border: none;
    border-radius: 16px;
  }

//   iframe {
//     width: 100%;
//     height: 100%;
//     border: none;
//     border-radius: 16px;
//   }
`;

const ScrollButton = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: #ff4081;;
  border: none;
  color: white;
  cursor: pointer;
  border-radius: 50%;
  padding: 15px;
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;

  &:hover {
    background: background: #ff4081;;
    transform: scale(1.1);
  }

  ${(props) =>
    props.direction === 'left'
      ? 'left: 20px;'
      : 'right: 20px;'}
`;
const eventsData = [
    {
      id: 1,
      title: 'Mumbai Comedy Festival',
      date: '2024-12-01',
      category: 'Comedy Shows',
      language: 'English',
      moreFilters: ['Outdoor Events', 'Kids Allowed'],
      price: 500,
      image: 'https://plus.unsplash.com/premium_photo-1682125157065-cbc4eb0fe0bb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bW92aWUlMjBwb3N0ZXJ8ZW58MHx8MHx8fDA%3D',
    },
]


// Styled component for LocationCard
const Card = styled.div`
  background-color: #fff;
  margin:20px;
  margin-top:40px;
  border:1px solid #999;
  border-radius: 15px;
  padding: 20px;
  box-shadow: 0 8px 18px rgba(0, 0, 0, 0.3);
  max-width: 380px;
`;

const CardTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 15px;
  color: #ff4081;
`;

const CardContent = styled.div`
  color: #555;
  font-size: 14px;
`;

const MapContainer = styled.div`
  margin-top: 20px;
  border-radius: 8px;
  overflow: hidden;

  @media (max-width: 768px) {
    width: 100%;
    padding: 12px;
    font-size: 16px;
//   @media (max-width: 768px) {
//     flex: 0 0 100%;
//     height: 200px;
`;

const LocationCard = () => (
  <Card>
    <CardTitle>Mumbai</CardTitle>
    <CardContent>
      <p>Grand Theatre, Nita Mukesh Ambani Cultural Centre</p>
      <p>
        Jio World Centre, G Block, Bandra Kurla Complex, Bandra East, Mumbai,
        Maharashtra 400051, India
      </p>
      <MapContainer>
        <iframe
          title="Mumbai Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3770.802553320391!2d72.86453291536864!3d19.066495487096356!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c630adad553f%3A0x2b98b6fbd631d83d!2sNita%20Mukesh%20Ambani%20Cultural%20Centre!5e0!3m2!1sen!2sin!4v1601891885946!5m2!1sen!2sin"
          width="100%"
          height="200"
          frameBorder="0"
          style={{ border: 0 }}
          allowFullScreen
          aria-hidden="false"
          tabIndex="0"
        ></iframe>
      </MapContainer>
    </CardContent>
  </Card>
);



// Video Slider Component
const VideoSlider = () => {
  const videoRowRef = React.useRef();

  const scroll = (direction) => {
    if (direction === 'left') {
      videoRowRef.current.scrollBy({ left: -300, behavior: 'smooth' });
    } else {
      videoRowRef.current.scrollBy({ left: 300, behavior: 'smooth' });
    }
  };

  const videos = [
    'https://www.youtube.com/embed/dQw4w9WgXcQ',
    'https://www.youtube.com/embed/3JZ_D3ELwOQ',
    'https://www.youtube.com/embed/tgbNymZ7vqY',
    'https://www.youtube.com/embed/2Vv-BfVoq4g',
    'https://www.youtube.com/embed/L_jWHffIx5E',
  ];

  return (
    <VideoSliderContainer>
      <ScrollButton direction="left" onClick={() => scroll('left')}>
        &#9664;
      </ScrollButton>
      <VideoRowWrapper>
        <VideoRow ref={videoRowRef}>
          {videos.map((video, index) => (
            <VideoCard key={index}>
              <iframe
                src={video}
                title={`Video ${index}`}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </VideoCard>
          ))}
        </VideoRow>
      </VideoRowWrapper>
      <ScrollButton direction="right" onClick={() => scroll('right')}>
        &#9654;
      </ScrollButton>
    </VideoSliderContainer>
  );
};

// Main Event Page Component
const EventPage = () => {
  return (
    <>
      <VideoSlider />
      <LocationCard />
      <Container>
        <Header>
          <Title>Mumbai Comedy Festival Opening Gala</Title>
          <Subtitle>Comedy | English, Hindi | 18yrs + | 2hrs</Subtitle>
          <EventDetails>
            <div>
              <span>Sun 01 Dec 2024</span> at Grand Theatre, Nita Mukesh Ambani Cultural Centre
            </div>
            <div>₹ 1,200 onwards</div>
          </EventDetails>
        </Header>
        <InterestedButton>Interested?</InterestedButton>
        <Note>
          <h3>NOTE</h3>
          <p><strong>SHOW FLOW</strong></p>
          <p>FIRST HALF (~46 mins)</p>
          <p>Host (duration ~10 mins)</p>
          <p>Feature Act 1 (duration ~8 mins)</p>
          <p>Feature Act 2 (duration ~8 mins)</p>
          <p>Headliner 1 (duration ~20 mins)</p>
          <p>BREAK (~20 mins)</p>
          <p>SECOND HALF (~46 mins)</p>
          <p>Host (duration ~10 mins)</p>
          <p>Feature Act 3 (duration ~8 mins)</p>
          <p>Feature Act 4 (duration ~8 mins)</p>
          <p>Headliner 2 (duration ~20 mins)</p>
        </Note>
        <AboutSection>
          <h3>About</h3>
          <p>
            Hi! We’re the team behind the Mumbai Comedy Festival. For years we’ve been traveling to comedy festivals across the world and have had the privilege to see some of the finest comedy acts in action.
          </p>
          <p>
            This December, we’re super thrilled to bring to you the second edition of Mumbai’s very own Comedy Festival! Spread over 3 days, the festival will host 50+ comedians from across the world, performing in 20+ shows at venues across Mumbai!
          </p>
        </AboutSection>
        <Gallery>
          <h3>Gallery</h3>
          <div>
            <img src="https://picsum.photos/200/300" alt="Gallery 1" />
            <img src="https://picsum.photos/201/300" alt="Gallery 2" />
            <img src="https://picsum.photos/202/300" alt="Gallery 3" />
          </div>
        </Gallery>
        <FAQ>
          <summary>FAQs</summary>
          <div>
            If you are unable to select seats, it is because all available tickets for that category have been sold out. Try booking tickets in a different category.
          </div>
        </FAQ>
        
       
      </Container>
    </>
  );
};

export default EventPage;

