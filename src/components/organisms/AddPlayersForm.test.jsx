import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';
import AddPlayersForm from './AddPlayersForm';

describe('Add players form', () => {
  test('should have input and add player button', () => {
    // Arrange
    const expectedAddAnotherPlayerText = 'Add player';
    // Act
    const { getByTestId } = render(<AddPlayersForm />);
    const playerName = getByTestId('test-player-name');
    const addAnotherPlayer = getByTestId('test-add-another-player');
    // Assert
    expect(playerName).toBeTruthy();
    expect(addAnotherPlayer).toHaveTextContent(expectedAddAnotherPlayerText);
  });
});
