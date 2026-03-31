import React, { useState } from "react";
import "./country.css";

const Country = ({ country, handleVisitedCountries }) => {
  const [visited, setVisited] = useState(false);

  const handleVisited = () => {
    // if (visited === true) {
    //   setVisited(false);
    // }
    // else{
    //   setVisited(true);
    // }
    setVisited(!visited);
    handleVisitedCountries(country)
  };

  return (
    <div className={`country ${visited && "country-visited"}`}>
      <h3>Name: {country?.name?.common}</h3>
      <img src={country?.flags?.png} alt="" />
      <h4>Official Name: {country?.name?.official}</h4>
      <h4>Capital: {country?.capital}</h4>
      <h5>Status: {country?.independent ? "Independent" : "Colonized"}</h5>
      <p>
        Currency:{" "}
        {country?.currencies
          ? Object.values(country.currencies)[0].name
          : "N/A"}
      </p>
      <p>Population: {country?.population}</p>
      <button onClick={handleVisited}>
        {visited ? "Visited" : "Not Visited"}
      </button>
    </div>
  );
};

export default Country;
