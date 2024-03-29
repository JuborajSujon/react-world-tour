import { useState } from "react";
import "./Country.css";
import CountryDetails from "../Country Details/CountryDetails";
export default function Country({
  country,
  handleVisitedCountry,
  handleVisitedFlag,
}) {
  const { name, flags, population, area, cca3 } = country;
  const [visited, setVisited] = useState(false);
  const handleVisited = () => {
    setVisited(!visited);
  };

  return (
    <div className={`country ${visited ? "visited" : "non-visited"}`}>
      <h3 style={{ color: visited ? "green" : "red" }}>{name?.common}</h3>
      <img src={flags?.png} alt="" />
      <p>Population: {population}</p>
      <p>Area: {area}</p>
      <p>
        <small>Code: {cca3}</small>
      </p>
      {visited && <p>I have visited this country</p>}
      <button onClick={handleVisited}>Visited</button>
      <br />
      <button onClick={() => handleVisitedCountry(country)}>
        Mark visited
      </button>
      <br />
      <button onClick={() => handleVisitedFlag(country)}>
        Mark visited flag
      </button>
      <hr />
      <CountryDetails
        country={country}
        handleVisitedCountry={handleVisitedCountry}
        handleVisitedFlag={handleVisitedFlag}></CountryDetails>
    </div>
  );
}
