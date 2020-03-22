import React from 'react';
import styled from 'styled-components';
import Player from '../molecules/Player';

const List = styled.span``;

const PlayersList = ({ playersList }) => (
  <List data-testid="test-players-list">
    { playersList.map((player) => (<Player player={player} />))}
  </List>
);

export default PlayersList;
