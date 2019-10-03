import React, { Component } from 'react';
import Card from './Card';

class CardList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            countries: [],
            isLoaded: false,
            error: null
        }
    }

    componentDidMount() {
        fetch('http://localhost:3001/getWorld')
            .then(function (res) {
                return res.json();
            })
            .then(
                (result) => {
                    this.setState({ countries: result });
                },
                (error) => {
                    this.setState({ error });
                }
            )
    }

    render() {
        return this.state.countries.map((country) => (
            <Card key={country.ID} country={country} />
        ))
    }
}

export default CardList
