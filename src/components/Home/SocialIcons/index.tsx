import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import {socialIconsDatas} from '../../../data/home';

const Ul = styled.ul`
  display: flex;
  gap: 0.5em;
`;

const Li = styled.li`
  width: 25px;
  height: 25px;
`;

const SocialIcons = () => {
  return (
    <Ul>
      {socialIconsDatas.map(({name, href, imgSrc}) => (
        <Li key={name}>
          <Link href={href}>
            <img alt={name} src={imgSrc} />
          </Link>
        </Li>
      ))}
    </Ul>
  );
};

export default SocialIcons;