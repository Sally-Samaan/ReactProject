import { Link } from "react-router-dom";
import Icon from "./Icon";

const Event = ({ event }) => {
  return (
    <div className="event-container">
      {event.map((event) => (
        <div key={event.id} className="event-box">
          <Link to={`/event/${event.id}`} className="event-link">
            <div className="event-image">
              <img src={event.images[8].url} alt={event.name} />
            </div>
            <div className="event-details">
              <p className="event-name">{event.name}</p>
              <p className="event-date">{event.dates.start.localDate}</p>
            </div>
          </Link>
          <Icon
            className="icon"
            id={event.id}
            name={event.name}
            date={event.dates.start.localDate}
            image={event.images[5].url}
            url={event.url}
          />
        </div>
      ))}
    </div>
  );
};

export default Event;
