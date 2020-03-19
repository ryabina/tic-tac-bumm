import React from 'react';
import styled from 'styled-components'; 
import Player from '../molecules/Player';

const List = styled.div``;

const PlayersList = ({ playersList }) => (
    <List data-testid='test-players-list'>
      { playersList.map(player => (
        <Player 
          data-testid='test-player' 
          name={player.name} 
          points={player.points} 
        />
      ))}
    </List>
  );

export default PlayersList;
