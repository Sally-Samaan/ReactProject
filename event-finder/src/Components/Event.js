import React from "react";
import { Link } from "react-router-dom";

const Event = ({ event }) => {
  return (
    <div>
      {event.map((event) => (
        <div key={event.id}>
          <Link to={`/event/${event.id}`}>
            <h1>{event.name}</h1>
            <h2>{event.dates.start.localDate}</h2>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Event;
