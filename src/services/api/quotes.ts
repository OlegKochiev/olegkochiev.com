import {API_URLS} from '../../constants';
import {QuoteAPI} from '../../types';

const getQuotes = async (category: string) => {
  const QUOTES_API_KEY = process.env.QUOTES_API_KEY;
  if (!QUOTES_API_KEY) throw new Error('Не найден API ключ');

  const response = await fetch(
    API_URLS.QUOTES +
      new URLSearchParams({
        category: category,
      }),
    {
      next: {
        revalidate: 3600 * 24,
      },
      headers: {
        'x-api-key': QUOTES_API_KEY,
      },
    }
  );

  const data: Array<QuoteAPI> = await response.json();
  const quotes = data[0];
  return quotes;
};

export {getQuotes};
