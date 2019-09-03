import styled from 'styled-components';

export const Button = styled.button`
  background-color: ${(props) => {
    const color = props.active ? '#E9E9E9' : '#FFFFFF';
    return color;
  }};
  border-top-left-radius: ${(props) => {
    const radius = props.first ? '4px' : '0px';
    return radius;
  }};
  border-bottom-left-radius: ${(props) => {
    const radius = props.first ? '4px' : '0px';
    return radius;
  }};
  border-top-right-radius: ${(props) => {
    const radius = props.last ? '4px' : '0px';
    return radius;
  }};
  border-bottom-right-radius: ${(props) => {
    const radius = props.last ? '4px' : '0px';
    return radius;
  }};
  border: 1px solid #D7D7D7;
  box-sizing: border-box;
  cursor: pointer;
  width: 25px;
  height: 25px;
  &:nth-child(n+2) {
    border-left: none;
  }
`;

export const NextButton = styled.button`
  border: 1px solid #D7D7D7;
  box-sizing: border-box;
  background-color: #ffffff;
  border-left: none;
  cursor: pointer;
  height: 25px;
  border-top-right-radius: 4px;
  border-bottom-right-radius: 4px;
`;

export const PrevButton = styled.button`
  border: 1px solid #D7D7D7;
  box-sizing: border-box;
  background-color: #ffffff;
  cursor: pointer;
  height: 25px;
  border-top-left-radius: 4px;
  border-bottom-left-radius: 4px;
`;

export const ButtonsList = styled.div`
  display: flex;
  margin-bottom: 10px;
`;

export const Container = styled.section`
`;
