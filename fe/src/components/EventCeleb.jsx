

import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { FaStar, FaShareAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

// Styled Components
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  font-family: Arial, sans-serif;
  background: linear-gradient(to bottom, #111, #222);
  color: white;
`;

const Carousel = styled.div`
  position: relative;
  width: 90%;
  overflow: hidden;
  margin-top: 20px;
`;

const CarouselTrack = styled.div`
  display: flex;
  gap: 20px;
  transition: transform 0.5s ease-in-out;
  transform: ${({ currentSlide }) => `translateX(-${currentSlide * 100}%)`};
`;

const Card = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  position: relative;
  background-image: ${({ img }) => `url(${img})`};
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  color: black;
  border-radius: 12px;
  overflow: hidden;
  min-width: 100%;
  box-shadow: 0 6px 15px rgba(0, 0, 0, 0.5);
  padding: 20px;
  height: 400px;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.6); /* Semi-transparent overlay */
    z-index: 1;
    border-radius: 12px;
  }

  .content {
    position: relative;
    z-index: 2;
    display: flex;
    flex-direction: column;
    gap: 15px;
    width: 60%;
  }

  .poster {
    position: relative;
    z-index: 2;
    width: 35%;
    img {
      width: 100%;
      border: 5px solid #fff;
      border-radius: 10px;
      box-shadow: 0 4px 10px rgba(0, 0, 0, 0.6);
    }
  }
`;

const Title = styled.h1`
  margin: 0;
  font-size: 24px;
  font-weight: bold;
`;

const RatingRow = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const Badge = styled.span`
  background-color: #323232;
  color: white;
  border-radius: 5px;
  padding: 5px 10px;
  font-size: 14px;
`;

const Button = styled.button`
  background-color: #ff2f70;
  color: white;
  border: none;
  padding: 12px 20px;
  border-radius: 5px 25px 25px;
  font-size: 1rem;
  width: 150px;
  cursor: pointer;
  transition: background 0.3s, transform 0.2s;

  &:hover {
    background-color: #e02865;
    transform: translateY(-2px);
  }
`;

const ShareIcon = styled.div`
  position: absolute;
  top: 30px;
  color: #fff;
  right: 30px;
  cursor: pointer;
`;

const SliderControls = styled.div`
  display: flex;
  justify-content: space-between;
  width: 90%;
  margin-top: 10px;
`;

const SliderButton = styled.button`
  background-color: #ff2f70;
  color: white;
  padding: 12px 20px;
  border: none;
  border-radius: 5px 25px 5px;
  font-size: 1rem;
  width: 150px;
  cursor: pointer;
  transition: background 0.3s, transform 0.2s;

  &:hover {
    background-color: #e02865;
    transform: translateY(-2px);
  }
`;

// Talent Category Section Styling
const TalentSection = styled.div`
  margin-top: 40px;
  width: 90%;
  text-align: center;
`;

const TalentTitle = styled.h2`
  color: white;
  font-size: 28px;
  margin-bottom: 20px;
  text-transform: uppercase;
`;

const TalentGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
`;

const TalentCard = styled.div`
  width: 250px;
  height: 320px;
  text-align: center;
  cursor: pointer;
  border-radius: 12px;
  overflow: hidden;
  transition: transform 0.3s ease-in-out, box-shadow 0.3s ease;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.3);
  }

  img {
    width: 100%;
    height: 250px;
    object-fit: cover;
    border-radius: 12px;
    transition: opacity 0.3s ease-in-out;
  }

  h3 {
    margin-top: 10px;
    font-size: 18px;
    color: white;
    font-weight: bold;
    transition: color 0.3s ease;
  }

  &:hover h3 {
    color: #ff2f70;
  }
