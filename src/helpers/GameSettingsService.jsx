export default class GameSettingsService {

  static savePlayers(players) {
    localStorage.setItem('players', JSON.stringify(players));
  }

  static getPlayers() {
    const players = JSON.parse(localStorage.getItem('players'));
    return players;
  }
}
