import React, {useEffect, useState} from 'react';
import {Card, CardBody, CardFooter, CardTitle} from '../../UI/Card/StyledCard';
import {Quote} from '../../../types';
import {QuoteAuthor, QuoteText} from './StyledQuotesCard';

export default function QuotesCard() {
  const [quote, setQuote] = useState<Quote | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    const doRequest = async () => {
      const response = await fetch('/api/admin/quotes');
      const data = await response.json();
      setQuote(data);
    };
    try {
      doRequest();
    } catch (error) {
      console.log(error);
    }
    setIsLoading(false);
  }, []);
  console.log(quote);

  if (isLoading || !quote) {
    return (
      <Card>
        <CardTitle>Цитаты великих людей</CardTitle>
        <CardBody>Идет загрузка данных...</CardBody>
      </Card>
    );
  }

  return (
    <Card>
      <CardTitle>Цитаты великих людей</CardTitle>
      <CardBody>
        <QuoteText>{quote.quote}</QuoteText>
      </CardBody>
      <CardFooter>
        <QuoteAuthor>{quote.author}</QuoteAuthor>
      </CardFooter>
    </Card>
  );
}
