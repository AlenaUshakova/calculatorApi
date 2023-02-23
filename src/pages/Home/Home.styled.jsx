import styled from 'styled-components';

export const HomeContainer = styled.div`
  display: flex;
  padding: 10px;
  font-size: 30px;
  width: 100%;
  flex-grow: 1;
  overflow: hidden;

`;

export const CalculateWindow = styled.div`
  border-bottom: 2px solid #4d4a4a;
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
  gap: 40px;
  list-style: none;
  margin: 0;
  padding: 40px 40px;
  width: 100%;
`;

export const BtnIten = styled.li`
  flex-basis: calc((100% - 160px) / 5);
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

export const CalculateContainer = styled.div`
  padding: 10px;
`;

export const HistoryContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 500px;
  border-left: 2px solid #4d4a4a;
  padding: 10px;

  button {
    display: inline-flex;
    padding: 0;
    background-color: transparent;
    border: none;
    justify-content: end;
    margin-top: auto;
  }
`;

export const HistoryTitle = styled.p`
  margin: 0;
  text-align: center;
`;

export const HistoryText = styled.p`
  font-size: 20px;
`;