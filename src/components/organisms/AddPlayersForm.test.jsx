import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import {fireEvent, render} from '@testing-library/react';
import AddPlayersForm from './AddPlayersForm';

describe('Add players form', () => {
  const expectedSavePlayerText = 'Save player';
  const expectedAddAnotherPlayerText = 'Add another player';
  test('should have input and add player button', () => {
    // Arrange
    // Act
    const { getByTestId, queryByText } = render(<AddPlayersForm />);
    const playerNameInput = getByTestId('test-player-name-input');
    const savePlayer = queryByText(expectedSavePlayerText);
    // Assert
    expect(playerNameInput).toBeTruthy();
    expect(savePlayer).not.toBeNull();
  });
  test('should add player happy path', () => {
    // Arrange
    const expectedName = 'Blahblah';
    const { getByTestId, queryByText } = render(<AddPlayersForm />);
    const playerNameInput = getByTestId('test-player-name-input');
    const savePlayer = queryByText(expectedSavePlayerText);

    fireEvent.change(playerNameInput, { target: { value: expectedName } });
    // Act
    fireEvent.click(savePlayer);
    const playerName = queryByText(expectedName);
    const addAnotherPlayer = queryByText(expectedAddAnotherPlayerText);
    // Assert
    expect(playerName).not.toBeNull();
    expect(playerNameInput).not.toBeInTheDocument();
    expect(playerNameInput.value).toBe('');
    expect(savePlayer).not.toBeInTheDocument();
    expect(addAnotherPlayer).not.toBeNull();
  });

  test('should not save empty player', () => {
    // Arrange
    const { queryByText } = render(<AddPlayersForm />);
    const savePlayer = queryByText(expectedSavePlayerText);
    // Act
    fireEvent.click(savePlayer);
    const addAnotherPlayer = queryByText(expectedAddAnotherPlayerText);
    // Assert
    expect(savePlayer).toBeDisabled();
    expect(addAnotherPlayer).toBe(null);
  });

  test('should open open input and save button on Add Another Player button', () => {
    // Arrange
    const expectedName = 'Blahblah';
    const { getByTestId, queryByText } = render(<AddPlayersForm />);
    const playerNameInput = getByTestId('test-player-name-input');
    const savePlayer = queryByText(expectedSavePlayerText);
    fireEvent.change(playerNameInput, {target: {value: expectedName}});
    fireEvent.click(savePlayer);

    const addAnotherPlayer = queryByText('Add another player');
    // Act
    fireEvent.click(addAnotherPlayer);
    const savePlayerAfterClick = queryByText(expectedSavePlayerText);
    const playerNameAfterClick = getByTestId('test-player-name-input');
    // Assert
    expect(savePlayerAfterClick).toBeInTheDocument();
    expect(playerNameAfterClick).toBeInTheDocument();
  });
});
