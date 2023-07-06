import styled from 'styled-components';

export const Table = styled.table`
  border-collapse: collapse;
  width: 100%;
  height: 100%;
  @media (max-width: 700px) {
    font-size: 14px;
  }
`;
export const Tr = styled.tr``;
export const Th = styled.th`
  border-bottom: 1px solid rgba(0, 0, 0, 0.15);
  padding: 5px 15px;
  &:nth-child(1) {
    width: 100%;
  }

  @media (max-width: 700px) {
    padding: 4px;
  }
`;
export const Td = styled.td`
  border-bottom: 1px solid rgba(0, 0, 0, 0.15);
  padding: 5px 15px;
  min-height: 50px;
  height: 100%;
  &:nth-child(n + 2) {
    text-align: center;
  }
  @media (max-width: 700px) {
    padding: 5px;
  }
`;
export const THead = styled.thead`
  ${Tr} {
    min-height: 70px;
  }
`;
export const TBody = styled.tbody`
  ${Tr} {
    min-height: 50px;
    position: relative;
    transition: height 0.18s;
  }
`;

export const ActionButton = styled.button.attrs({
  type: 'button',
})`
  padding: 5px 5px 0;
  border-radius: 5px;
  transition: background-color 0.2s;
  &:hover {
    background-color: rgba(255, 255, 255, 0.2);
  }
`;
