import React, { Component } from 'react'

export default class TableTournament extends Component {
    render() {
        const { id, title, content } = this.props

        return (
            <tr>
                <th>{id}</th>
                <td>{title}</td>
                <td>{content}</td>
            </tr>
        )
    }
}