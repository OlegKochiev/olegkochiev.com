import {API_URLS} from '../../constants';
import {WeatherCurrent, WeatherForecast} from '../../types';

const getWeatherCurrent = async (city: string) => {
  const WEATHER_API_KEY = process.env.WEATHER_API_KEY;
  if (!WEATHER_API_KEY) throw new Error('Не найден API ключ');

  const response = await fetch(
    API_URLS.WEATHER.CURRENT +
      new URLSearchParams({
        key: WEATHER_API_KEY,
        q: city,
        aqi: 'no',
      }),
    {
      next: {
        revalidate: 60,
      },
    }
  );
  const data: WeatherCurrent = await response.json();
  const weather = {
    name: data.location.name,
    temp: data.current.temp_c,
    icon: data.current.condition.icon,
  };
  return weather;
};

const getWeatherForecast = async (city: string, days: number) => {
  const WEATHER_API_KEY = process.env.WEATHER_API_KEY;
  if (!WEATHER_API_KEY) throw new Error('Не найден API ключ');
  const response = await fetch(
    API_URLS.WEATHER.FORECAST +
      new URLSearchParams({
        key: WEATHER_API_KEY,
        q: city,
        aqi: 'no',
        alerts: 'no',
        days: days.toString(),
      }),
    {
      next: {
        revalidate: 3600,
      },
    }
  );
  const data: WeatherForecast = await response.json();
  const weather = data.forecast.forecastday.map((foreday) => ({
    date: foreday.date,
    maxTemp: foreday.day.maxtemp_c,
    minTemp: foreday.day.mintemp_c,
    avgTemp: foreday.day.avgtemp_c,
    icon: foreday.day.condition.icon,
  }));
  return weather;
};

export {getWeatherCurrent, getWeatherForecast};
