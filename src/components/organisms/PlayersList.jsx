import React from 'react';
import styled from 'styled-components'; 
import Player from '../molecules/Player';

const List = styled.div``;

const PlayerList = (props) => {
    const playersList = props;
    
    return(
        <List data-testid='test-players-list'>
            { playersList.map(player => <Player data-testid='test-player' name={player.name} points={player.points} />)}
        </List>
    );
};

export default PlayerList;
