import React from "react";

const EventDetails = ({ event }) => {
  return (
    <div>
      <h1>{event[0].name}</h1>
      <img src={event[0].images[5].url} alt="" />
    </div>
  );
};

export default EventDetails;
