import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  gap: 10px;
  height: 100%;
`;
const List = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 5px;
`;

const Item = styled.li``;

export {Container, List, Item};
