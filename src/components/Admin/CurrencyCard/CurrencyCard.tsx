import React, {useEffect, useState} from 'react';
import {Card, CardBody, CardFooter, CardTitle} from '../../UI/Card/StyledCard';
import {Container, Item, List} from './StyledCurrencyCard';
import {Rate} from '../../../types';

export default function CurrencyCard() {
  const [rate, setRate] = useState<Rate | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    const doRequest = async () => {
      const response = await fetch('/api/admin/currency');
      const data = await response.json();
      setRate(data);
    };
    try {
      doRequest();
    } catch (error) {
      console.log(error);
    }
    setIsLoading(false);
  }, []);

  if (isLoading || !rate) {
    return (
      <Card>
        <CardTitle>Курс валют</CardTitle>
        <CardBody>Идет загрузка данных...</CardBody>
      </Card>
    );
  }

  return (
    <Card>
      <CardTitle>Курс валют</CardTitle>
      <CardBody>
        <Container>
          <List>
            Валюты:
            {rate.currency.map((currency) => (
              <Item key={currency.name}>
                {currency.name} - {currency.price.toFixed(2)} ₽
              </Item>
            ))}
          </List>
          <List>
            Криптовалюты:
            {rate.coin.map((currency) => (
              <Item key={currency.name}>
                {currency.name} - {currency.price.toFixed(2)} $
              </Item>
            ))}
          </List>
        </Container>
      </CardBody>
      <CardFooter></CardFooter>
    </Card>
  );
}
