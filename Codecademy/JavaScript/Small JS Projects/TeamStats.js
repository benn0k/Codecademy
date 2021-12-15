const team = {
  //set players as objects in array
  _players: [
    {
      firstName: "Pablo",
      lastName: "Sanchez",
      age: 11,
    },
    {
      firstName: "Pete",
      lastName: "Wheeler",
      age: 54,
    },
    {
      firstName: "Jon",
      lastName: "Bennek",
      age: 21,
    },
  ],
  // set games as objects in array
  _games: [
    {
      opponent: "Broncos",
      teamPoints: 42,
      opponentPoints: 27,
    },
    {
      opponent: "Vikings",
      teamPoints: 11,
      opponentPoints: 7,
    },
    {
      opponent: "Texans",
      teamPoints: 66,
      opponentPoints: 84,
    },
  ],
  //getter for games
  get games() {
    return this._games;
  },
  //getter for players
  get players() {
    return this._players;
  },
  // add player method
  addPlayer(firstName, lastName, age) {
    let player = {
      firstName: firstName,
      lastName: lastName,
      age: age,
    };

    this._players.push(player);
  },

  addGame(opponent, teamPoints, opponentPoints) {
    let game = {
      opponent: opponent,
      teamPoints: teamPoints,
      opponentPoints: opponentPoints,
    };

    this._games.push(game);
  },
};

team.addPlayer("Steph", "Curry", 28);
team.addPlayer("Lisa", "Leslie", 44);
team.addPlayer("Bugs", "Bunny", 76);

console.log(team._players); // objects in team expected

team.addGame("Titans", 100, 98);

console.log(team._games);
