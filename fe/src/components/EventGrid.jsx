

import React from 'react';
import styled from 'styled-components';
import EventCard from './EventCard';

const Grid = styled.div`
  flex: 1;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 30px;
  padding: 20px;
`;

const EventGrid = ({ events }) => {
  return (
    <Grid>
      {events.map((event) => (
        <EventCard key={event.id} event={event} />
      ))}
    </Grid>
  );
};

export default EventGrid;
