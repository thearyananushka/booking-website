import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

// Styled components for AutoSlider
const SliderWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 500px;
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
  background: rgba(0, 0, 0, 0.4);
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
  background-color: #ff6600;
  color: white;
  padding: 10px 20px;
  text-decoration: none;
  font-size: 1.5rem;
  border-radius: 25px;

  &:hover {
    background-color: #cc5200;
  }
`;

const AutoSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      src: 'https://campnewyork.org/wp-content/uploads/2024/05/disney-world-size-1024x585.jpg',
      title: 'Discover the Magic of Disneyland',
      subTitle: 'Book your dream vacation today!',
    },
    {
      src: 'https://cdn.tripster.com/travelguide/wp-content/uploads/2022/10/Holidays-Disneyland-Resort-Los-Angeles-California.jpg?auto=webp&optimize=medium',
      title: 'Experience the Magic at Night',
      subTitle: 'Stay for the Fireworks Spectacular',
    },
    {
      src: 'https://content.api.news/v3/images/bin/6b09fcf4250f964a5ef48b209059892c?width=1024',
      title: 'Meet Your Favorite Characters',
      subTitle: 'Create Memories with Mickey & Friends',
    },
    {
      src: 'https://cdn.tripster.com/travelguide/wp-content/uploads/2024/09/spaceship-earth-at-night-epcot-disney-world-orlando-florida-1256x707.jpg?auto=webp&optimize=medium',
      title: 'Exciting Attractions for All Ages',
      subTitle: 'Adventure Awaits Around Every Corner',
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <SliderWrapper>
      {slides.map((slide, index) => (
        <Slide key={index} active={index === currentSlide}>
          <Image src={slide.src} alt={`Slide ${index}`} />
          <Overlay>
            <SliderText>{slide.title}</SliderText>
            <SubText>{slide.subTitle}</SubText>
            <BookButton to="/book-now">Book Now</BookButton>
          </Overlay>
        </Slide>
      ))}
    </SliderWrapper>
  );
};

// Styled components for Disney Attraction Cards
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
  width: 350px;
  margin: 20px;
  overflow: hidden;
  transition: all 0.3s ease;

  &:hover {
    box-shadow: 0 12px 24px rgba(0, 0, 0, 0.5);
    transform: translateY(-2px);
  }
`;

const ImageWrapper = styled.div`
  width: 100%;
  height: 250px;
  overflow: hidden;
`;

const AttractionImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;

  ${Card}:hover & {
    transform: scale(1.1);
  }
`;

const CardContent = styled.div`
  padding: 20px;
  text-align: left;
`;

const AttractionTitle = styled.h3`
  font-size: 1.3rem;
  font-weight: 700;
  color: #333;
`;

const AttractionInfo = styled.p`
  color: #555;
  font-size: 0.9rem;
  margin-top: 5px;
`;

const Price = styled.p`
  font-size: 1rem;
  font-weight: bold;
  color: #28a745;
  margin: 10px 0;
`;

const Terms = styled.span`
  font-size: 0.7rem;
  color: #7d7d7d;
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
    background-color: #cc5200;
  }
