import styled from 'styled-components';

export const LinkContainer = styled.span`
  transition: border-color 0.2s;
  border-bottom: 1px solid transparent;
  &:hover {
    border-bottom: 1px solid rgba(0, 0, 0, 0.3);
  }
`;
