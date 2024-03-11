export default function CountryData({
  country,
  hnadleVisitedCountry,
  handleVisitedFlag,
}) {
  return (
    <div>
      <p>Country data : {country?.name?.common}</p>
    </div>
  );
}
