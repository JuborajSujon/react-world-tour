import CountryData from "../Country data/CountryData";

export default function CountryDetails(props) {
  // const { country, handleVisitedCountry, handleVisitedFlag } = props;
  return (
    <div>
      <h4>Country Details</h4>
      <hr />
      {/* <CountryData
        country={country}
        hnadleVisitedCountry={hnadleVisitedCountry}
        handleVisitedFlag={handleVisitedFlag}
      /> */}
      <CountryData {...props} />
    </div>
  );
}
