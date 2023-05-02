import React from 'react';
import {Li, Span, Title, Ul} from './StyledContacts';

export default function Contacts() {
  return (
    <Ul>
      <Title>Контакты:</Title>
      <Li>
        <a href="tel:+79969418419">
          <Span>phone</Span>: +79969418419
        </a>
      </Li>
      <Li>
        <a href="mailto:olegkochiev19@gmail.com">
          <Span>gmail</Span>: olegkochiev19@gmail.com
        </a>
      </Li>
      <Li>
        <a href="https://t.me/olegkochiev">
          <Span>telegram</Span>: olegkochiev
        </a>
      </Li>
    </Ul>
  );
}
