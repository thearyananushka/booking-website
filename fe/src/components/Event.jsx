

import React, { useState } from 'react';
import styled from 'styled-components';
import FilterPanel from './FilterPanel';
import EventGrid from './EventGrid';
import eventsData from './eventsData';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const EventContainer = styled.div`
  display: flex;
  flex-direction: row;
  padding-top: 20px;
  background: #121212;
`;

const CarouselContainer = styled.div`
  width: 100%;
  height: 400px;
  position: relative;
`;

const Heading = styled.h2`
  font-size: 38px;
  text-align: center;
  color: #fff;
  background: #121212;
  padding: 20px 0;
  position: relative;
  z-index: 2;
`;

const Event = () => {
  const [filters, setFilters] = useState({
    category: [],
    language: [],
    date: [],
    dateRange: false,
    priceMin: '',
    priceMax: '',
  });

  const handleFilterChange = (type, value) => {
    setFilters((prevFilters) => {
      if (type === 'priceMin' || type === 'priceMax') {
        return { ...prevFilters, [type]: value };
      }
      const newValue = prevFilters[type].includes(value)
        ? prevFilters[type].filter((item) => item !== value)
        : [...prevFilters[type], value];

      return { ...prevFilters, [type]: newValue };
    });
  };

  const clearFilters = () => {
    setFilters({
      category: [],
      language: [],
      date: [],
      dateRange: false,
      priceMin: '',
      priceMax: '',
    });
  };

  const filteredEvents = eventsData.filter((event) => {
    const { category, language, date, priceMin, priceMax } = filters;

    if (category.length && !category.includes(event.category)) return false;
    if (language.length && !language.includes(event.language)) return false;
    if (date.length && !date.includes(event.date)) return false;
    if (priceMin && event.price < parseInt(priceMin)) return false;
    if (priceMax && event.price > parseInt(priceMax)) return false;

    return true;
  });

  const images = [
    'https://plus.unsplash.com/premium_photo-1681830630610-9f26c9729b75?w=500&auto=format&fit=crop&q=60',
    'https://images.unsplash.com/photo-1519676867240-f03562f09bf7?w=500&auto=format&fit=crop&q=60',
    'https://images.unsplash.com/photo-1489710437720-ebb67ec84dd2?w=500&auto=format&fit=crop&q=60',
  ];

  const responsive = {
    superLargeDesktop: { breakpoint: { max: 4000, min: 1024 }, items: 1 },
    desktop: { breakpoint: { max: 1024, min: 768 }, items: 1 },
    tablet: { breakpoint: { max: 768, min: 464 }, items: 1 },
    mobile: { breakpoint: { max: 464, min: 0 }, items: 1 },
  };

  return (
    <div>
      <CarouselContainer>
        <Carousel
          responsive={responsive}
          infinite={true}
          autoPlay={true}
          autoPlaySpeed={3000}
          showDots={true}
        >
          {images.map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`Event ${index}`}
              style={{ width: '100%', height: '400px', objectFit: 'cover' }}
            />
          ))}
        </Carousel>
      </CarouselContainer>

      <Heading>Events</Heading>

      <EventContainer>
        <FilterPanel filters={filters} onFilterChange={handleFilterChange} onClearFilters={clearFilters} />
        <EventGrid events={filteredEvents} />
      </EventContainer>
    </div>
  );
};

export default Event;
