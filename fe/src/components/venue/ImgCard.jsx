
import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

// Styled components
const Container = styled.div`
  padding: 20px 5%;
  width: 100%;
  background: #FCF5E5;
  border-radius:30px;
  // background-image : url("https://images.pexels.com/photos/722432/pexels-photo-722432.jpeg?auto=compress&cs=tinysrgb&w=600");
`;

const HeaderRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 15px;
`;

const SectionTitle = styled.h2`
  // font-size: 2rem;
  // font-weight: bold;
  // color: #ff4081;
  // margin: 0;
  // margin-top: 20px;


  font-size: 2.2rem;
  font-weight: bold;
  color: #00C6FF;
  text-align: center;
  margin: 0;
  margin-top: 10px;
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

const ImageRow = styled.div`
  display: flex;
  overflow-x: auto;
  gap: 35px;
  padding-bottom: 10px;
  width: 100%;
  /* Hide scrollbar */
  -ms-overflow-style: none; /* Internet Explorer 10+ */
  scrollbar-width: none; /* Firefox */
  
  &::-webkit-scrollbar {
    display: none; /* Safari and Chrome */
  }
`;

const ScrollButton = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: #ff4081;
  border: 1px solid #ff4081;
  color: #fff;
  cursor: pointer;
  border-radius: 50%;
  padding: 4px;
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background 0.3s, transform 0.3s;

  &:hover {
    color: #fff;
    background: #ff4081;
    transform: scale(1.1);
  }

  ${(props) =>
    props.direction === 'left'
      ? 'left: -30px;'
      : 'right: -20px;'}
`;

const ImageRowWrapper = styled.div`
  position: relative; /* Allows buttons to be positioned relative to the row */
  display: flex;
  align-items: center;
`;

const ImageCard = styled(Link)`
  flex: 0 0 300px;
  height: 350px;
  background: #fff;
  border-radius: 8px;
  overflow: hidden;
  text-decoration: none;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  // box-shadow: 10px 14px 16px 10px rgba(0, 0, 0, 0.6);
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
    font-size: 1.3rem;
    color: #000;
    margin: 10px;
  }
`;

// Styled View All Button for Urban Landscapes
const ViewAllButton = styled(Link)`

