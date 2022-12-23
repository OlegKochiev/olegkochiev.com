import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import {socialIconsDatas} from '../../../data/home';

const Social = styled.span`
  width: 30px;
  height: 30px;
  display: block;
  background-color: #078080;
  mask-size: 30px;
  mask-repeat: no-repeat;
  mask-position: center;
  mask-image: url(${({iconSrc}) => iconSrc});
  transition: background-color 0.25s;
  &:hover {
    background-color: ${({bgColor}) => bgColor};
  }
`;

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
      {socialIconsDatas.map(({name, href, imgSrc, bgColor}) => (
        <Li key={name}>
          <Link href={href}>
            <Social iconSrc={imgSrc} bgColor={bgColor} />
          </Link>
        </Li>
      ))}
    </Ul>
  );
};

export default SocialIcons;
