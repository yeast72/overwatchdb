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
                <th>No.</th>
                <th>name</th>
                <th>price</th>
              </tr>
            </thead>
            <tbody>
              {
                this.props.tournaments.map((tournament) => (
                  <TableTournament key={tournament.id}
                    id={tournament.id}
                    title={tournament.title}
                    content={tournament.content} />
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