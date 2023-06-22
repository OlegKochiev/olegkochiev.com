import React, {ReactNode} from 'react';
import {Title} from './StyledPageTitle';

export default function PageTitle({children}: {children: ReactNode}) {
  return <Title>{children}</Title>;
}
