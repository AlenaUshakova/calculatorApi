import styled from 'styled-components';

export const CalculateWindow = styled.div`
  border-bottom: ${props => {
    switch (props.value) {
      case 'dr':
        return '2px solid #b4b6b8';
      case 'cl':
        return '2px solid #792608';
      default:
        return '2px solid #4d4a4a';
    }
  }};
  display: flex;
  padding: 10px;
  width: 100%;

  p {
    margin: 0;
    margin-left: auto;
  }
`;

export const BtnContainer = styled.ul`
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  margin: 0;
  padding: 20px 10px;
  width: 100%;
  gap: 4px;

  @media screen and (min-width: 480px) {
    gap: 4px;
    padding: 20px 10px;
  }
  @media screen and (min-width: 768px) {
    gap: 35px;
    padding: 40px 40px;
  }
  @media screen and (min-width: 1200px) {
    gap: 40px;
  }
`;

export const BtnIten = styled.li`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  flex-basis: calc((100% - 16px) / 5);

  @media screen and (min-width: 480px) {
    flex-basis: calc((100% - 16px) / 5);
  }
  @media screen and (min-width: 768px) {
    flex-basis: calc((100% - 140px) / 5);
  }
  @media screen and (min-width: 1200px) {
    flex-basis: calc((100% - 160px) / 5);
  }
`;

export const CalculateContainer = styled.div`
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

export const ByMe = styled.p`
  @media screen and (max-width: 479px) {
    display: none;
  }
  
  font-size: 15px;
`;
