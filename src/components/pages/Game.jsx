import React from 'react';
import Modal from 'react-modal';
import styled from 'styled-components';
import Card from '../molecules/Card';
import Timer from '../atoms/Timer';
import AddPlayersForm from '../organisms/AddPlayersForm';

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
  };

  const closeModal = () => {
    setIsOpen(false);
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
      <Modal isOpen={isOpen}>
        <AddPlayersForm closeModal={closeModal} />
      </Modal>
      <div data-testid="test-timer">
        { isStarted && (
        <Timer stopGame={stopGame} />)}
      </div>
    </>
  );
};

export default Game;
