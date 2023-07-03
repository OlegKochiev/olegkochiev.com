import {useEffect, useState} from 'react';
import {Card, CardBody, CardFooter, CardTitle} from '../../UI/Card/StyledCard';
import {API_URLS} from '../../../constants';

const apiKey = process.env.WEATHER_API_KEY;

export default function WeatherCard() {
  const [weather, setWeather] = useState({
    current: {},
    forecast: {},
  });
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    console.log(process.env);

    try {
      const weatherCurrent = fetch(`${API_URLS.WEATHER.CURRENT}?key=${apiKey}&q=London&aqi=no`);
      const weatherForecast = fetch(`${API_URLS.WEATHER.FORECAST}?key=${apiKey}&q=London&aqi=no`);
    } catch (error) {
      console.log(error);
    }
  }, []);

  if (isLoading) {
    return (
      <Card>
        <CardTitle>Погода</CardTitle>
        <CardBody>Идет загрузка данных...</CardBody>
      </Card>
    );
  }
  return (
    <Card>
      <CardTitle>Погода</CardTitle>
      <CardBody></CardBody>
      <CardFooter></CardFooter>
    </Card>
  );
}
