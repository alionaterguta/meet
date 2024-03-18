const NumberOfEvents = ()=> {
  return (
    <>
      <h3> Number of events:</h3>
      <input
        id="number-of-events"
        type="text"
        defaultValue="32"
        className="eventsNumber"
        placeholder="Enter number of events"
      />
    </>
  );
}

export default NumberOfEvents;