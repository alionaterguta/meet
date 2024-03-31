import { useState } from "react";

const Event = ({ event }) => {
  const [toggle, setToggle] = useState(false);

  return (
    <>
      <li className="event">
        <div className="details-container">
          <h2>{event.summary}</h2>
          <p className="eventLocation">{event.location}</p>
          <div>
            <p className="eventDate">{new Date(event.created).toUTCString()}</p>
          </div>
          {toggle ? (
            <>
              <p className="eventDetails">{event.description}</p>
              <br />
              <button
                className="details-btn"
                id="hide-details"
                onClick={() => setToggle(false)}
              >
                {" "}
                Hide details{" "}
              </button>
            </>
          ) : (
            <>
              <br />
              <button
                className="details-btn"
                id="show-details"
                onClick={() => setToggle(true)}
              >
                {" "}
                Show details{" "}
              </button>
            </>
          )}
        </div>
      </li>
    </>
  );
};

export default Event;
