import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const CountryDetail = () => {
   const {name}= useParams();
   const[country,setCountry] = useState({})
   const {population}=country;
   console.log(country);
   useEffect(()=>{
       const url=`https://restcountries.eu/rest/v2/name/${name}`
       fetch(url)
       .then(res=>res.json())
       .then(data=>setCountry(data))
   },[])
    return (
        <div>
            <h1>Country detail of {name} </h1>
            <h1> {country.capital} </h1>
        </div>
    );
};

export default CountryDetail;