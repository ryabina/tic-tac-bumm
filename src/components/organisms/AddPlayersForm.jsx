import React, { useState } from 'react';
import Button from '../atoms/Button';

const AddPlayersForm = () => {
  const [players, setPlayers] = useState([]);
  const [newPlayer, setNewPlayer] = useState('');


  const handleChange = (event) => {
    setNewPlayer(event.target.value);
  };

  const clearInput = () => {
    document.getElementById('name').value = '';
  };
  const handleClick = () => {
    setPlayers([players, newPlayer]);
    setNewPlayer('');
    clearInput();
  };
  return (
    <div>
      {!(players.length === 0) && (
      <div>
        {' '}
        {players}
        {' '}
      </div>
      )}
      <input
        id="name"
        name="name"
        placeholder="Enter player's name"
        type="text"
        data-testid="test-player-name-input"
        onChange={handleChange}
      />
      <Button
        type="button"
        onClick={handleClick}
        text="Save player"
      />
    </div>
  );
};

export default AddPlayersForm;
