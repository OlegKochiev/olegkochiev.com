import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';

const Ul = styled.ul`
  display: flex;
  gap: 0.5em;
  background-color: ${({theme}) => theme.theme.backgroundColor};
`;

const Li = styled.li`
  width: 30px;
  height: 30px;
`;

const socialLinks = [
  {
    name: 'github',
    href: 'wwww.github.com/olegkochiev',
    imgSrc: '/github.svg',
  },
  {
    name: 'linkedIn',
    href: 'wwww.linkedin.com',
    imgSrc: '/linkedin.svg',
  },
  {
    name: 'hh.ru',
    href: 'wwww.hh.ru',
    imgSrc: '/hh.ru.svg',
  },
  {
    name: 'vkontakte',
    href: 'wwww.vk.com',
    imgSrc: '/vk.svg',
  },
];

const SocialIcons = () => {
  return (
    <Ul>
      {socialLinks.map((link) => (
        <Li key={link.name}>
          <a href={link.href}>
            <img alt={link.name} src={link.imgSrc} />
          </a>
        </Li>
      ))}
    </Ul>
  );
};

export default SocialIcons;
