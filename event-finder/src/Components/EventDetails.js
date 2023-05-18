import React from "react";
import Icon from "./Icon";

const EventDetails = ({ event }) => {
  return (
    <div>
      {event.map((e) => (
        <div key={e.id}>
          <h1 className="event-title">{e.name}</h1>
          <div className="event-details-container">
            <img src={e.images[2].url} alt="" className="imageDetails" />
            <div className="event-details-box">
              <p className="date">Date: {e.dates.start.localDate}</p>
              <p className="venue">Venue: {e._embedded.venues[0].name}</p>
              <a
                href={e.url}
                target="_blank"
                rel="noopener noreferrer"
                className="buy-ticket-link"
              >
                Buy Ticket
              </a>
              <div className="heartIcon">
                <Icon
                  id={e.id}
                  name={e.name}
                  date={e.date}
                  image={e.image}
                  url={e.url}
                />
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default EventDetails;
