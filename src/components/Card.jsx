import React from 'react';
import { Link } from 'react-router-dom';
import './Card.css'

let Card = ({country}) => {
    return (
        <div className="container">
            <h2>{country.Name}</h2>
            <p>Population: {country.Population}</p>
            <Link to={`/city/${country.ID}`}>See More</Link>
        </div>
    )
}

export default Card
