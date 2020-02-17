import gameSettingsService from '../GameSettingsService';
describe('game settings service', () => {
  beforeEach(() => {
    jest.resetAllMocks();
    localStorage.clear();
  });

  test('should save player to localstorage', () => {
    // Arrange
    const expectedPlayerName = 'Leyla!';
    const expectedPlayerCards = 0;

    // Act
    gameSettingsService.savePlayer();
    // Assert
    expect(localStorage.setItem).toBeCalledWith(expectedPlayerName, expectedPlayerCards);
    expect(localStorage.__STORE__[expectedPlayerName]).toBe(expectedPlayerCards);
  });
});
