import React, { useState } from 'react';
import "./Countries/Countries.css"

const Country = ({country, handleVisitedCountries, handleVisitesFlags}) => {
    // console.log(handleVisitesFlags)

    const [visited, setVisited] = useState(false);

    const handleVisited = () => {
        // setVisited(true);
        
        if (visited) {
            setVisited(false)
        } else {
            setVisited(true)
        };

        handleVisitedCountries(country);
    }



    return (
        <div className={`box ${visited && 'visited'}`}>
            <img src={country?.flags?.flags.png} alt="" />
            <h2>Name: {country.name.common}</h2>
            <p>Population: {country.population.population}</p>
            <p>Area: {country.area.area} {country.area.area > 3000 ? "Big Country" : "Small Country"}</p>
            <button onClick={handleVisited}>{visited ? "VISITED" : "NOT VISITED"}</button>
            <button onClick={() => handleVisitesFlags(country?.flags?.flags.png)}>Add Flag</button>
        </div>
    );
};

export default Country;