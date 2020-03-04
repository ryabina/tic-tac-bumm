import gameSettingsService from '../GameSettingsService';

describe('game settings service', () => {
  beforeEach(() => {
    localStorage.clear();
    localStorage.setItem.mockClear();
  });

 
  test('should save all players to localstorage', () => {
    // Arrange
    const expectedPlayers = {
      players: [
          {
              name: "Nikolya",
              points: 0,
          },
          {
              name: "Kamila",
              points: 1,
          },
      ]
    }; 
    // Act
    gameSettingsService.savePlayers(expectedPlayers);
    // Assert
    expect(Object.keys(localStorage.__STORE__).length).toBe(1);
  });

  test('should get players from localstorage', () => {
    // Arrange
    const expectedPlayers = {
      players: [
          {
              name: "Nikolya",
              points: 0,
          },
          {
              name: "Kamila",
              points: 1,
          },
      ]
    }; 
    const PLAYERS = 'players'
    localStorage.setItem(PLAYERS, JSON.stringify(expectedPlayers));
    // Act
    const actualPlayerScore = gameSettingsService.getPlayers();
    // Assert

    expect(actualPlayerScore).toEqual(expectedPlayers);
  });
});
