import { useState } from 'react';

const Event = ({event}) => {
  const [showDetails, setShowDetails] = useState(false)

  const showDetailsClicked = () => {
    showDetails ? setShowDetails(false) : setShowDetails(true); 
  }

  return (
    <>
    <li>
      <div>
       <h2>{event.summary}</h2>
        <p>{event.location}</p>
        {showDetails ? <p>{event.description}</p> : null} 
        <button id="show-details"
           onClick={showDetailsClicked}> Show details </button>
        </div>
    </li>
    </>
  );
}

export default Event;