import useFetch from "../Hooks/useFetch";
import Event from "./Event";

const Results = ({ cityValue }) => {
  const apiKey = process.env.REACT_APP_API_KEY;

  const {
    data: event,
    isPending,
    error,
  } = useFetch(
    `https://app.ticketmaster.com/discovery/v2/events.json?apikey=${apiKey}&&city=${cityValue}`
  );

  return (
    <div>
      {error && <h1>{error}</h1>}
      {isPending && <h1>Loading...</h1>}
      {event && <Event event={event} />}
    </div>
  );
};

export default Results;
