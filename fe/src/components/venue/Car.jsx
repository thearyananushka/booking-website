

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
  background-color: #00C6FF;
//   background-color: #6a0dad;
  color: white;
  padding: 10px 20px;
  text-decoration: none;
  font-size: 1.5rem;
  border-radius: 25px;

  &:hover {
    background-color: #4e0482;
  }
`;

const AutoSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      src: 'https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/facelift_2019/model_detail/few_off/sian_rds/ar_sian_rds.png',
      title: 'Drive the Future, One Month at a Time',
      subTitle: 'Drive Your Dream Car with Ease',
    },
    {
      src: 'https://tmna.aemassets.toyota.com/is/image/toyota/lexus/images/models/lc/2025/design/Lexus-LCC-Exterior%20Design-Desktop-1440x800-LEX-LC5-MY24-0028.01.jpg?wid=1440&hei=800',
      title: 'Experience Luxury on Wheels',
      subTitle: 'Subscribe and Drive Now',
    },
    {
      src: 'https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/facelift_2019/model_detail/augmented-reality/aventador/svj/11_17/ar_aventador_svj.png',
      title: 'Unlock the Power of Performance',
      subTitle: 'Your Dream Car Awaits',
    },
    {
      src: 'https://images.unsplash.com/photo-1542727303-6acb61bf8289?q=80&w=1631&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      title: 'Speed Meets Elegance',
      subTitle: 'Book Your Luxury Ride Today',
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 2000); // Auto-slide every 4 seconds

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

// Styled components for Car Cards
const CardContainer = styled.div`
  display: flex;
  justify-content: space-around;
  padding: 20px;
  flex-wrap: wrap; /* Allows wrapping for responsiveness */
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
    // transform: translateY(-5px); /* Adds a small lift effect */
  }
`;

const ImageWrapper = styled.div`
  width: 100%;
  height: 250px;
  overflow: hidden;
`;

const CarImage = styled.img`
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

const CarTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 700;
  color: #333;
`;

const CarInfo = styled.p`
  color: #555;
  font-size: 1rem;
  margin-top: 5px;
`;

const Price = styled.p`
  font-size: 1rem;
  font-weight: bold;
  color: #28a745;
  margin: 10px 0;
`;

const Terms = styled.span`
  font-size: 0.9rem;
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
  float: right; /* Aligns the button to the right */
  margin-bottom: 20px;

  &:hover {
    background-color: #e03d1c;
  }
