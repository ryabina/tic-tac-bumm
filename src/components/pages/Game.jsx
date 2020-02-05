import React, { useState } from 'react';
import styled from 'styled-components';
import Card from '../atoms/Card';
import Timer from '../atoms/Timer';
// import generateRandomTime from '../../helpers/timerHelper';

const Button = styled.button`
  margin-top: 10px;
  background-color: #fabe4c;
  color: #ea4335;
  border-radius: 100px;
  height: 40px;
  line-height: 40px;
  padding: 0 20px;
  font-size: 16px;
  font-weight: bold;
`;

// const Timer = styled.p`
// color: "000";
// `;

const Game = () => {
  const [isStarted, setIsStarted] = useState(false);

  const handleClick = () => {
    setIsStarted(!isStarted);
  };

  const stopGame = () => {
    setIsStarted(false);
  };

  const cardText = 'ДНА';
  return (
    <>
      <Card text={cardText} />
      <Button
        onClick={handleClick}
        data-testid="test-button"
      >
        {isStarted ? 'Pause' : 'Start'}
      </Button>
      <div data-testid="test-timer">
        { isStarted && (
        <Timer stopGame={stopGame}/>)}
      </div>
    </>
  );
};

export default Game;
