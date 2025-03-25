import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

// Styled components for the slider
const SliderWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 300px;
  background:  #4e0482;
//   background: #00C6FF;
  overflow: hidden;
`;

const Slide = styled.div`
  display: ${({ active }) => (active ? 'block' : 'none')};
  width: 100%;
  height: 100%;
  position: relative;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.4); /* Dark overlay */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const SliderText = styled.h1`
  color: white;
  font-size: 3rem;
  text-align: center;
`;

const SubText = styled.p`
  color: #ffcc00;
  font-size: 1.5rem;
  margin-bottom: 20px;
`;

const BookButton = styled(Link)`
  background-color:  #e03d1c;
  color: white;
  padding: 10px 20px;
  text-decoration: none;
  font-size: 1.5rem;
  border-radius: 25px;

  &:hover {
    background-color: #00C6FF;
  }
`;

// Slider component
const AutoSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      src: 'https://example.com/singer1.jpg',
      title: 'Discover Talented Singers',
      subTitle: 'Book Your Favorite Artist Today',
    },
    {
      src: 'https://example.com/singer2.jpg',
      title: 'Top Performers Around the Globe',
      subTitle: 'Reserve a Slot Now',
    },
    {
      src: 'https://example.com/singer3.jpg',
      title: 'Unforgettable Performances',
      subTitle: 'Bring Music to Your Events',
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 3000); // Auto-slide every 3 seconds

    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <SliderWrapper>
      {slides.map((slide, index) => (
        <Slide key={index} active={index === currentSlide}>
          {/* <Image src={slide.src} alt={`Slide ${index}`} /> */}
          <Overlay>
            <SliderText>{slide.title}</SliderText>
            <SubText>{slide.subTitle}</SubText>
            <BookButton to="/book-singer">Book Now</BookButton>
          </Overlay>
        </Slide>
      ))}
    </SliderWrapper>
  );
};

// Styled components for singer cards
const CardContainer = styled.div`
  display: flex;
  justify-content: space-around;
  padding: 20px;
  flex-wrap: wrap;
`;

const Card = styled.div`
  background-color: #fff;
  border-radius: 12px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
  width: 300px;
  margin: 20px;
  overflow: hidden;
  transition: all 0.3s ease;

  &:hover {
    box-shadow: 0 12px 24px rgba(0, 0, 0, 0.5);
  }
`;

const ImageWrapper = styled.div`
  width: 100%;
  height: 250px;
  overflow: hidden;
`;

const SingerImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;

  ${Card}:hover & {
    transform: scale(1.1); /* Zoom effect on hover */
  }
`;

const CardContent = styled.div`
  padding: 20px;
  text-align: left;
`;

const SingerName = styled.h3`
  font-size: 1.5rem;
  font-weight: 700;
  color: #333;
`;

const SingerInfo = styled.p`
  color: #555;
  font-size: 1rem;
  margin-top: 5px;
`;

const BookButtonStyled = styled(Link)`
  background-color: #00C6FF;
  color: white;
  padding: 10px 20px;
  font-size: 1.2rem;
  font-weight: bold;
  text-decoration: none;
  border-radius: 50px;
  transition: background-color 0.3s ease;
  float: right;
  margin-bottom: 20px;

  &:hover {
    background-color: #e03d1c;
  }
