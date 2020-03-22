import React from 'react';
import styled from 'styled-components';

const PlayerContainer = styled.div``;
const Name = styled.span``;
const Points = styled.span``;

const Player = ({ player }) => (
  <PlayerContainer data-testid="test-player">
    <Name> {player.name} </Name>
    <Points> {player.points} </Points>
  </PlayerContainer>
);

export default Player;
