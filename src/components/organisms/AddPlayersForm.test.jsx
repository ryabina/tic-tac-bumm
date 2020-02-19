import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { fireEvent, render } from '@testing-library/react';
import AddPlayersForm from './AddPlayersForm';
import GameSettingService from '../../helpers/GameSettingsService';

jest.mock('../../helpers/GameSettingsService');

describe('Add players form', () => {
  const expectedSavePlayerText = 'Save player';
  const expectedAddAnotherPlayerText = 'Add another player';

  beforeEach(() => {
    jest.restoreAllMocks();
  });
  test('should have input and add player button', () => {
    // Arrange
    // Act
    const { getByTestId, queryByText } = render(<AddPlayersForm />);
    const playerNameInput = getByTestId('test-player-name-input');
    const savePlayer = queryByText(expectedSavePlayerText);
    const ok = queryByText('Ok');
    // Assert
    expect(playerNameInput).toBeTruthy();
    expect(savePlayer).not.toBeNull();
    expect(ok).toBeTruthy();
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

  test('should open input and save button on Add Another Player button', () => {
    // Arrange
    const expectedName = 'Blahblah';
    const { getByTestId, queryByText } = render(<AddPlayersForm />);
    const playerNameInput = getByTestId('test-player-name-input');
    const savePlayer = queryByText(expectedSavePlayerText);
    fireEvent.change(playerNameInput, { target: { value: expectedName } });
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

  test('should print players on separate lines', () => {
    // Arrange
    const expectedName = 'Blahblah';
    const { getByTestId, queryByText } = render(<AddPlayersForm />);

    const playerNameInput = getByTestId('test-player-name-input');
    const savePlayer = queryByText(expectedSavePlayerText);

    fireEvent.change(playerNameInput, { target: { value: expectedName } });
    fireEvent.click(savePlayer);

    const addAnotherPlayer = queryByText('Add another player');

    fireEvent.click(addAnotherPlayer);
    fireEvent.change(getByTestId('test-player-name-input'), { target: { value: expectedName } });

    // Act
    fireEvent.click(queryByText(expectedSavePlayerText));
    const playersNames = getByTestId('test-players-names');
    // Assert
    expect(playersNames.children.length).toBe(2);
  });

  test('should close modal when clicking OK', () => {
    // Arrange
    const mockCloseModal = jest.fn();
    const { getByText } = render(<AddPlayersForm closeModal={mockCloseModal} />);

    const ok = getByText('Ok');

    // Act
    fireEvent.click(ok);
    // Assert
    expect(mockCloseModal).toBeCalled();
  });

  test('should close modal and save players when clicking OK', () => {
    // Arrange
    const expectedName = 'Leyla!';
    const mockCloseModal = jest.fn();

    const mockSavePlayers = jest.fn();
    GameSettingService.savePlayers.mockImplementation(mockSavePlayers);

    const { getByText, getByTestId } = render(<AddPlayersForm closeModal={mockCloseModal} />);
    const playerNameInput = getByTestId('test-player-name-input');
    const savePlayer = getByText(expectedSavePlayerText);

    fireEvent.change(playerNameInput, { target: { value: expectedName } });
    fireEvent.click(savePlayer);

    const expectedPlayers = [expectedName];
    const ok = getByText('Ok');

    // Act
    fireEvent.click(ok);
    // Assert
    expect(mockSavePlayers).toBeCalledWith(expectedPlayers);
    expect(mockCloseModal).toBeCalled();
  });
});