background: linear-gradient(90deg, #ff7eb3, #ff758c);
color: white;
font-size: 1.2rem;
font-weight: bold;
padding: 8px 16px;
border: none;
border-radius: 50px;
margin-bottom: 1px;
margin-left: 30%;
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

// Data for different categories
const categories = {
  'Book Wedding Categories': [
    { id: 1, src: 'https://image.wedmegood.com/resized/300X/uploads/banner_image/3/photography.jpg', title: 'Book Photographer' },
    { id: 2, src: 'https://image.wedmegood.com/resized/300X/uploads/banner_image/2/mua.jpg', title: 'Book Bridal Makeup' },
    { id: 3, src: 'https://image.wedmegood.com/resized/300X/uploads/banner_image/7/mehndi.jpg', title: 'Book Mehendi Artist' },
    { id: 4, src: 'https://image.wedmegood.com/resized/300X/uploads/banner_image/5/caterers.jpg', title: 'Catering Service' },
  ],


  'Book From Talent Categories': [
    { id: 1, src: 'https://cdn.pixabay.com/photo/2020/07/23/11/58/man-5431169_1280.jpg', title: 'Singers/Bands Bollywood' },

    { id: 2, src: 'https://images.unsplash.com/photo-1415201364774-f6f0bb35f28f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTR8fHxlbnwwfHx8fHw%3D', title: 'Bands - Non Bollywood' },

    { id: 3, src: 'https://media.istockphoto.com/id/819501570/photo/women-bowing-on-stage-after-a-concert.jpg?s=612x612&w=0&k=20&c=-VaHz-RxP6Ugf2TSmykXliZOk6YekqwUOilomFOK03Q=', title: 'Stand-up Comedians' },

    { id: 4, src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3NQUhJcMU1FF_EBAbifMo50GaZdud6pszxQ&s', title: 'Speakers' },

    { id: 5, 
      src: 'https://media.gettyimages.com/id/110022742/photo/nagpur-india-sachin-tendulkar-of-india-raises-his-bat-on-scoring-his-century-during-the-group.jpg?s=612x612&w=0&k=20&c=ZAcjuWPCJdxDqlPICZGKZHCwaWcwsJxY1ckcNWcty2E=', 
      title: 'Sports Personalities' 
    },
    { id: 6, 
      src: 'https://images.unsplash.com/photo-1709377303352-7c845ac999ac?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cHVibGljJTIwc3BlYWtpbmd8ZW58MHx8MHx8fDA%3D', 
      title: 'Anchors' 
    },
    { id: 7, 
      src: 'https://media.istockphoto.com/id/559536551/photo/celebrity-waving-at-paparazzi-photographers-at-event.webp?a=1&b=1&s=612x612&w=0&k=20&c=klOScCIN_CRxXLjmp8sZPkTAYoatoShDu53av3SVf1Q=', 
      title: 'Film/TV Actors' 
    },
    { id: 8, 
      src: 'https://images.unsplash.com/photo-1580317092843-52bb0adbed4f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8SW5mbHVlbmNlcnMlMjAlMjYlMjBDb250ZW50JTIwQ3JlYXRvcnN8ZW58MHx8MHx8fDA%3D', 
      title: 'Influencers & Creators' 
    },
    { id: 9, 
      src: 'https://media.gettyimages.com/id/1160643993/photo/silhouette-of-raised-hands-and-arms-at-concert-festival-party.jpg?s=612x612&w=0&k=20&c=DiuTPBl33Y1vXaYsFBmmPGEGRaJZ-SB16d1Hfq66Ufk=', 
      title: 'Celeb Dance Performers' 
    },
    { id: 10, 
      src: 'https://images.unsplash.com/photo-1540324155974-7523202daa3f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Q2VsZWIlMjBEYW5jZSUyMFBlcmZvcm1lcnN8ZW58MHx8MHx8fDA%3D', 
      title: 'Unique Acts - Indian/International' 
    },
    { id: 11, 
      src: 'https://media.istockphoto.com/id/168521057/photo/traditional-indian-dancers.webp?a=1&b=1&s=612x612&w=0&k=20&c=RZwmq79SwD_SPaQjIq6RWHyaIJnWQ_nkPwYZPUgeMEU=', 
      title: 'Dance Productions' 
    },
    { id: 12, 
      src: 'https://media.gettyimages.com/id/1137781483/photo/black-male-guitarist-singing-and-playing-acoustic-guitar-on-stage.jpg?s=612x612&w=0&k=20&c=FumC-iuwoUWijPo6wcx4V162mV5PB8g7FQGOR7A1a88=', 
      title: 'Musical Ensembles' 
    },

  ],
};



const ImageCardSection = ({ title }) => {
  const imageRowRef = useRef();

  const scroll = (direction) => {
    if (direction === 'left') {
      imageRowRef.current.scrollBy({ left: -300, behavior: 'smooth' });
    } else {
      imageRowRef.current.scrollBy({ left: 300, behavior: 'smooth' });
    }
  };

  const images = categories[title];

  return (
    <Container>
      <HeaderRow>
        <SectionTitle>{title}</SectionTitle>
        <ViewAllLink to="/images">View All</ViewAllLink>
      </HeaderRow>
      <ImageRowWrapper>
        <ScrollButton direction="left" onClick={() => scroll('left')}>
          &#9664;
        </ScrollButton>
        <ImageRow ref={imageRowRef}>
          {images.map((image) => (
            <ImageCard to={`/image/${image.id}`} key={image.id}>
              <img src={image.src} alt={image.title} />
              <h3>{image.title}</h3>
              {/* Added Explore All Button */}
              <ViewAllButton to={`/explore/${image.id}`}>View More</ViewAllButton>
            </ImageCard>
          ))}
        </ImageRow>
        <ScrollButton direction="right" onClick={() => scroll('right')}>
          &#9654;
        </ScrollButton>
      </ImageRowWrapper>
    </Container>
  );
};


const ImageCardPage = () => {
  const categoryTitles = Object.keys(categories);

  return (
    <>
      {categoryTitles.map((title, index) => (
        <ImageCardSection title={title} key={index} />
      ))}
    </>
  );
};

export default ImageCardPage;

