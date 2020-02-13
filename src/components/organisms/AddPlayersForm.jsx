import React, { useState, useEffect } from 'react';
import Button from "../atoms/Button";

const AddPlayersForm = (props) => {
  const [players, setPlayers] = useState([]);
  const [newPlayer, setNewPlayer] = useState('');


  const handleChange = (event) => {
    setNewPlayer(event.target.value);
    console.log("new player:", newPlayer);
  };

  const handleClick = () => {
    console.log('button clicked!');
    setPlayers([players, newPlayer]);
    setNewPlayer('');
    console.log("players:", players);
  };
  return (
  <div>
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
      text="Add player"
    />
  </div>
  );
};

export default AddPlayersForm;
