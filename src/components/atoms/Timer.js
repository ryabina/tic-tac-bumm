import React from 'react';
import styled from 'styled-components';
import generateRandomTime from '../../helpers/timerHelper';

const StyledTimer = styled.p`
 color: "000";
`;

const Timer = () => (
  <StyledTimer>
    { generateRandomTime() }
  </StyledTimer>
);

export default Timer;
