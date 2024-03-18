import { useState } from 'react';

const Event = ({event}) => {
  const [toggle, setToggle] = useState(false)

  return (
    <>
    <li>
      <div>
       <h2>{event.summary}</h2>
       <p>{event.created}</p>
       <p>{event.location}</p>
       {toggle ? 
       <>
       <p>{event.description}</p>
       <button id="hide-details" onClick={() => setToggle(false)}> Hide details </button>
       </>
       :
       <button id="show-details" onClick={() => setToggle(true)}> Show details </button>
       }        
      </div>
    </li>
    </>
  );
}

export default Event;