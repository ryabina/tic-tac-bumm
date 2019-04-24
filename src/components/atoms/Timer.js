import React from 'react';
import styled from 'styled-components';

const StyledTimer = styled.p`
 color: "000";
 margin-top: 20px;
`;

const Timer = () => {
  return (
    <StyledTimer data-testid="test-timer"> 23:11 </StyledTimer>
  );
};

export default Timer;