`;

const MoviePage = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const cards = [
    {
      title: "Sky Force",
      rating: "8.9/10",
      votes: "4.4K Votes",
      badges: ["2D, IMAX 2D", "Hindi"],
      details: "2h 5m • Action, Historical, Thriller • UA13+ • 24 Jan, 2025",
      img: "https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/sky-force-et00371539-1737535327.jpg",
    },
    {
      title: "Avatar 2",
      rating: "9.1/10",
      votes: "12.1K Votes",
      badges: ["3D, IMAX 3D", "English"],
      details: "3h 10m • Sci-Fi, Adventure • UA • 16 Dec, 2022",
      img: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSxTA7S2fDMhUDVcZnuxuie2xE_ayntCdkCKme3EK3ObKXFuhdaLhYYTpzUHZ45-IQzQt6T",
    },
    {
      title: "Oppenheimer",
      rating: "9.3/10",
      votes: "8.5K Votes",
      badges: ["IMAX", "English"],
      details: "3h 0m • Biography, Drama, History • A • 21 Jul, 2023",
      img: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQ8FFJNBaIXvhEwqXXw40rYYDci8jPlYxWfy9082flliYoZ-SqqZjy0az-G5rIWuSJp2pn7xQ",
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === cards.length - 1 ? 0 : prevSlide + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === 0 ? cards.length - 1 : prevSlide - 1));
  };
    // Auto-slide every 3 seconds
  useEffect(() => {
    const slideInterval = setInterval(() => {
      nextSlide();
    }, 3000);

    return () => clearInterval(slideInterval);
  }, []);

  // Talent Categories Data
  const talentData = [
    { title: "Singers/Bands Bollywood", imgSrc: "https://cdn.pixabay.com/photo/2020/07/23/11/58/man-5431169_1280.jpg", path: "/singer-list" },
    { title: "Bands - Non Bollywood", imgSrc: "https://images.unsplash.com/photo-1415201364774-f6f0bb35f28f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTR8fHxlbnwwfHx8fHw%3D", path: "/bands-non-bollywood" },
    { title: "Stand-up Comedians", imgSrc: "https://media.istockphoto.com/id/819501570/photo/women-bowing-on-stage-after-a-concert.jpg?s=612x612&w=0&k=20&c=-VaHz-RxP6Ugf2TSmykXliZOk6YekqwUOilomFOK03Q=", path: "/comedians" },
    { title: "Speakers", imgSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3NQUhJcMU1FF_EBAbifMo50GaZdud6pszxQ&s", path: "/speakers" },
    { title: "Sports Personalities", imgSrc: "https://media.gettyimages.com/id/110022742/photo/nagpur-india-sachin-tendulkar-of-india-raises-his-bat-on-scoring-his-century-during-the-group.jpg?s=612x612&w=0&k=20&c=ZAcjuWPCJdxDqlPICZGKZHCwaWcwsJxY1ckcNWcty2E=", path: "/sports-personalities" },
    { title: "Anchors", imgSrc: "https://images.unsplash.com/photo-1709377303352-7c845ac999ac?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cHVibGljJTIwc3BlYWtpbmd8ZW58MHx8MHx8fDA%3D", path: "/anchors" },
    { title: "Film/TV Actors", imgSrc: "https://media.istockphoto.com/id/559536551/photo/celebrity-waving-at-paparazzi-photographers-at-event.webp?a=1&b=1&s=612x612&w=0&k=20&c=klOScCIN_CRxXLjmp8sZPkTAYoatoShDu53av3SVf1Q=", path: "/film-tv-actors" },
    { title: "Influencers & Content Creators", imgSrc: "https://images.unsplash.com/photo-1580317092843-52bb0adbed4f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8SW5mbHVlbmNlcnMlMjAlMjYlMjBDb250ZW50JTIwQ3JlYXRvcnN8ZW58MHx8MHx8fDA%3D", path: "/influencers" },
    { title: "Celeb Dance Performers", imgSrc: "https://media.gettyimages.com/id/1160643993/photo/silhouette-of-raised-hands-and-arms-at-concert-festival-party.jpg?s=612x612&w=0&k=20&c=DiuTPBl33Y1vXaYsFBmmPGEGRaJZ-SB16d1Hfq66Ufk=", path: "/dance-performers" }
  ];

  return (
    <Container>
      <Carousel>
        <CarouselTrack currentSlide={currentSlide}>
          {cards.map((card, index) => (
            <Card key={index} img={card.img}>
              <div className="poster">
                <img src={card.img} alt={`${card.title} Poster`} />
              </div>
              <div className="content">
                <Title>{card.title}</Title>
                <RatingRow>
                  <span style={{ display: "flex", alignItems: "center", gap: 5 }}>
                    <FaStar color="#ffcc00" />
                    <b>{card.rating}</b> ({card.votes})
                  </span>
                </RatingRow>
                <div style={{ display: "flex", gap: "10px" }}>
                  {card.badges.map((badge, i) => (
                    <Badge key={i}>{badge}</Badge>
                  ))}
                </div>
                <div>{card.details}</div>
                <Button>Book tickets</Button>
              </div>
              <ShareIcon>
                <FaShareAlt color="white" />
              </ShareIcon>
            </Card>
          ))}
        </CarouselTrack>
      </Carousel>
      <SliderControls>
        <SliderButton onClick={prevSlide}>Previous</SliderButton>
        <SliderButton onClick={nextSlide}>Next</SliderButton>
      </SliderControls>

      {/* Talent Category Section */}

      <TalentSection>
        <TalentTitle>Explore Talent Categories</TalentTitle>
        <TalentGrid>
          {talentData.map((talent, index) => (
            <Link to={talent.path} key={index}>
              <TalentCard>
                <img src={talent.imgSrc} alt={talent.title} />
                <h3>{talent.title}</h3>
              </TalentCard>
            </Link>
          ))}
        </TalentGrid>
      </TalentSection>


    </Container>
  );
};

export default MoviePage;
