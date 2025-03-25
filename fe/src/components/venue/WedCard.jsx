
import React from "react";
import styled from "styled-components";


const venuesData = [
    {
      id: 1,
      name: "The Vishwanath Farms",
      rating: 4.4,
      reviews: 17,
      location: "H54V+RV9, Bairiya Chakbairiya Rd, Bairiya, Paijawa, Patna, Bihar 800007",
      type: "Banquet Halls, Marriage Garden",
      vegPrice: "₹1,200",
      nonVegPrice: "₹1,400",
      capacity: "100-10000 pax",
      rooms: "50 Rooms",
      image:
        "https://www.udaipurweddings.com/s/img/wp-content/uploads/2017/11/1-17.jpg",
      features: [
        "Indoor",
        "Outdoor",
        "Poolside",
        "Inhouse catering only",
        "Inhouse decor",
      ],
      badge: "Handpicked",
      gallery: [
        "https://cdn.venuelook.com/uploads/space_28791/1640095252_595x400.png",
        "https://cdn.venuelook.com/uploads/space_28791/1640095275_595x400.png",
        "https://cdn.venuelook.com/uploads/space_28791/1640082224_595x400.png",
        "https://media.istockphoto.com/id/1340253645/photo/shot-of-an-elegantly-decorated-table-at-a-wedding-reception.webp?a=1&b=1&s=612x612&w=0&k=20&c=5zGAiaSBUwWiQ7nUSLga6izuLcgvcSNSKzicGFQhpF4=",
        "https://media.istockphoto.com/id/1857340134/photo/wedding-venue-wedding-organization-celebration-and-social-event-wedding-ceremony.webp?a=1&b=1&s=612x612&w=0&k=20&c=uM4UHZOdzMCdq-b6xaMXDGfx-1vz1xgBCm1GG9OkQko=",

        "https://images.pexels.com/photos/169189/pexels-photo-169189.jpeg?auto=compress&cs=tinysrgb&w=600",

        "https://images.pexels.com/photos/169190/pexels-photo-169190.jpeg?auto=compress&cs=tinysrgb&w=600",

        "https://images.pexels.com/photos/29470584/pexels-photo-29470584/free-photo-of-elegant-indian-wedding-couple-in-traditional-attire.jpeg?auto=compress&cs=tinysrgb&w=600",
      ],
      description:
        "The Vishwanath Farms is a premium banquet venue located in the heart of Patna. Offering a luxurious combination of modern design and traditional decor, the venue is ideal for weddings, receptions, and social gatherings. With professional staff and exceptional services, we ensure your event is memorable and stress-free.",
      details: {
        highlights: [
          "Located 15 km from Patna Railway Station.",
          "Ample parking space for over 200 vehicles.",
          "Inhouse catering with customizable menu options.",
          "Equipped with state-of-the-art sound and lighting systems.",
        ],
        services: [
          "Photographers",
          "Caterers",
          "Decorators",
          "DJs",
          "Makeup Artists",
        ],
        
      },
      restaurant: {
        menu: "Both veg and non-veg options available with North Indian, South Indian, and Continental cuisines.",
        seating: "Separate dining area for up to 500 guests.",
        specialtyDishes: ["Paneer Butter Masala", "Mutton Biryani", "Gulab Jamun"],
        additionalServices: [
          "Dedicated food counters for live cooking.",
          "Experienced chefs for custom menu planning.",
        ],
      },
    },
  ];

// Styled Components
const Container = styled.div`
  font-family: Arial, sans-serif;
  max-width: 1300px;
  margin: auto;
  background: #fff;
  border: 1px solid #ddd;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
  display: flex;
  flex-direction: column;     //#ff4081
  //  background-image : url("https://images.pexels.com/photos/586744/pexels-photo-586744.jpeg?auto=compress&cs=tinysrgb&w=600");
`;

const HeaderImage = styled.div`
  height: 400px;
  margin-top: 10px;
  box-shadow: 0 2px 2px 2px #ff4081;
  background-image: url(${(props) => props.image});
  background-size: cover;
  background-position: center;
  border-bottom: 1px solid #ddd;
`;

const ContentWrapper = styled.div`
  display: flex;
  padding: 20px;
  gap: 20px;
`;

const LeftSection = styled.div`
  flex: 2;
`;

