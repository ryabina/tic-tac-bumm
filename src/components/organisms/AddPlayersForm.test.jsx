import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import {fireEvent, render} from '@testing-library/react';
import AddPlayersForm from './AddPlayersForm';

describe('Add players form', () => {
  test('should have input and add player button', () => {
    // Arrange
    const expectedAddAnotherPlayerText = 'Add player';
    // Act
    const { getByTestId } = render(<AddPlayersForm />);
    const playerNameInput = getByTestId('test-player-name-input');
    const addAnotherPlayer = getByTestId('test-add-another-player');
    // Assert
    expect(playerNameInput).toBeTruthy();
    expect(addAnotherPlayer).toHaveTextContent(expectedAddAnotherPlayerText);
  });
  test('should add player happy path', () => {
    // Arrange
    const expectedName = 'Blahblah';
    const { getByTestId, queryByText } = render(<AddPlayersForm />);
    const playerNameInput = getByTestId('test-player-name-input');
    const addAnotherPlayer = getByTestId('test-add-another-player');
    fireEvent.change(playerNameInput, {target: { value: expectedName }})
    // Act
    fireEvent.click(addAnotherPlayer);
    const playerName = queryByText(expectedName);
    // Assert
    expect(playerName).toHaveTextContent(expectedName);
    expect(playerNameInput).toHaveTextContent('');
  });
});
