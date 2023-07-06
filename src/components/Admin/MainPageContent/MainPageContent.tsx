import React from 'react';
import WeatherCard from '../WeatherCard/WeatherCard';
import CurrencyCard from '../CurrencyCard/CurrencyCard';
import QuotesCard from '../QuotesCard/QuotesCard';
import {CardsContainer} from '../../UI/CardsContainer/StyledCardsContainer';

export default function MainPageContent() {
  return (
    <CardsContainer>
      <WeatherCard />
      <CurrencyCard />
      <QuotesCard />
    </CardsContainer>
  );
}
