import { useEffect, useState } from "react";
import Logo from "../img/logo.svg";

const CitySearch = ({ allLocations, setCurrentCity, setInfoAlert }) => {
  const [showSuggestions, setShowSuggestions] = useState(false);
  //Add a new state for the input field so that the value can be accessed
  const [query, setQuery] = useState("");
  // Add a new state which will hold the list of suggestions
  const [suggestions, setSuggestions] = useState([]);

  useEffect(() => {
    setSuggestions(allLocations);
  }, [`${allLocations}`]); // `${allLocations}` -strigified value of the prop

  const handleInputChanged = (event) => {
    const value = event.target.value;
    const filteredLocations = allLocations
      ? allLocations.filter((location) => {
          return location.toUpperCase().indexOf(value.toUpperCase()) > -1;
        })
      : [];

    setQuery(value);
    setSuggestions(filteredLocations);

    let infoText;
    if (filteredLocations.length === 0) {
      infoText =
        "We can not find the city you are looking for. Please try another city.";
    } else {
      infoText = "";
    }
    setInfoAlert(infoText);
  };

  const handleItemClicked = (event) => {
    const value = event.target.textContent;
    setQuery(value);
    setShowSuggestions(false); //to hide the list
    setCurrentCity(value);
    setInfoAlert("");
  };

  return (
    <div id="city-search">
      <img src={Logo} alt="Logo" width="140" />
      <input
        type="text"
        className="city"
        placeholder="Search for a city"
        value={query}
        onFocus={() => setShowSuggestions(true)}
        onChange={handleInputChanged}
      />
      {showSuggestions ? (
        <ul className="suggestions">
          {suggestions.map((suggestion) => {
            return (
              <li onClick={handleItemClicked} key={suggestion}>
                {suggestion}
              </li>
            );
          })}
          <li key="See all cities" onClick={handleItemClicked}>
            <b>See all cities</b>
          </li>
        </ul>
      ) : null}
    </div>
  );
};

export default CitySearch;
