import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Container = styled.div`
  margin: 0 auto;
  background-color: ${props => (props.value === 'dr' ? '#424141' : 'white')};
  height: 100vh;
  display: flex;
  flex-direction: column;
  border: 1px dotted black;
  color: ${props => {
    switch (props.value) {
      case 'dr':
        return 'white';
      case 'cl':
        return '#792608';
      default:
        return 'black';
    }
  }};

  @media screen and (min-width: 320px) {
    width: 320px;
    font-size: 10px;
  }
  @media screen and (min-width: 480px) {
    width: 480px;
    font-size: 15px;
  }
  @media screen and (min-width: 768px) {
    width: 768px;
  }
  @media screen and (min-width: 1200px) {
    width: 1200px;
  }
`;

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 12px;
  padding: 8px 16px;
  position: sticky;
  top: 0;
  left: 0;
  margin: 0 auto;
  z-index: 10;
  width: 100%;
  background-color: ${props => {
    switch (props.value) {
      case 'dr':
        return '#b6b8b9';
      case 'cl':
        return 'orangered';
      default:
        return '#4d4a4a';
    }
  }};

  > nav {
    display: flex;
    gap: 20px;
  }

  p {
    color: white;
  }
`;

export const Link = styled(NavLink)`
  padding: 8px 0px;
  border-radius: 4px;
  text-decoration: none;
  color: ${props => (props.value === 'lt' ? '#b9b3b3' : 'black')};
  position: relative;
  
  transition: color linear 250ms, background-color linear 250ms;

  &.active {
    color: white;
    &::after {
      position: absolute;
      bottom: 5px;
      left: 0;
      content: '';
      display: block;
      width: 100%;
      height: 2px;
      background-color: #ffffff;
      border-radius: 2px;
    }
  }

  :hover:not(.active),
  :focus-visible:not(.active) {
    color: white;
  }
`;
