import React from "react";
import { useParams } from "react-router";
import useFetch from "../Hooks/useFetch";
import Navbar from "../Components/Navbar";
import EventDetails from "../Components/EventDetails";

const EventPage = () => {
  const { id } = useParams();
  const {
    data: event,
    isPending,
    error,
  } = useFetch(
    `https://app.ticketmaster.com/discovery/v2/events.json?apikey=FNkIpBYg2oKvESegKgnS6tiZhtYNY7gQ&&id=${id}`
  );

  return (
    <div>
      <Navbar />
      <h1>{id + " Ygolon Yef3l"}</h1>
      {error && <h1>{error}</h1>}
      {isPending && <h1>Loading...</h1>}
      {event && (
        <div>
          <EventDetails event={event} />
        </div>
      )}
    </div>
  );
};

export default EventPage;
