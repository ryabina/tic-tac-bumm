import gameSettingsService from '../GameSettingsService';

describe('game settings service', () => {
  beforeEach(() => {
    localStorage.clear();
    localStorage.setItem.mockClear();
  });


  test('should save all players to localstorage for the first time with 0 points each', () => {
    // Arrange
    const [expectedPlayer1, expectedPlayer2] = ['Nikolya', 'Kamila'];
    const expectedPlayers = [expectedPlayer1, expectedPlayer2];
    const expectedPlayersObject = JSON.stringify([
      {
        name: 'Nikolya',
        points: 0,
      },
      {
        name: 'Kamila',
        points: 0,
      },
    ]);
    // Act
    gameSettingsService.savePlayersFirstTime(expectedPlayers);
    // Assert
    expect(localStorage.__STORE__.players).toBe(expectedPlayersObject);
  });

  test('should get players from localstorage', () => {
    // Arrange
    const expectedPlayers = {
      players: [
        {
          name: 'Nikolya',
          points: 0,
        },
        {
          name: 'Kamila',
          points: 1,
        },
      ],
    };
    const PLAYERS = 'players';
    localStorage.setItem(PLAYERS, JSON.stringify(expectedPlayers));
    // Act
    const actualPlayerScore = gameSettingsService.getPlayers();
    // Assert

    expect(actualPlayerScore).toEqual(expectedPlayers);
  });
});