`;

// Singer card component
const CardItem = ({ singer }) => {
  return (
    <Card>
      <ImageWrapper>
        <SingerImage src={singer.image} alt={singer.name} />
      </ImageWrapper>
      <CardContent>
        <SingerName>{singer.name}</SingerName>
        <SingerInfo>🎤 {singer.genre} | {singer.rating}⭐</SingerInfo>
        <BookButtonStyled to="/celeb">Book Now</BookButtonStyled>
      </CardContent>
    </Card>
  );
};

// Singer list component
const SingerList = () => {

    const singers = [
        {
          name: 'Arijit Singh',
          genre: 'Bollywood',
          rating: 4.9,
          image: 'https://wallpapers.com/images/high/indian-singer-arijit-singh-singing-live-on-stage-t7d9kjxeojnxwuc5.webp', // Arijit Singh
        },
        {
          name: 'Neha Kakkar',
          genre: 'Pop',
          rating: 4.7,
          image: 'https://upload.wikimedia.org/wikipedia/commons/6/6f/Neha_Kakkar_in_January_2020.jpg', // Neha Kakkar
        },
        {
          name: 'Sonu Nigam',
          genre: 'Classical',
          rating: 4.8,
          image: 'https://assets-in.bmscdn.com/nmcms/events/banner/desktop/media-desktop-sonu-nigam-live-in-concert-hyderabad-0-2024-11-28-t-14-34-10.jpg', // Sonu Nigam
        },
        {
          name: 'Shreya Ghoshal',
          genre: 'Melody',
          rating: 4.9,
          image: 'https://upload.wikimedia.org/wikipedia/commons/b/bd/Shreya_Ghoshal_at_Filmfare_Awards_South.jpg', // Shreya Ghoshal
        },
        {
          name: 'Atif Aslam',
          genre: 'Pop',
          rating: 4.7,
          image: 'https://upload.wikimedia.org/wikipedia/commons/2/2d/Atif_Aslam_at_Badlapur_%28cropped%29.jpg', // Atif Aslam
        },
        {
          name: 'Armaan Malik',
          genre: 'Pop',
          rating: 4.6,
          image: 'https://upload.wikimedia.org/wikipedia/commons/1/15/Armaan_Malik_2016.jpg', // Armaan Malik
        },
        {
          name: 'Sunidhi Chauhan',
          genre: 'Bollywood',
          rating: 4.8,
          image: 'https://upload.wikimedia.org/wikipedia/commons/7/75/Sunidhi_Palke.jpg', // Sunidhi Chauhan
        },
        {
          name: 'KK (Krishnakumar Kunnath)',
          genre: 'Melody',
          rating: 4.9,
          image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bb/KK_%28124%29.jpg/800px-KK_%28124%29.jpg', // KK
        },
        {
          name: 'Badshah',
          genre: 'Rap',
          rating: 4.6,
          image: 'https://static.toiimg.com/thumb/msid-115712975,imgsize-18732,width-400,resizemode-4/115712975.jpg', // Badshah
        },
        {
          name: 'Honey Singh',
          genre: 'Rap',
          rating: 4.4,
          image: 'https://upload.wikimedia.org/wikipedia/commons/d/dd/Yo_Yo_Honey_Singh.png', // Honey Singh
        },
        {
          name: 'Jubin Nautiyal',
          genre: 'Melody',
          rating: 4.8,
          image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTA09o3siO3FXUmqUTmt683ecM5HE58fz5TEA&s', // Jubin Nautiyal
        },
        {
          name: 'Monali Thakur',
          genre: 'Bollywood',
          rating: 4.7,
          image: 'https://assets-in.bmscdn.com/nmcms/events/banner/desktop/media-desktop-monali-thakur-concert-0-2024-11-14-t-4-19-39.jpg', // Monali Thakur
        },
        // {
        //   name: 'Darshan Raval',
        //   genre: 'Pop',
        //   rating: 4.6,
        //   image: 'https://i.imgur.com/cEJjpCc.jpg', // Darshan Raval
        // },
        // {
        //   name: 'Mika Singh',
        //   genre: 'Pop',
        //   rating: 4.5,
        //   image: 'https://i.imgur.com/JfDjI7N.jpg', // Mika Singh
        // },
        // {
        //   name: 'Kanika Kapoor',
        //   genre: 'Bollywood',
        //   rating: 4.6,
        //   image: 'https://i.imgur.com/tj8yxfm.jpg', // Kanika Kapoor
        // },
        // {
        //   name: 'Palak Muchhal',
        //   genre: 'Melody',
        //   rating: 4.7,
        //   image: 'https://i.imgur.com/6TbCkGr.jpg', // Palak Muchhal
        // },
        // {
        //   name: 'Mohit Chauhan',
        //   genre: 'Bollywood',
        //   rating: 4.8,
        //   image: 'https://i.imgur.com/BRyPwmF.jpg', // Mohit Chauhan
        // },
        // {
        //   name: 'Alka Yagnik',
        //   genre: 'Classical',
        //   rating: 4.9,
        //   image: 'https://i.imgur.com/erUGpeF.jpg', // Alka Yagnik
        // },
        // {
        //   name: 'Kumar Sanu',
        //   genre: 'Melody',
        //   rating: 4.9,
        //   image: 'https://i.imgur.com/BmNKYKh.jpg', // Kumar Sanu
        // },
        // {
        //   name: 'Udit Narayan',
        //   genre: 'Bollywood',
        //   rating: 4.8,
        //   image: 'https://i.imgur.com/2Gc2cOY.jpg', // Udit Narayan
        // },
        // {
        //   name: 'Shaan',
        //   genre: 'Pop',
        //   rating: 4.6,
        //   image: 'https://i.imgur.com/NxlgVKe.jpg', // Shaan
        // },
        // {
        //   name: 'Asha Bhosle',
        //   genre: 'Classical',
        //   rating: 4.9,
        //   image: 'https://i.imgur.com/z5EcsZr.jpg', // Asha Bhosle
        // },
    ];
    

  return (
    <CardContainer>
      {singers.map((singer, index) => (
        <CardItem key={index} singer={singer} />
      ))}
    </CardContainer>
  );
};

// Main SingerListPage component
const SingerListPage = () => {
  return (
    <div>
      <AutoSlider />
      <SingerList />
    </div>
  );
};

export default SingerListPage;

