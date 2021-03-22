import React from 'react';
import { Link } from 'react-router-dom';

const Country = (props) => {
    const {name,region,capital,population,flag}=props.country;
    const countyStyle={
        border:'1px solid purple',
        margin:'20px',
        padding:'20px',
        borderRadius:'20px'
    }
    return (
        <div style={countyStyle}>
            {/* <img style={{margin:'100px',width:'100px'}} src={flag} alt="" srcset=""/> */}
            <h1> County name: {name}</h1>
            <h3>Capital: {capital}</h3>
            <h5>Population :{population} </h5>
            <h3>Region :{region}</h3>
            <p> <Link to={`/detail/${name}`}> Detial of {name} </Link> </p>
        </div>
    );
};

export default Country;