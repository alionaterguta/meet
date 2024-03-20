import { useEffect, useState } from "react";

const CitySearch = ({ allLocations, setCurrentCity }) => {
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
  };

  const handleItemClicked = (event) => {
    const value = event.target.textContent;
    setQuery(value);
    setShowSuggestions(false); //to hide the list
    setCurrentCity(value);
  };

  return (
    <div id="city-search">
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
            <b> See all cities</b>
          </li>
        </ul>
      ) : null}
    </div>
  );
};

export default CitySearch;
