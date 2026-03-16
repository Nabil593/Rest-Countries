import React, { use, useState } from 'react';
import Country from '../Country';
import "./countries.css"

const Countries = ({countriesPromise}) => {

    const [visitedCountries, setVisitedCountries] = useState([]);
    const [visitedFlags, setVisitedFlags] = useState([]);

    const handleVisitedCountries = (country) => {
        const newVisitedCountry = [...visitedCountries, country];

        setVisitedCountries(newVisitedCountry);
    };

    const handleVisitesFlags = (flag) => {
        const newVisitedFlags = [...visitedFlags, flag];
        setVisitedFlags(newVisitedFlags);
    }

    const countriesData = use(countriesPromise);
    const countries = countriesData.countries;
    // console.log(countries)

    return (
        <div>
            <h1>Total: {countries.length}</h1>
            <h2>Total Country Visited: {visitedCountries.length}</h2>
            <h2>Total Flag Visited: {visitedFlags.length}</h2>
            <ol>
                {
                    visitedCountries.map(c => <li key={c.cca3.cca3}>{c.name.common}</li>)
                }
            </ol>
            <div>
                {
                    visitedFlags.map((f, index) => <img key={index} src={f}></img>)
                }
            </div>
            <div className='countries'>
                {
                countries.map(country => <Country key={country.cca3.cca3} handleVisitesFlags={handleVisitesFlags} handleVisitedCountries={handleVisitedCountries} country = {country}/>)
            }
            </div>
        </div>
    );
};

export default Countries;