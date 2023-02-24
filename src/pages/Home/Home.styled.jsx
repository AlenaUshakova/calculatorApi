import styled from 'styled-components';

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
  font-size: 30px;
  width: 100%;
  flex-grow: 1;
  overflow: hidden;
  @media screen and (min-width: 480px) {
    flex-direction: row;
  }
`;



