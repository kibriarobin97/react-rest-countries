import React, { use, useState } from "react";
import Country from "../country/Country";
import "./countries.css";

const Countries = ({ countriesPromise }) => {

  const [visitedCountries, setVisitedCountries] = useState([]);
  const countries = use(countriesPromise);

  const handleVisitedCountries = (country) => {
    const newVisitedCountries = [...visitedCountries, country]
    setVisitedCountries(newVisitedCountries);
  }

  return (
    <div>
      <h1>Traveling Country: {countries.length}</h1>
      <h1>Traveled so far: {visitedCountries.length}</h1>
      <ol>
        {
          visitedCountries.map(country => <li>{country?.name?.common}</li>)
        }
      </ol>
      <div className="countries">
        {countries.map((country) => (
          <Country
          handleVisitedCountries={handleVisitedCountries}
          key={country.cca3}
          country={country}></Country>
        ))}
      </div>
    </div>
  );
};

export default Countries;
