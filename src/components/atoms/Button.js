import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  background-color: #fabe4c;
  color: #ea4335;
  border-radius: 100px;
  height: 40px;
  line-height: 40px;
  padding: 0 20px;
  font-size: 16px;
  font-weight: bold;
`;

const Button = (props) => {
  const { buttonText } = props;
  return (
    <StyledButton data-testid="test-button" >{ buttonText }</StyledButton>
  );
};

export default Button;
