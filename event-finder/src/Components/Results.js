import useFetch from "../Hooks/useFetch";
import Event from "./Event";

const Results = () => {
  const {
    data: event,
    isPending,
    error,
  } = useFetch(
    "https://app.ticketmaster.com/discovery/v2/events.json?apikey=FNkIpBYg2oKvESegKgnS6tiZhtYNY7gQ&&city=groningen"
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
