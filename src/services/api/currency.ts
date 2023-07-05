import {API_URLS} from '../../constants';
import {CoinAPI, CurrencyAPI, WeatherCurrent, WeatherForecast} from '../../types';

const getCurrency = async () => {
  const response = await fetch(API_URLS.CURRENCY, {
    next: {
      revalidate: 3600,
    },
  });
  const data: CurrencyAPI = await response.json();
  const currency = [
    {
      name: 'USD',
      price: 1 / +data.rates.USD,
    },
    {
      name: 'EUR',
      price: 1 / +data.rates.EUR,
    },
    {
      name: 'GEL',
      price: 1 / +data.rates.GEL,
    },
    {
      name: 'UAH',
      price: 1 / +data.rates.UAH,
    },
  ];
  return currency;
};

const getCoin = async () => {
  const COIN_API_KEY = process.env.COIN_API_KEY;
  if (!COIN_API_KEY) throw new Error('Не найден API ключ');

  const response = await fetch(
    API_URLS.COIN +
      new URLSearchParams({
        api_key: COIN_API_KEY,
        symbols: 'BTC,LTC,ETH,BUSD',
        sort: 'rank',
      }),
    {
      next: {
        revalidate: 3600,
      },
    }
  );
  const data: CoinAPI = await response.json();
  const coin = [...data.data.map((item) => ({name: item.symbol, price: item.values.USD.price}))];
  return coin;
};

export {getCurrency, getCoin};
