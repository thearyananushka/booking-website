

import React, { useState } from "react";
import styled from "styled-components";
import VenueCard from "./VenueCard";
import venuesData from "./venuesData";
import ImageSlider from "./ImageSlider";
import ImgCard from "./ImgCard"
import RentCar from "./RentCar"


// Styled Components
const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  background: #fff;
 
`;

const Title = styled.h1`
  // font-size: 2.5rem;
  // color: #ff4081;
  // margin-bottom: 20px;
  // text-align: center;

  font-size: 2.5rem;
  color: #00C6FF;
  margin-bottom: 40px;
  text-align: center;
`;

const VenueGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  margin-top: 20px;
`;

const TalentTitle = styled.h2`
  font-size: 2.5rem;
  // color: #ff4081;
  color: #00C6FF;
  text-align: center;
  // margin-top: 40px;
  margin-bottom: 10px;

  // font-size: 2rem;
  // color: #00C6FF;
  // margin-bottom: 40px;
  // text-align: center;
`;

const TalentDescription = styled.p`
  text-align: center;
  color: #555;
  margin-bottom: 40px;
`;

const TalentGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
`;

const Card = styled.div`
  border: 1px solid #ddd;
  border-radius: 8px;
  overflow: hidden;
  padding: 5px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
  cursor: pointer;

  &:hover {
    transform: scale(1.05);
  }
`;

const Image = styled.img`
  width: 100%;
  height: 150px;
  object-fit: cover;
`;

const CardTitle = styled.h3`
  font-size: 1rem;
  margin: 10px 0;
  font-weight: bold;
  color: #333;
`;

const images = [
  "https://www.udaipurweddings.com/s/img/wp-content/uploads/2018/08/34688004.jpg",
  "https://www.udaipurweddings.com/s/img/wp-content/uploads/2017/11/8-4.jpg",
  "https://www.udaipurweddings.com/s/img/wp-content/uploads/2017/11/5-9.jpg",
];


// Talent Categories Data
const talentData = [
    { title: "Singers/Bands Bollywood", imgSrc: "https://cdn.pixabay.com/photo/2020/07/23/11/58/man-5431169_1280.jpg" },
  
    { title: "Bands - Non Bollywood", imgSrc: "https://images.unsplash.com/photo-1415201364774-f6f0bb35f28f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTR8fHxlbnwwfHx8fHw%3D" },
  
  
    { title: "Stand-up Comedians", imgSrc: "https://media.istockphoto.com/id/819501570/photo/women-bowing-on-stage-after-a-concert.jpg?s=612x612&w=0&k=20&c=-VaHz-RxP6Ugf2TSmykXliZOk6YekqwUOilomFOK03Q=" },
  
  
    { title: "Speakers", imgSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3NQUhJcMU1FF_EBAbifMo50GaZdud6pszxQ&s" },
  
    { title: "Sports Personalities", imgSrc: "https://media.gettyimages.com/id/110022742/photo/nagpur-india-sachin-tendulkar-of-india-raises-his-bat-on-scoring-his-century-during-the-group.jpg?s=612x612&w=0&k=20&c=ZAcjuWPCJdxDqlPICZGKZHCwaWcwsJxY1ckcNWcty2E=" },
  
    { title: "Anchors", imgSrc: "https://images.unsplash.com/photo-1709377303352-7c845ac999ac?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cHVibGljJTIwc3BlYWtpbmd8ZW58MHx8MHx8fDA%3D" },
  
    { title: "Film/TV Actors", imgSrc: "https://media.istockphoto.com/id/559536551/photo/celebrity-waving-at-paparazzi-photographers-at-event.webp?a=1&b=1&s=612x612&w=0&k=20&c=klOScCIN_CRxXLjmp8sZPkTAYoatoShDu53av3SVf1Q=" },
  
    { title: "Influencers & Content Creators", imgSrc: "https://images.unsplash.com/photo-1580317092843-52bb0adbed4f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8SW5mbHVlbmNlcnMlMjAlMjYlMjBDb250ZW50JTIwQ3JlYXRvcnN8ZW58MHx8MHx8fDA%3D" },


  
    { title: "Celeb Dance Performers", imgSrc: "https://media.gettyimages.com/id/1160643993/photo/silhouette-of-raised-hands-and-arms-at-concert-festival-party.jpg?s=612x612&w=0&k=20&c=DiuTPBl33Y1vXaYsFBmmPGEGRaJZ-SB16d1Hfq66Ufk=" },
  
    { title: "Unique Acts - Indian/International", imgSrc: "https://images.unsplash.com/photo-1540324155974-7523202daa3f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Q2VsZWIlMjBEYW5jZSUyMFBlcmZvcm1lcnN8ZW58MHx8MHx8fDA%3D" },
  
    { title: "Dance Productions", imgSrc: "https://media.istockphoto.com/id/168521057/photo/traditional-indian-dancers.webp?a=1&b=1&s=612x612&w=0&k=20&c=RZwmq79SwD_SPaQjIq6RWHyaIJnWQ_nkPwYZPUgeMEU=" },
  
    { title: "Musical Ensembles", imgSrc: "https://media.gettyimages.com/id/1137781483/photo/black-male-guitarist-singing-and-playing-acoustic-guitar-on-stage.jpg?s=612x612&w=0&k=20&c=FumC-iuwoUWijPo6wcx4V162mV5PB8g7FQGOR7A1a88=" },
  ];

  
  

const Venue = () => {
  const [venues, setVenues] = useState(venuesData);

  const handleFilter = (filterType) => {
    const sorted = [...venues].sort((a, b) => {
      if (filterType === "price") {
        return parseInt(a.price.replace("₹", "")) - parseInt(b.price.replace("₹", ""));
      } else if (filterType === "capacity") {
        const aCapacity = parseInt(a.capacity.split("-")[0]);
        const bCapacity = parseInt(b.capacity.split("-")[0]);
        return aCapacity - bCapacity;
      }
      return 0;
    });
    setVenues(sorted);
  };

  return (
    <Container>
      {/* Wedding Venues Section */}
      <Title>Book Dream Venues & Celebs for <br /> Your Big Day</Title>
      {/* <Title>Book Dream Wedding Venues & Celebrities for <br /> Your Big Day</Title> */}
      {/* <TalentDescription>
      Explore a curated selection of premium wedding venues and celebrity talent, tailored to make your special day truly unforgettable.
      </TalentDescription> */}
      <ImageSlider images={images} />
      <RentCar/>
      <ImgCard/>
      {/* <RentCar/> */}
      <TalentTitle>Wedding Venues Booking Service</TalentTitle>
     

      <VenueGrid>
        {venues.map((venue) => (
          <VenueCard key={venue.id} venue={venue} />
        ))}
      </VenueGrid>

      {/* Talent Categories Section */}
      <TalentTitle>Book From Talent Categories</TalentTitle>
      <TalentDescription>
        Choose from an unparalleled list of talent options across a wide spectrum of genres.
      </TalentDescription>
      <TalentGrid>
        {talentData.map((item, index) => (
          <Card key={index}>
            <Image src={item.imgSrc} alt={item.title} />
            <CardTitle>{item.title}</CardTitle>
          </Card>
        ))}
      </TalentGrid>
    </Container>
  );
};

export default Venue;
