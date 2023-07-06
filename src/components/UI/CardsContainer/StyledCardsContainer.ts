import styled from 'styled-components';

const CardsContainer = styled.div`
  display: grid;
  justify-content: center;
  grid-template-columns: repeat(3, minmax(auto, 1fr));
  grid-auto-rows: minmax(250px, auto);
  width: 100%;
  grid-gap: 20px;
  @media (max-width: 1400px) {
    grid-template-columns: repeat(2, minmax(auto, 500px));
  }
  @media (max-width: 1200px) {
    grid-template-columns: repeat(1, minmax(auto, 500px));
  }
`;

export {CardsContainer};
