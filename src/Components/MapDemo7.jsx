import React from 'react'

export const MapDemo7 = () => {
    const games =
    [
  {
    "gameId": 1,
    "gameName": "Valorant",
    "genre": "FPS",
    "activePlayers": 23000000,
    "platform": "PC"
  },
  {
    "gameId": 2,
    "gameName": "BGMI",
    "genre": "Battle Royale",
    "activePlayers": 18000000,
    "platform": "Mobile"
  },
  {
    "gameId": 3,
    "gameName": "CS2",
    "genre": "FPS",
    "activePlayers": 12000000,
    "platform": "PC"
  },
  {
    "gameId": 4,
    "gameName": "Call of Duty",
    "genre": "FPS",
    "activePlayers": 30000000,
    "platform": "PC / Console"
  },
  {
    "gameId": 5,
    "gameName": "Fortnite",
    "genre": "Battle Royale",
    "activePlayers": 35000000,
    "platform": "PC / Console / Mobile"
  },
  {
    "gameId": 6,
    "gameName": "Apex Legends",
    "genre": "Battle Royale",
    "activePlayers": 25000000,
    "platform": "PC / Console"
  },
  {
    "gameId": 7,
    "gameName": "PUBG PC",
    "genre": "Battle Royale",
    "activePlayers": 15000000,
    "platform": "PC"
  },
  {
    "gameId": 8,
    "gameName": "Free Fire",
    "genre": "Battle Royale",
    "activePlayers": 40000000,
    "platform": "Mobile"
  },
  {
    "gameId": 9,
    "gameName": "Overwatch 2",
    "genre": "FPS",
    "activePlayers": 10000000,
    "platform": "PC / Console"
  },
  {
    "gameId": 10,
    "gameName": "Rocket League",
    "genre": "Sports",
    "activePlayers": 8000000,
    "platform": "PC / Console"
  }
]


  return (
    <div>
        <h1 style={{textAlign:'center'}}>MapDemo7</h1>
        <center>
    <table border="1" className='table table-dark'>
    <thead>
      <tr>
        <th>Game ID</th>
        <th>Game Name</th>
        <th>Genre</th>
        <th>Active Players</th>
        <th>Platform</th>
      </tr>
    </thead>
      <tbody>
  {
    games.map((game) => {
      return (
        <tr>
          <td style={{color:game.gameId > 5 && "red"}}>
            {game.gameId}
        </td>
          <td style={{textDecoration: game.gameName < "C" && "line-through"}}>{game.gameName}</td>
          <td style={{backgroundColor:game.genre == 'Battle Royale' && "lime"}}>{game.genre}</td>
          <td>{game.activePlayers}{game.activePlayers > 25000000 && "           ⭐⭐⭐⭐⭐"}</td>
          <td style={{fontStyle:game.platform == "Mobile" && "italic"}}>{game.platform}</td>
        </tr>
      );
    })
  }
</tbody>
  </table>
  </center>
</div>
  );
  
};
