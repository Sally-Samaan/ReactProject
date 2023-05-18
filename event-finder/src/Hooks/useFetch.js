import React, { useState, useEffect } from "react";

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    fetch(url)
      .then((res) => {
        if (!res.ok) {
          throw Error("Could not fetch the data");
        }
        return res.json();
      })
      .then((data) => {
        setData(data._embedded.events);
        setIsPending(false);
        setError(null);
      })
      .catch((e) => {
        setIsPending(false);
        setError("Please make sure you entered a correct city name");
      });
  }, [url]);
  return { data, isPending, error };
};

export default useFetch;
