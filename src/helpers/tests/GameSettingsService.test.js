import gameSettingsService from '../GameSettingsService';

describe('game settings service', () => {
  beforeEach(() => {
    localStorage.clear();
    localStorage.setItem.mockClear();
  });

  test('should save player to localstorage', () => {
    // Arrange
    const expectedPlayerName = 'Leyla!';
    const expectedPlayerCards = '0';

    // Act
    gameSettingsService.savePlayer(expectedPlayerName);
    // Assert
    expect(localStorage.setItem).toBeCalledWith(expectedPlayerName, expectedPlayerCards);
    expect(localStorage.__STORE__[expectedPlayerName]).toBe(expectedPlayerCards);
  });

  test('should save all players to localstorage', () => {
    // Arrange
    const expectedPlayers = ['Leyla!', 'ILYA', 'Crash', '<3'];
    // Act
    gameSettingsService.savePlayers(expectedPlayers);
    // Assert
    expect(Object.keys(localStorage.__STORE__).length).toBe(expectedPlayers.length);
  });
});