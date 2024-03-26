import { useState } from "react";

const NumberOfEvents = ({ setCurrentNOE, setErrorAlert }) => {
  //Add a new state for the input field so that the value can be accessed
  const [query, setQuery] = useState(32);

  const handleInputChanged = (event) => {
    const value = event.target.value;
    setQuery(value);

    let infoText;
    if (isNaN(value) || value <= 0) {
      infoText = "Please enter a valid number.";
    } else {
      infoText = "";
      setCurrentNOE(value);
    }
    setErrorAlert(infoText);
  };

  return (
    <>
      <h4> Events </h4>
      <input
        id="number-of-events"
        type="text"
        value={query}
        onChange={handleInputChanged}
        className="eventsNumber"
        placeholder="Enter number of events"
      />
    </>
  );
};

export default NumberOfEvents;
