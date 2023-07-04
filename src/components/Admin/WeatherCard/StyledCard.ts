import styled from 'styled-components';

const City = styled.h3`
  font-size: 24px;
`;
const Temp = styled.p`
  font-size: 32px;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;

const List = styled.ul`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

const Item = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;
`;
export {Container, City, Temp, List, Item};
