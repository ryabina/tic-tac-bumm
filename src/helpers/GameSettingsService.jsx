export default class GameSettingsService {
  static savePlayersFirstTime(playersArray) {
    const playersObject = playersArray.map((player) => {
      const obj = {
        name: player,
        points: 0,
      };
      return obj;
    });
    this.savePlayers(playersObject);
  }

  static savePlayers(playersWithScores) {
    localStorage.setItem('players', JSON.stringify(playersWithScores));
  }

  static getPlayers() {
    const players = JSON.parse(localStorage.getItem('players'));
    return players;
  }
}
