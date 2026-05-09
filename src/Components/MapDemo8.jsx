import React from 'react';

export const MapDemo8= () => {

  const sports = [
    {
      sportId: 1,
      sportName: "Cricket",
      type: "Outdoor",
      playersPerTeam: 11,
      popularity: "High"
    },
    {
      sportId: 2,
      sportName: "Football",
      type: "Outdoor",
      playersPerTeam: 11,
      popularity: "High"
    },
    {
      sportId: 3,
      sportName: "Basketball",
      type: "Indoor",
      playersPerTeam: 5,
      popularity: "Medium"
    },
    {
      sportId: 4,
      sportName: "Tennis",
      type: "Outdoor",
      playersPerTeam: 1,
      popularity: "Medium"
    },
    {
      sportId: 5,
      sportName: "Badminton",
      type: "Indoor",
      playersPerTeam: 1,
      popularity: "High"
    },
    {
      sportId: 6,
      sportName: "Hockey",
      type: "Outdoor",
      playersPerTeam: 11,
      popularity: "Medium"
    },
    {
      sportId: 7,
      sportName: "Kabaddi",
      type: "Outdoor",
      playersPerTeam: 7,
      popularity: "High"
    },
    {
      sportId: 8,
      sportName: "Volleyball",
      type: "Indoor",
      playersPerTeam: 6,
      popularity: "Medium"
    },
    {
      sportId: 9,
      sportName: "Table Tennis",
      type: "Indoor",
      playersPerTeam: 1,
      popularity: "Low"
    },
    {
      sportId: 10,
      sportName: "Baseball",
      type: "Outdoor",
      playersPerTeam: 9,
      popularity: "Medium"
    }
  ];

  return (
    <div>
      <h1 style={{ textAlign: 'center' }}>Map Demo 8</h1>

      <center>
        <table border="1" className="table table-dark">
          <thead>
            <tr>
              <th>Sport ID</th>
              <th>Sport Name</th>
              <th>Type</th>
              <th>Players / Team</th>
              <th>Popularity</th>
            </tr>
          </thead>

          <tbody>
            {
              sports.map((sport) => {
                return (
                  <tr key={sport.sportId}>
                    <td style={{ background: sport.sportId % 2 == 0 && "yellow" }}>
                      {sport.sportId}
                    </td>

                    <td style={{color: sport.sportName > "H" && "orange" }}>
                      {sport.sportName}
                    </td>

                    <td>
                      {sport.type}{sport.type == "Indoor" && "🏆"}
                      {sport.type == "Outdoor" && "🏅"}
                    </td>

                    <td>
                      {sport.playersPerTeam}
                      {sport.playersPerTeam > 2 && "(Team Sport)"}
                    </td>

                    <td style={{textAlign: sport.popularity === "High" && "center" }}>
                      {sport.popularity}
                    </td>
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
