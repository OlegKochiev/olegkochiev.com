import styled from 'styled-components';
export const Card = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 30px;
  border: 1px solid rgba(255, 255, 255, 0.25);
  border-radius: 15px;
  background-color: rgba(255, 255, 255, 0.1);
  box-shadow: 0 0 10px 1px rgba(0, 0, 0, 0.25);
  backdrop-filter: blur(8px);
`;

export const CardTitle = styled.h3`
  align-self: center;
  font-size: 18px;
`;
export const CardBody = styled.div`
  margin-top: 10px;
`;
export const CardFooter = styled.div`
  margin-top: 10px;
  align-self: end;
`;
export const List = styled.ul``;
export const Item = styled.li`
  padding: 4px;
  transition: border-color 0.1s;
  border-bottom: 2px solid transparent;
  &:hover {
    border-color: rgba(0, 0, 0, 0.2);
  }
`;
export default {
  Card,
  CardBody,
  CardFooter,
  CardTitle,
  List,
  Item,
};
