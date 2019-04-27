import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Card from '../atoms/Card';
//import Button from '../atoms/Button';
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

const Game = () => {
  const [isStarted, setIsStarted] = useState(false);

  const handleClick = () => {
      setIsStarted(!isStarted);
  };

  const cardText = "ДНА";
  return (
    <>
     <Card text = {cardText}/>
     <Button onClick = {handleClick}
             data-testid="test-button" >
         {isStarted ? "Pause" : "Start"}
     </Button>
     <div data-testid="test-timer">
        { isStarted
          && <Timer />
        }
     </div>

    </>
  );
};

export default Game;
