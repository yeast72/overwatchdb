import React, { Component } from 'react'

export default class TableTournament extends Component {
    render() {
        const { TourID, TourName, Price, WinnerTeamID, Tier, Location, OrganizerID, StartDate, EndDate } = this.props

        return (
            <tr>
                <th>{TourID}</th>
                <td>{TourName}</td>
                <td>{Price}</td>
                <td>{WinnerTeamID}</td>
                <td>{Tier}</td>
                <td>{Location}</td>
                <td>{OrganizerID}</td>
                <td>{StartDate}</td>
                <td>{EndDate}</td>
            </tr>
        )
    }
}