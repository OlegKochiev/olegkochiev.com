import React from 'react';
import WeatherCard from '../WeatherCard/WeatherCard';
import {Container} from './StyledMainPageContent';
import CurrencyCard from '../CurrencyCard/CurrencyCard';
import QuotesCard from '../QuotesCard/QuotesCard';
import {CardsContainer} from '../../UI/CardsContainer/StyledCardsContainer';

export default function MainPageContent() {
  return (
    <Container>
      <CardsContainer>
        <WeatherCard />
        <CurrencyCard />
        <QuotesCard /> {/**https://api-ninjas.com/api/quotes */}
      </CardsContainer>
    </Container>
  );
}
