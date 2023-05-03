import styled from 'styled-components';

export const Nav = styled.nav<{isHorizontal: boolean}>`
  display: flex;
  flex-direction: ${({isHorizontal}) => (isHorizontal ? 'row' : 'column')};
  gap: 1em;
`;

export const Span = styled.span<{isActive: boolean}>`
  display: block;
  padding: 5px 5px;
  transition: background-color 0.15s, transform 0.15s, color 0.15s;
  border-bottom: 3px solid transparent;
  border-color: ${({isActive}) => (isActive ? '#078080' : 'transparent')};
  &:hover {
    color: #fff;
    background-color: #078080;
    transform: skewY(3deg);
  }
`;
