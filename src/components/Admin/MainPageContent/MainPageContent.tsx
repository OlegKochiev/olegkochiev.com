import React from 'react';
import WeatherCard from '../WeatherCard/WeatherCard';
import {Container} from './StyledMainPageContent';
import CurrencyCard from '../CurrencyCard/CurrencyCard';
import QuotesCard from '../QuotesCard/QuotesCard';

export default function MainPageContent() {
  return (
    <Container>
      <WeatherCard /> {/**http://api.weatherapi.com/v1 */}
      <CurrencyCard /> {/**https://www.cbr.ru/lk_uio/guide/rest_api/ */}
      <QuotesCard /> {/**https://api-ninjas.com/api/quotes */}
    </Container>
  );
}
