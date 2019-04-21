import React from 'react';
import styled from 'styled-components';
import Card from '../atoms/Card';
import Button from '../atoms/Button';
import Timer from '../atoms/Timer';

const Game = () => {
  const cardText = "ДНА";
  return (
    <>
     <Card text={cardText}/>
     <Button buttonText="Start" data-testid="test-button" />
     <Timer data-testid="test-timer" />
    </>
  );
};

export default Game;
