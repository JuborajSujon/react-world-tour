import { useEffect } from "react";
import { useState } from "react";
import Country from "../country/Country";
import "./Countries.css";

export default function Countries() {
  const [countries, setCountries] = useState([]);
  const [visitedCountries, setVisitedCountries] = useState([]);
  const [visitedFlags, setVisitedFlags] = useState([]);

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data) => {
        setCountries(data);
      });
  }, []);

  const handleVisitedCountry = (country) => {
    // console.log("Add this to your visited country");
    // console.log(country);
    const newVisitedCountries = [...visitedCountries, country];
    setVisitedCountries(newVisitedCountries);
  };

  const handleVisitedFlag = (flag) => {
    // console.log("Add this to your visited flag");
    const newVisitedFlags = [...visitedFlags, flag];
    setVisitedFlags(newVisitedFlags);
  };
  return (
    <div>
      <h3>Countries : {countries.length}</h3>
      <div>
        <h5>Visited Countries : {visitedCountries.length}</h5>
        <ul>
          {visitedCountries.map((visitedCountry) => (
            <li key={visitedCountry.cca3}>{visitedCountry.name.common}</li>
          ))}
        </ul>
      </div>
      <div className="flag-container">
        {visitedFlags.map((visitedFlag) => (
          <img src={visitedFlag.flags.png} key={visitedFlag.cca3} />
        ))}
      </div>
      <div className="country-container">
        {countries.map((country) => (
          <Country
            country={country}
            key={country.cca3}
            handleVisitedCountry={handleVisitedCountry}
            handleVisitedFlag={handleVisitedFlag}></Country>
        ))}
      </div>
    </div>
  );
}
