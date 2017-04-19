import React, { Component } from 'react'
import fetch from 'isomorphic-fetch'
import { Tournaments } from '../components'

export default class TournamentsContainer extends Component {
    state = {
        tournaments: []
    }

    componentDidMount() {
        fetch('http://127.0.0.1:5000/api/v1/tournaments')
            .then((response) => response.json())
            .then((tournaments) => this.setState({ tournaments }))
    }

    render() {
        // เรียกใช้ Presentational Component
        return (<Tournaments tournaments={this.state.tournaments} />
        )
    }
}
