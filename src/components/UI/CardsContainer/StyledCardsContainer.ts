import styled from 'styled-components';

const CardsContainer = styled.div`
  display: grid;
  justify-content: center;
  grid-template-columns: repeat(3, minmax(auto, 600px));
  grid-auto-rows: minmax(250px, auto);
  grid-gap: 20px;
  @media (max-width: 1400px) {
    grid-template-columns: repeat(2, minmax(auto, 500px));
  }
  @media (max-width: 900px) {
    grid-template-columns: repeat(1, minmax(auto, 500px));
  }
`;

export {CardsContainer};
