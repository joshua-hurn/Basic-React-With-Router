import React, { Component } from 'react';

class SingleCity extends Component {
    constructor(props) {
        super(props);

        this.state = {
            country: [],
            isLoading: true,
            error: null
        }
    }

    componentDidMount() {
        fetch(`http://localhost:3001/getCity/${this.props.match.params.id}`)
            .then(function (res) {
                return res.json();
            })
            .then(
                (result) => {
                    this.setState({ country: result, isLoading: false });
                },
                (error) => {
                    this.setState({ error });
                }
            )
    }

    render() {
        if (this.state.isLoading) {
            return (
                <div className="container">
                    Loading...
                </div>
            )
        } else
            return (
                this.state.country.map((city) => (
                    <div className="container">
                        {city.Name}
                        {city.Population}
                    </div>
                ))
            )
    }
}

export default SingleCity