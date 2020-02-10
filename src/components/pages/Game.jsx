import React from 'react';
import Modal from 'react-modal';
import styled from 'styled-components';
import Card from '../atoms/Card';
import Timer from '../atoms/Timer';

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
  const [isStarted, setIsStarted] = React.useState(false);
  const [isOpen, setIsOpen] = React.useState(false);
  const handleClick = () => {
    setIsStarted(!isStarted);
  };

  const stopGame = () => {
    setIsStarted(false);
  };

  const openModal = () => {
    setIsOpen(true);
    console.log(isOpen);
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
      <Button
        type="button"
        onClick={() => openModal()}
        data-testid="test-add-players-button"
      >
        Add players
      </Button>
      <Modal data-testid="test-modal" />
      <div data-testid="test-timer">
        { isStarted && (
        <Timer stopGame={stopGame} />)}
      </div>
    </>
  );
};

export default Game;
