

import React, { useState } from 'react';
import styled from 'styled-components';

const Panel = styled.div`
  width: 18%;
  padding: 25px;
  background-color: #181818;
  color: #fff;
  border-radius: 10px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.3);
  font-family: 'Roboto', sans-serif;
  margin-right: 25px;
  overflow-y: auto;
  position: relative;

  @media (max-width: 768px) {
    width: 100%;
    position: fixed;
    top: 0;
    left: ${(props) => (props.show ? '0' : '-100%')};
    height: 100%;
    transition: left 0.3s ease;
    z-index: 1000;
  }
`;

const FiltersHeading = styled.h3`
  font-size: 30px;
  color: #007BFF;
  margin-bottom: 25px;
  text-align: center;
  letter-spacing: 0.5px;
`;

const HamburgerButton = styled.button`
  position: fixed;
  top: 20px;
  left: 10px;
  background: #fff;
  border: 1px solid #FF0066;
  border-radius: 30%;
  padding:5px;
  cursor: pointer;
  z-index: 1100;

  @media (min-width: 769px) {
    display: none;
  }

  & span {
    display: block;
    width: 30px;
    height: 2px;
    background-color: #FF0066;
    margin: 6px 0;
    transition: 0.4s;
  }
`;

const CloseButton = styled.button`
  position: absolute;
  top: 20px;
  right: 20px;
  background: none;
  border: none;
  font-size: 24px;
  color: #fff;
  cursor: pointer;

  @media (min-width: 769px) {
    display: none;
  }
`;

const FilterGroup = styled.div`
  margin-bottom: 25px;
`;

const FilterTitle = styled.h4`
  font-size: 22px;
  font-weight: bold;
  color: #FF0066;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0;
  transition: color 0.3s ease, transform 0.3s ease;

  &:hover {
    color: #FF3399;
    transform: translateX(4px);
  }
`;

const FilterOptions = styled.div`
  display: ${(props) => (props.show ? 'block' : 'none')};
  padding-left: 10px;
`;

const FilterOption = styled.div`
  margin-bottom: 12px;
  cursor: pointer;
  width: 100%;
  border: 1px solid #FFC266;
  border-radius: 8px;
  text-align: center;
  padding: 10px 0;
  color: ${(props) => (props.selected ? '#0066ff' : '#fff')};
  font-weight: ${(props) => (props.selected ? 'bold' : 'normal')};
  transition: background-color 0.3s ease, color 0.3s ease, transform 0.3s ease;

  &:hover {
    background-color: #0066ff;
    color: #fff;
    transform: translateX(4px);
  }
`;

const ClearButton = styled.button`
  padding: 14px;
  background-color: #FF0000;
  color: #fff;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  width: 100%;
  margin-top: 20px;
  font-size: 18px;
  transition: background-color 0.3s ease, transform 0.3s ease;

  &:hover {
    background-color: #a10000;
    transform: translateY(-2px);
  }
`;

const PriceInput = styled.input`
  width: 48%;
  padding: 8px;
  margin: 5px 0;
  border: 1px solid #ccc;
  border-radius: 8px;
  background-color: #2a2a2a;
  color: #fff;
  font-size: 14px;
  transition: border-color 0.3s ease;

  &:focus {
    border-color: #007BFF;
    background-color: #1e1e1e;
  }
`;

const Divider = styled.hr`
  border: none;
  border-top: 1px solid #444;
  margin: 20px 0;
`;

const FilterPanel = ({ filters, onFilterChange, onClearFilters }) => {
  const [showFilters, setShowFilters] = useState(false);
  const [showCategories, setShowCategories] = useState(true);
  const [showLanguages, setShowLanguages] = useState(true);
  const [showMoreFilters, setShowMoreFilters] = useState(true);
  const [showPrice, setShowPrice] = useState(true);

  const categories = [
    'Comedy Shows', 'Music Shows', 'Workshops', 'Performances', 'Talks', 
    'Screening', 'New Year Parties', 'Spirituality', 'Conferences', 'Award Shows'
  ];

  const languages = ['English', 'Hindi', 'Marathi', 'Tamil', 'French'];

  const moreFilters = [
    'Outdoor Events', 'Fast Filling', 'Kids Allowed', 'Meet & Greet', 
    'Virtual Events', 'Live Streaming', 'DJ Party', 'New Year Parties', 
    'Pocket Friendly', 'Spiritual', 'Star Hotels'
  ];

  const handleClearFilters = () => {
    onClearFilters();
  };

  const isFilterActive = (type, value) => {
    return filters[type] && filters[type].includes(value);
  };

  return (
    <>
      {/* Hamburger Button */}
      <HamburgerButton onClick={() => setShowFilters(!showFilters)}>
        <span />
        <span />
        <span />
      </HamburgerButton>

      {/* Filter Panel */}
      <Panel show={showFilters}>
        <CloseButton onClick={() => setShowFilters(false)}>&times;</CloseButton>
        <FiltersHeading>Filters</FiltersHeading>
        
        {/* Date Filters */}
        <FilterGroup>
          <FilterTitle>Date</FilterTitle>
          <FilterOptions show>
            <FilterOption 
              selected={isFilterActive('date', 'today')} 
              onClick={() => onFilterChange('date', 'today')}>
              Today
            </FilterOption>
            <FilterOption 
              selected={isFilterActive('date', 'tomorrow')} 
              onClick={() => onFilterChange('date', 'tomorrow')}>
              Tomorrow
            </FilterOption>
            <FilterOption 
              selected={isFilterActive('date', 'weekend')} 
              onClick={() => onFilterChange('date', 'weekend')}>
              This Weekend
            </FilterOption>
          </FilterOptions>
        </FilterGroup>

        {/* Category, Language, More Filters */}
        {[{ title: 'Categories', items: categories, type: 'category', show: showCategories, setShow: setShowCategories },
          { title: 'Languages', items: languages, type: 'language', show: showLanguages, setShow: setShowLanguages },
          { title: 'More Filters', items: moreFilters, type: 'moreFilters', show: showMoreFilters, setShow: setShowMoreFilters }
        ].map(({ title, items, type, show, setShow }) => (
          <FilterGroup key={type}>
            <FilterTitle onClick={() => setShow(!show)}>
              {title}
            </FilterTitle>
            <FilterOptions show={show}>
              {items.map((item) => (
                <FilterOption 
                  key={item} 
                  selected={isFilterActive(type, item)} 
                  onClick={() => onFilterChange(type, item)}>
                  {item}
                </FilterOption>
              ))}
            </FilterOptions>
          </FilterGroup>
        ))}

        {/* Price Filters */}
        <FilterGroup>
          <FilterTitle onClick={() => setShowPrice(!showPrice)}>
            Price
          </FilterTitle>
          <FilterOptions show={showPrice}>
            <PriceInput 
              type="number" 
              placeholder="Min" 
              value={filters.priceMin || ''} 
              onChange={(e) => onFilterChange('priceMin', e.target.value)} 
            />
            <PriceInput 
              type="number" 
              placeholder="Max" 
              value={filters.priceMax || ''} 
              onChange={(e) => onFilterChange('priceMax', e.target.value)} 
            />
          </FilterOptions>
        </FilterGroup>

        <ClearButton onClick={handleClearFilters}>Clear All Filters</ClearButton>
      </Panel>
    </>
  );
};

export default FilterPanel;
