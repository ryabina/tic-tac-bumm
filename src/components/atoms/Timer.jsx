import React, { useEffect } from 'react';
import styled from 'styled-components';
import generateRandomTime from '../../helpers/timerHelper';

const StyledTimer = styled.p`
 color: "000";
`;

const Timer = (props) => {
  const randomTime = generateRandomTime();
  const { stopGame } = props;

  useEffect(() => {
    const timer = setTimeout(() => {
      stopGame();
    }, randomTime * 1000);
    return () => clearTimeout(timer);
  }, [randomTime, stopGame]);

  return (
    <StyledTimer>
      { randomTime }
    </StyledTimer>
  );
};

export default Timer;
