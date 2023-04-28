import { useEffect, useState } from "react";

const useFetch = () => {
  const url = "https://tevliy-sever.vercel.app/tours";
  const [tours, setTours] = useState([]);

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setTours(data.tours));
  }, []);
  return [tours];
};

export default useFetch;
