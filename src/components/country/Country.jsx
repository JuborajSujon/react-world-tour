import { useState } from "react";
import "./Country.css";
export default function Country({ country, handleVisitedCountry }) {
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
    </div>
  );
}
