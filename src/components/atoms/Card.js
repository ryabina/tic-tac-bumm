import React from 'react';
import styled from 'styled-components';

const GameCard = styled.div`
  background-color: #2f2f2f;
  color: #f6f6f6;
  width: 400px;
  height: 200px;
  line-height: 50px;
  font-weight: 500;
  line-height: 50px;
  display: flex;
  justify-content: center;
  flex-direction: column; 
`;

const Card = (props) => {
  const { text } = props;
  return (
    <GameCard>{ text }</GameCard>
  );
};

export default Card;
