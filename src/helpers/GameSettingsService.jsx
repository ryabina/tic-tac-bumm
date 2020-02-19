export default class GameSettingsService {
  static savePlayer(player) {
    localStorage.setItem(player, '0');
  }

  static savePlayers(players) {
    players.forEach(player => this.savePlayer(player));
  }

  static getPlayers() {
    return Object.entries(localStorage);
  }
}
