import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Card from '../atoms/Card';
import Button from '../atoms/Button';
import Timer from '../atoms/Timer';

const Game = () => {
  const [isStarted, setIsStarted] = useState(false);



  const cardText = "ДНА";
  return (
    <>
     <Card text={cardText}/>
     <Button buttonText="Start"/>
     <div>
        { isStarted
          && <Timer />
        }
     </div>

    </>
  );
};

export default Game;
