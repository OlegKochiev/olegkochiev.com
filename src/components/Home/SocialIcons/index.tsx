import React, {useContext} from 'react';
import Link from 'next/link';
import {GlobalContext} from '../../../context/GlobalContext';
import styled from 'styled-components';
import {socialIconsDatas} from '../../../data/home';

const Social = styled.span<{iconSrc: string; bgColor: string}>`
  width: 30px;
  height: 30px;
  display: block;
  background-color: ${({theme}) => theme.lineColor};
  mask-size: 30px;
  mask-repeat: no-repeat;
  mask-position: center;
  mask-image: url(${({iconSrc}) => iconSrc});
  transition: background-color 0.1s;

  &:hover {
    transform: scale(1.1);
    background-color: ${({bgColor}) => bgColor};
  }
`;

const Ul = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 15px;
`;

const Li = styled.li`
  width: 25px;
  height: 25px;
`;

const SocialIcons = () => {
  const {theme} = useContext(GlobalContext);
  return (
    <Ul>
      {socialIconsDatas.map(({name, ariaLabel, href, imgSrc, bgColor}) => (
        <Li key={name}>
          <Link href={href} target="_blank">
            <Social iconSrc={imgSrc} bgColor={bgColor} theme={theme} aria-label={ariaLabel} />
          </Link>
        </Li>
      ))}
    </Ul>
  );
};

export default SocialIcons;