`;

// Attraction Cards Component
const CardItem = ({ attraction }) => {
  return (
    <Card>
      <ImageWrapper>
        <AttractionImage src={attraction.image} alt={attraction.name} />
      </ImageWrapper>
      <CardContent>
        <AttractionTitle>{attraction.name}</AttractionTitle>
        <AttractionInfo>{attraction.description}</AttractionInfo>
        <Price>From ₹{attraction.price}</Price>
        <Terms>*T&C Apply</Terms>
        <BookButtonStyled to="/book-now">Book Now</BookButtonStyled>
      </CardContent>
    </Card>
  );
};

const AttractionCards = () => {

    const attractions = [
        {
          name: 'Dumbo the Flying Elephant',
          description: 'Iconic fairytale castle at Disneyland.',
          price: '5,000',
          image: 'https://upload.wikimedia.org/wikipedia/commons/3/3b/Dumbo_MK.jpg',
        },
        {
          name: 'Space Mountain',
          description: 'High-speed indoor roller coaster.',
          price: '6,500',
          image: 'https://plus.unsplash.com/premium_photo-1687279092373-0835940c35c6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cm9sbGVyJTIwY29hc3RlcnxlbnwwfHwwfHx8MA%3D%3D',
        },
        {
          name: 'Pirates of the Caribbean',
          description: 'Classic boat ride through pirate adventures.',
          price: '4,000',
          image: 'https://campnewyork.org/wp-content/uploads/2024/05/pirates-of-the-caribbean-franchise-1024x585.jpg',
        },
        {
          name: 'Finding Nemo Submarine Voyage',
          description: 'Immersive Star Wars-themed land.',
          price: '7,500',
          image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Disneyland_2_2015-01-11.JPG/800px-Disneyland_2_2015-01-11.JPG',
        },
        {
          name: 'Indiana Jones Adventure',
          description: 'Thrilling ride through ancient ruins.',
          price: '6,000',
          image: 'https://media.istockphoto.com/id/171345759/photo/colorful-holiday-carousel-horse-xxxlarge.jpg?s=1024x1024&w=is&k=20&c=1lHz0VEZynCWlFDH-f8tQcnBlB0MgO_xGcb-dH2aWEE=',
        },
        {
          name: 'Haunted Mansion',
          description: 'Spooky and fun ghost-filled mansion.',
          price: '4,500',
          image: 'https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/1600/900/75/vision-dam/digital/parks-platform/parks-global-assets/disneyland/events/halloween/Spellbinding_Thrills-Haunted_Mansion_Holiday-16x9.jpg?2024-06-17T18:34:56+00:00',
        },
        {
          name: 'Big Thunder Mountain Railroad',
          description: 'Runaway mine train coaster.',
          price: '5,500',
          image: 'https://ournextadventure.co/wp-content/uploads/2018/12/Disneyland-Rides-for-Toddlers-19-scaled.jpg',
        },
        {
          name: 'Mickey"s Small World',
          description: ' Disneyland with toddlers',
          price: '3,500',
          image: 'https://bridgesandballoons.com/Images/2022/02/Mickey-Mouse-779x584.jpg',
        },
        {
          name: 'Matterhorn Bobsleds',
          description: 'Bobsled ride through snowy mountains.',
          price: '6,200',
          image: 'https://ournextadventure.co/wp-content/uploads/2018/12/Disneyland-Rides-for-Toddlers-6-1536x1024.jpg',
        },
        {
          name: 'Splash Mountain',
          description: 'Log flume ride with big drop.',
          price: '5,700',
          image: 'https://ournextadventure.co/wp-content/uploads/2018/12/Disneyland-Rides-for-Toddlers-13-1536x1024.jpg',
        },
        {
          name: 'Jungle Cruise',
          description: 'Riverboat adventure through jungle.',
          price: '4,800',
          image: 'https://ournextadventure.co/wp-content/uploads/2018/12/Disneyland-Rides-for-Toddlers-11-1536x1024.jpg',
        },
        {
          name: 'Buzz Lightyear Astro Blasters',
          description: 'Interactive space shooting game.',
          price: '4,000',
          image: 'https://ournextadventure.co/wp-content/uploads/2018/12/Disneyland-Rides-for-Toddlers-1-1536x1024.jpg',
        },
        {
          name: 'Autopia',
          description: 'Drive cars on scenic roadway.',
          price: '3,000',
          image: 'https://ournextadventure.co/wp-content/uploads/2018/12/Disneyland-Rides-for-Toddlers-33-1536x1024.jpg',
        },
        {
          name: 'Dumbo the Flying Elephant',
          description: 'Ride on flying Dumbo elephants.',
          price: '3,800',
          image: 'https://ournextadventure.co/wp-content/uploads/2018/12/Disneyland-Rides-for-Toddlers-8-1536x1024.jpg',
        },
        {
          name: 'Peter Pan’s Flight',
          description: 'Soar through Neverland on a magical journey.',
          price: '4,200',
          image: 'https://ournextadventure.co/wp-content/uploads/2018/12/Disneyland-Rides-for-Toddlers-26-682x1024.jpg',
        },
        {
          name: 'Alice in Wonderland',
          description: 'Whimsical dark ride through Wonderland.',
          price: '4,000',
          image: 'https://ournextadventure.co/wp-content/uploads/2018/12/Disneyland-Rides-for-Toddlers-25-682x1024.jpg',
        },
        {
          name: 'Mad Tea Party',
          description: 'Spinning teacups ride.',
          price: '3,500',
          image: 'https://ournextadventure.co/wp-content/uploads/2018/12/Disneyland-Rides-for-Toddlers-24-scaled.jpg',
        },
        {
          name: 'Mr. Toad’s Wild Ride',
          description: 'Zany journey through the countryside.',
          price: '3,700',
          image: 'https://ournextadventure.co/wp-content/uploads/2018/12/Disneyland-Rides-for-Toddlers-28-1536x1024.jpg',
        },
        {
          name: 'The Many Adventures of Winnie the Pooh',
          description: 'Journey through Hundred Acre Wood.',
          price: '3,400',
          image: 'https://ournextadventure.co/wp-content/uploads/2018/12/Disneyland-Rides-for-Toddlers-30-1536x1024.jpg',
        },
        {
          name: 'Finding Nemo Submarine Voyage',
          description: 'Underwater adventure with Nemo and friends.',
          price: '5,200',
          image: 'https://www.parentmap.com/sites/default/files/styles/1180x660_scaled_cropped/public/2024-05/mickey%20mouse%20and%20sleeping%20beautys%20castle_credit%20Joshua%20Sudock%20Disneyland%20Resort.jpg?itok=rLPwaMMY',
        },
        {
          name: 'Mickey’s Toontown',
          description: 'Explore Mickey and friends’ cartoon world.',
          price: '4,300',
          image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/Mickey%27s_Toontown_entrance_sign_2023.jpg/1280px-Mickey%27s_Toontown_entrance_sign_2023.jpg',
        },
        {
          name: 'Roger Rabbit’s Car Toon Spin',
          description: 'Zany dark ride through Toontown.',
          price: '4,000',
          image: 'https://www.parentmap.com/sites/default/files/files/Minnie-Mouse%20in%20Mickeys%20Toontown%20at%20Disneyland%20Park%20Anaheim_%20credit%20Christian%20Thompson%20Disneyland%20Resort.jpg',
        },
        {
          name: 'Gadget’s Go Coaster',
          description: 'Family-friendly roller coaster.',
          price: '3,600',
          image: 'https://www.parentmap.com/sites/default/files/files/mad%20tea%20party%20ride%20at%20Disneyland_%20redit%20Joshua%20Sudock-Disneyland%20Resort.jpg',
        },
        {
          name: 'Fantasmic!',
          description: 'Nighttime spectacular of Disney magic.',
          price: '6,800',
          image: 'https://www.parentmap.com/sites/default/files/files/fantasmic-at-disneyland-resort_credit%20Richard%20Harbaugh%20Disneyland%20Resort.jpg',
        },
        {
          name: 'Disneyland Railroad',
          description: 'Scenic train ride around Disneyland.',
          price: '2,500',
          image: 'https://www.parentmap.com/sites/default/files/files/Avengers%20Campus%20at%20Disney%20California%20Adventure%20Park_credit%20Richard%20Harbaugh%20Disneyland%20Resort.jpg',
        },
        {
          name: 'Mark Twain Riverboat',
          description: 'Paddle steamer on the Rivers of America.',
          price: '2,800',
          image: 'https://www.parentmap.com/sites/default/files/files/Grizzly-River-Run%20thrilling%20white-water%20raft%20adventure%20in%20Disney%20California%20Adventure%20Park%20in%20Anaheim_credit%20Paul%20Hiffmeyer%20Disneyland%20Resort.jpg',
        },
        {
          name: 'Sailing Ship Columbia',
          description: 'Replica of historic tall ship.',
          price: '3,200',
          image: 'https://www.parentmap.com/sites/default/files/files/Magic-Happens-Mickey_%20redit%20Joshua%20Sudock_Disneyland%20Resort_0.jpg',
        },
       
      ];
      


  return (
    <CardContainer>
      {attractions.map((attraction, index) => (
        <CardItem key={index} attraction={attraction} />
      ))}
    </CardContainer>
  );
};

// Main HomePage Component
const HomePage = () => {
  return (
    <div>
      <AutoSlider />
      <AttractionCards />
    </div>
  );
};

export default HomePage;
