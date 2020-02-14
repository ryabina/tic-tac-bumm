import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { fireEvent, render } from '@testing-library/react';
import AddPlayersForm from './AddPlayersForm';

describe('Add players form', () => {
  test('should have input and add player button', () => {
    // Arrange
    const expectedAddAnotherPlayerText = 'Save player';
    // Act
    const { getByTestId, queryByText } = render(<AddPlayersForm />);
    const playerNameInput = getByTestId('test-player-name-input');
    const addAnotherPlayer = queryByText(expectedAddAnotherPlayerText);
    // Assert
    expect(playerNameInput).toBeTruthy();
    expect(addAnotherPlayer).not.toBeNull();
  });
  test('should add player happy path', () => {
    // Arrange
    const expectedName = 'Blahblah';
    const expectedAddAnotherPlayerText = 'Save player';
    const { getByTestId, queryByText } = render(<AddPlayersForm />);
    const playerNameInput = getByTestId('test-player-name-input');
    const addAnotherPlayer = queryByText(expectedAddAnotherPlayerText);
    fireEvent.change(playerNameInput, { target: { value: expectedName } });
    // Act
    fireEvent.click(addAnotherPlayer);
    const playerName = queryByText(expectedName);
    // Assert
    expect(playerName).not.toBeNull();
    expect(playerNameInput.value).toBe('');
  });
});
