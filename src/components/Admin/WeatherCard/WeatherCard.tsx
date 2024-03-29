import {useEffect, useState} from 'react';
import Image from 'next/image';
import {format} from 'date-fns';
import {ru} from 'date-fns/locale';
import useMatchMedia from '../../../hooks/useMatchMedia';
import {Card, CardBody, CardFooter, CardTitle} from '../../UI/Card/StyledCard';
import {City, Container, Item, List, Temp} from './StyledWeatherCard';
import {Weather} from '../../../types';

export default function WeatherCard() {
  const [weather, setWeather] = useState<Weather | null>(null);
  const {isMobile} = useMatchMedia();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    const doRequest = async () => {
      const response = await fetch('/api/admin/weather');
      const data = await response.json();
      setWeather(data);
    };
    try {
      doRequest();
    } catch (error) {
      console.log(error);
    }
    setIsLoading(false);
  }, []);

  if (isLoading || !weather) {
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
      <CardBody>
        <Container>
          <City>{weather?.current.name}</City>
          <Temp>{weather?.current.temp}°</Temp>
          <Image width={64} height={64} alt="иконка погоды" src={('http:' + weather?.current.icon) as string} />
          <List>
            {weather?.forecast.map(({date, minTemp, maxTemp, icon}) => (
              <Item key={date}>
                <Image width={24} height={24} src={'http:' + icon} alt="иконка дня" />
                <time dateTime={date}>{format(new Date(date), isMobile ? 'ccc' : 'cccc', {locale: ru})}</time>
                <p>{maxTemp} °</p>
                <p>{minTemp} °</p>
              </Item>
            ))}
          </List>
        </Container>
      </CardBody>
      <CardFooter></CardFooter>
    </Card>
  );
}
