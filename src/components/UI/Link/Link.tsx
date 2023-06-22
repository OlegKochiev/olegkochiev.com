import React, {LinkHTMLAttributes, ReactNode} from 'react';
import Link from 'next/link';
import {LinkContainer} from './StyledLink';

interface Props extends LinkHTMLAttributes<HTMLAnchorElement> {
  children: ReactNode;
  href: string;
}

export default function CustomLink({children, ...rest}: Props) {
  return (
    <LinkContainer>
      <Link {...rest}>{children}</Link>
    </LinkContainer>
  );
}
