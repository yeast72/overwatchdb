import React, { Component } from 'react'
import fetch from 'isomorphic-fetch'
import TableTournament from './Tabletournament.js'

class Tournaments extends Component {
  render() {
    return (
      <div className="container">
        <h1>Tournament</h1>
        <button id="tourName" value="Search" Onclick="searchTourName()">
          Search
      </button>
        <br />
        Tier
      <br />
        <input type="checkbox" id="tierPremier" />
        Premier
      <br />
        <input type="checkbox" id="tierMajor" />
        Major
      <br />
        <input type="checkbox" id="tierMinor" />
        Minor
      <br />
        Price
      <select id="price">
          <option value="-1">ALL</option>
          <option value="0">50000</option>
          <option value="50000">50,000~100,000</option>
          <option value="100000">100,000~150,000</option>
          <option value="150000">150,000~200,000</option>
          <option value="200000">200,000~250,000</option>
          <option value="250000">250,000~300,000</option>
          <option value="300000">>300,000</option>
        </select>
        <button id="opSearch" value="Search" Onclick="searchOpTour()">
          Submit
      </button>

        <div className="bs-example">
          <table className="table table-condensed">
            <thead>
              <tr>
                <th>TourID</th>
                <th>TourName</th>
                <th>Price</th>
                <th>WinnerTeamID</th>
                <th>Tier</th>
                <th>Location</th>
                <th>OrganizerID</th>
                <th>StartDate</th>
                <th>EndDate</th>
              </tr>
            </thead>
            <tbody>
              {
                this.props.tournaments.map((tournament) => (
                  <TableTournament key={tournament.TourID}
                    TourID={tournament.TourID}
                    TourName={tournament.TourName}
                    Price={tournament.Price}
                    WinnerTeamID={tournament.WinnerTeamID}
                    Tier={tournament.Tier}
                    Location={tournament.Location}
                    OrganizerID={tournament.OrganizerID}
                    StartDate={tournament.StartDate}
                    EndDate={tournament.EndDate} />
                ))
              }
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default Tournaments