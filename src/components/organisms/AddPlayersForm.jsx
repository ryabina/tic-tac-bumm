import React from 'react';

const AddPlayersForm = () => (
  <div>
    <input
      id="name"
      name="name"
      placeholder="Enter player's name"
      type="text"
      data-testid="test-player-name"
    />
    <button
      type="button"
      data-testid="test-add-another-player"
    >
      Add player
    </button>
  </div>
);

export default AddPlayersForm;