const RightSection = styled.div`
  flex: 1;
  padding: 20px;
  border-left: 1px solid #ddd;
  background-color: #f9f9f9;
  border-radius: 10px;
`;


const TitleSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 40px;
  padding: 20px;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
`;

const Title = styled.h1`
  font-size: 2.5rem;
  color: #ff4081;
  font-weight: bold;
  margin-bottom: 10px;
  line-height: 1.3;
  letter-spacing: 1px;
  text-transform: capitalize;
  text-align: left;

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const Rating = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
  margin-top: 10px;
  text-align: left;

  span {
    background: #4caf50;
    color: #fff;
    padding: 8px 16px;
    border-radius: 25px;
    font-size: 1rem;
    font-weight: 600;
    text-transform: capitalize;
    box-shadow: 0 3px 8px rgba(0, 0, 0, 0.2);
    transition: transform 0.3s ease-in-out;

    &:hover {
      transform: scale(1.05);
    }
  }
`;

const Badge = styled.span`
  background: #ff4081;
  color: white;
  padding: 5px 12px;
  border-radius: 20px;
  font-size: 14px;
  font-weight: 600;
  margin-left: 10px;
  text-transform: uppercase;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.15);
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: scale(1.1);
  }
`;

const AboutSection = styled.div`
  margin: 40px 20px;
  padding: 30px;
  border: none;
  border-radius: 15px;
  background: linear-gradient(135deg, #f3f4f6, #ffffff);
  box-shadow: 0 6px 15px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease-in-out;

  h2 {
    font-size: 26px;
    font-weight: bold;
    color: #333;
    border-bottom: 3px solid #ff7f50;
    display: inline-block;
    margin-bottom: 15px;
  }

  p {
    font-size: 16px;
    line-height: 1.6;
    color: #555;
    margin: 15px 0;
  }

  h3 {
    font-size: 22px;
    margin-top: 20px;
    color: #444;
    font-weight: 600;
  }

  h4 {
    font-size: 18px;
    margin-top: 15px;
    font-weight: 500;
    color: #777;
  }
`;

const HighlightsList = styled.ul`
  margin: 20px 0;
  padding-left: 20px;

  li {
    font-size: 16px;
    color: #444;
    line-height: 1.6;
    margin-bottom: 10px;
    position: relative;

    &::before {
      content: "🌟";
      font-size: 18px;
      color: #ff7f50;
      position: absolute;
      left: -25px;
      top: 0;
    }
  }
`;

const RestaurantSection = styled.div`
  margin-top: 30px;

  p {
    font-size: 16px;
    color: #666;
    margin: 10px 0;
  }

  ul {
    margin: 10px 0;
    padding-left: 20px;

    li {
      font-size: 15px;
      color: #444;
      line-height: 1.5;
      margin-bottom: 8px;
      position: relative;

      &::before {
        content: "🍴";
        font-size: 18px;
        color: #ff6347;
        position: absolute;
        left: -25px;
        top: 0;
      }
    }
  }

  h4 {
    color: #333;
    font-weight: 600;
    margin-top: 15px;
  }
`;


const PricingSection = styled.div`
  margin-bottom: 20px;
  font-size: 16px;

  p {
    margin: 0;
  }

  .price {
    display: flex;
    justify-content: space-between;
    margin: 10px 0;
  }

  .veg {
    color: #4caf50;
  }

  .non-veg {
    color: #f44336;
  }
`;

const FormSection = styled.div`
  margin-top: 20px;

  h3 {
    font-size: 18px;
    margin-bottom: 10px;
  }

  input,
  select {
    width: 100%;
    padding: 10px;
    margin-bottom: 10px;
    border: 1px solid #ddd;
    border-radius: 5px;
  }

  button {
    width: 100%;
    padding: 10px;
    background: #ff4081;
    color: white;
    border: none;
    border-radius: 5px;
    font-size: 16px;
    cursor: pointer;
  }

  button:hover {
    background: #e91e63;
  }
`;

const GalleryContainer = styled.div`
  margin-top: 40px;
  text-align: center;

  h1 {
    font-size: 2rem;
    color: #ff6347;
    margin-bottom: 30px;
    font-weight: bold;
    text-transform: uppercase;
    letter-spacing: 2px;
    border-bottom: 3px solid #ff6347;
    display: inline-block;
    padding-bottom: 10px;
  }
`;

const GallerySection = styled.div`
  margin-top: 20px;
  padding: 20px;
  border-radius: 10px;
  background: linear-gradient(135deg, #fff, #f7f7f7);
  box-shadow: 0 6px 15px rgba(0, 0, 0, 0.1);

 
  h2 {
    font-size: 2.5rem;
    color: #ff6347;
    margin-bottom: 30px;
    font-weight: bold;
    text-transform: uppercase;
    letter-spacing: 2px;
    border-bottom: 3px solid #ff6347;
    display: inline-block;
    padding-bottom: 10px;
  }

  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;

  img {
    width: 100%;
    height: 250px;
    object-fit: cover;
    border-radius: 10px;
    cursor: pointer;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    transition: all 0.3s ease-in-out;

    &:hover {
      transform: scale(1.05);
      box-shadow: 0 6px 15px rgba(0, 0, 0, 0.3);
      filter: brightness(1.1);
    }
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    img {
      height: 200px;
    }
  }
`;



// React Component

const WedCard = () => {
    const venue = venuesData[0]; 
  
    return (
      <Container>
        {/* Header Image */}
        <HeaderImage image={venue.image} />
  
        {/* Content Wrapper */}
        <ContentWrapper>
          {/* Left Section */}
          <LeftSection>
            {/* Title Section */}
            <TitleSection>
              <div>
                <Title>{venue.name}</Title>
                <div>{venue.location}</div>
              </div>
              <Rating>
                <span>🌟{venue.rating}</span>
                <span>({venue.reviews} reviews)</span>
                {venue.badge && <Badge>{venue.badge}</Badge>}
              </Rating>
            </TitleSection>
  
            {/* About Section */}
            <AboutSection>
              <h2>About the Venue</h2>
              <p>{venue.description}</p>
              <h3>Highlights:</h3>
              <HighlightsList>
                {venue.details.highlights.map((highlight, index) => (
                  <li key={index}>{highlight}</li>
                ))}
              </HighlightsList>
  
              <RestaurantSection>
                <h3>Restaurant Features</h3>
                <p>{venue.restaurant.menu}</p>
                <p>Seating: {venue.restaurant.seating}</p>
  
                <h4>Specialty Dishes:</h4>
                <ul>
                  {venue.restaurant.specialtyDishes.map((dish, index) => (
                    <li key={index}>{dish}</li>
                  ))}
                </ul>
  
                <h4>Additional Services:</h4>
                <ul>
                  {venue.restaurant.additionalServices.map((service, index) => (
                    <li key={index}>{service}</li>
                  ))}
                </ul>
              </RestaurantSection>
            </AboutSection>
          </LeftSection>
  
          {/* Right Section */}
          <RightSection>

            <PricingSection>
            <h3>Starting Price</h3>
            <div className="price">
              <p className="veg">Veg Price:</p>
              <p>{venue.vegPrice}</p>
            </div>
            <div className="price">
              <p className="non-veg">Non-Veg Price:</p>
              <p>{venue.nonVegPrice}</p>
            </div>
          </PricingSection>

            {/* Form Section */}
          <FormSection>
            <h3>Contact Venue</h3>
            <input type="text" placeholder="Full Name" />
            <input type="email" placeholder="Email Address" />
            <input type="tel" placeholder="Phone Number" />
            <select>
              <option value="">Function Type</option>
              <option value="wedding">Pre-Wedding</option>
              <option value="wedding">Wedding</option>
              <option value="reception">Reception</option>
              <option value="birthday">Birthday Party</option>
              <option value="birthday">Others</option>
            </select>
            <input type="number" placeholder="Number of Guests" />
            <button>Check Availability</button>
          </FormSection>
          </RightSection>
        </ContentWrapper>
  

<GalleryContainer>
  <h1>Explore Our Stunning Venue Gallery</h1>
  <GallerySection>
    {/* <h2>Gallery</h2> */}
    {venue.gallery.map((image, index) => (
      <img key={index} src={image} alt={`Gallery ${index}`} />
    ))}
  </GallerySection>
</GalleryContainer>

      </Container>
    );
  };
  
  export default WedCard;
  