`;

// CarCards Component
const CardItem = ({ car }) => {
  return (
    <Card>
      <ImageWrapper>
        <CarImage src={car.image} alt={car.name} />
      </ImageWrapper>
      <CardContent>
        <CarTitle>{car.name}</CarTitle>
        <CarInfo>🚗 {car.type} | {car.brand}</CarInfo>
        <Price>Starting from ₹{car.price}</Price>
        <Terms>*T&C Apply</Terms>
        <BookButtonStyled to="/book-now">Book Now</BookButtonStyled>
      </CardContent>
    </Card>
  );
};

const CarCards = () => {
    const cars = [
        {
          name: 'Bugatti La Voiture Noire',
          type: 'Hypercar',
          brand: 'Bugatti',
          price: '19,000,000',
          image: 'https://www.v3cars.com/media/model-imgs/1639980169-La-Voiture-Noire.jpg',
        },
        {
          name: 'Rolls-Royce Sweptail',
          type: 'Luxury Coupe',
          brand: 'Rolls-Royce',
          price: '13,000,000',
          image: 'https://www.rolls-roycemotorcars.com/content/dam/rrmc/marketUK/rollsroycemotorcars_com/2-6-10-coachbuild--sweptail/components/rolls-royce-body-coachbuild-only-by-rolls-royce-the-pinnacle-of-coachbuild-sweptail-fullbleed-v2.jpg/jcr:content/renditions/cq5dam.web.1668.webp',
        },
        {
          name: 'Pagani Zonda HP Barchetta',
          type: 'Hypercar',
          brand: 'Pagani',
          price: '17,500,000',
          image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/Geneva_International_Motor_Show_2018%2C_Le_Grand-Saconnex_%281X7A1467%29_%28cropped%29.jpg/800px-Geneva_International_Motor_Show_2018%2C_Le_Grand-Saconnex_%281X7A1467%29_%28cropped%29.jpg',
        },
        {
          name: 'Lamborghini Veneno Roadster',
          type: 'Supercar',
          brand: 'Lamborghini',
          price: '8,300,000',
          image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d6/Autoworld_Br%C3%BCssel_150_-_Italian_Car_Passion_-_Lamborghini_Veneno_Roadster.jpg/800px-Autoworld_Br%C3%BCssel_150_-_Italian_Car_Passion_-_Lamborghini_Veneno_Roadster.jpg',
        },
        {
          name: 'Bugatti Centodieci',
          type: 'Hypercar',
          brand: 'Bugatti',
          price: '9,000,000',
          image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/2022_Bugatti_Centodieci_in_Grigio_Chiaro%2C_front_right1.jpg/1024px-2022_Bugatti_Centodieci_in_Grigio_Chiaro%2C_front_right1.jpg',
        },
        {
          name: 'Mercedes-Maybach Exelero',
          type: 'Luxury Coupe',
          brand: 'Mercedes-Benz',
          price: '8,000,000',
          image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/26/Excelero.jpg/800px-Excelero.jpg',
        },
        {
          name: 'Koenigsegg CCXR Trevita',
          type: 'Hypercar',
          brand: 'Koenigsegg',
          price: '4,800,000',
          image: 'https://images.pexels.com/photos/1383834/pexels-photo-1383834.jpeg?auto=compress&cs=tinysrgb&w=600',
        },
        {
          name: 'Lamborghini Sian',
          type: 'Supercar',
          brand: 'Lamborghini',
          price: '3,600,000',
          image: 'https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/facelift_2019/model_detail/few_off/sian_rds/ar_sian_rds.png',
        },
        {
          name: 'Ferrari Pininfarina Sergio',
          type: 'Luxury Sports Car',
          brand: 'Ferrari',
          price: '3,000,000',
          image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Geneva_MotorShow_2013_-_Pininfarina_Sergio_right_front_view.jpg/800px-Geneva_MotorShow_2013_-_Pininfarina_Sergio_right_front_view.jpg',
        },
        {
          name: 'Aston Martin Valkyrie',
          type: 'Hypercar',
          brand: 'Aston Martin',
          price: '3,000,000',
          image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/Aston_Martin_Valkyrie_Verification_Prototype_001_Genf_2019_1Y7A5961.jpg/800px-Aston_Martin_Valkyrie_Verification_Prototype_001_Genf_2019_1Y7A5961.jpg',
        },
        {
          name: 'McLaren Speedtail',
          type: 'Luxury Hypercar',
          brand: 'McLaren',
          price: '2,500,000',
          image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/2019_McLaren_Speedtail_%28Rob_Melville%29.jpg/800px-2019_McLaren_Speedtail_%28Rob_Melville%29.jpg',
        },
        {
          name: 'Bugatti Chiron Super Sport 300+',
          type: 'Hypercar',
          brand: 'Bugatti',
          price: '3,900,000',
          image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/Bugatti_La_Voiture_Noire%2C_GIMS_2019%2C_Le_Grand-Saconnex_%28GIMS0948%29.jpg/800px-Bugatti_La_Voiture_Noire%2C_GIMS_2019%2C_Le_Grand-Saconnex_%28GIMS0948%29.jpg',
        },
        {
          name: 'Pagani Huayra Roadster BC',
          type: 'Luxury Convertible',
          brand: 'Pagani',
          price: '3,500,000',
          image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/2013-03-05_Geneva_Motor_Show_7881.JPG/800px-2013-03-05_Geneva_Motor_Show_7881.JPG',
        },
        {
          name: 'Lamborghini Aventador SVJ',
          type: 'Supercar',
          brand: 'Lamborghini',
          price: '5,200,000',
          image: 'https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/facelift_2019/model_detail/augmented-reality/aventador/svj/11_17/ar_aventador_svj.png',
        },
        {
          name: 'Rolls-Royce Phantom',
          type: 'Luxury Sedan',
          brand: 'Rolls-Royce',
          price: '2,000,000',
          image: 'https://www.rolls-roycemotorcars.com/content/dam/rrmc/marketUK/rollsroycemotorcars_com/phantom-extended-series-ii-discover/components/Phantom-II-Ext-Discover-Full-Shot-1.jpg/jcr:content/renditions/original',
        },
        {
          name: 'Bentley Mulliner Bacalar',
          type: 'Luxury Convertible',
          brand: 'Bentley',
          price: '2,000,000',
          image: 'https://www.bentleymotors.com/content/dam/bm/websites/bmcom/bentleymotors-com/models/mulliner/coachbuilt-page/Mulliner%20Stage%20Media%201.jpg/_jcr_content/renditions/original.image_file.768.576.file/Mulliner%20Stage%20Media%201.jpg',
        },
        {
          name: 'Ferrari Monza SP2',
          type: 'Supercar',
          brand: 'Ferrari',
          price: '1,800,000',
          image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/68/Festival_automobile_international_2019_-_Ferrari_Monza_SP1_-_005_%28cropped%29.jpg/1024px-Festival_automobile_international_2019_-_Ferrari_Monza_SP1_-_005_%28cropped%29.jpg',
        },
        {
          name: 'Lexus LC500 Convertible',
          type: 'Luxury Convertible',
          brand: 'Lexus',
          price: '200,000',
          image: 'https://tmna.aemassets.toyota.com/is/image/toyota/lexus/images/models/lc/2025/design/Lexus-LCC-Exterior%20Design-Desktop-1440x800-LEX-LC5-MY24-0028.01.jpg?wid=1440&hei=800',
        },
        {
          name: 'Porsche 911 Turbo S',
          type: 'Luxury Coupe',
          brand: 'Porsche',
          price: '230,000',
          image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Porsche_911_Dakar_at_the_2022_Greater_Los_Angeles_Auto_Show.jpg/800px-Porsche_911_Dakar_at_the_2022_Greater_Los_Angeles_Auto_Show.jpg',
        },
        
        {
          name: 'Bentley Flying Spur',
          type: 'Luxury Sedan',
          brand: 'Bentley',
          price: '300,000',
          image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/20051022flying_spur_room.jpg/800px-20051022flying_spur_room.jpg',
        },
        
        {
          name: 'Jaguar F-Type R',
          type: 'Luxury Coupe',
          brand: 'Jaguar',
          price: '150,000',
          image: 'https://stimg.cardekho.com/images/carexteriorimages/360x240/Jaguar/Jaguar-F-Type/047.jpg',
        },
      ];
      

  return (
    <CardContainer>
      {cars.map((car, index) => (
        <CardItem key={index} car={car} />
      ))}
    </CardContainer>
  );
};

// Main HomePage Component
const HomePage = () => {
  return (
    <div>
      <AutoSlider />
      <CarCards />
    </div>
  );
};

export default HomePage;

