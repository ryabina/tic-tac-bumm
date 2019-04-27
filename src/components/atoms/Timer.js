import React from 'react';
import styled from 'styled-components';

const StyledTimer = styled.p`
 color: "000";
 margin-top: 10px;
`;

const Timer = () => {
  return (
    <StyledTimer> 23:11 </StyledTimer>
  );
};

export default Timer;
