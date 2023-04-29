import React, { useEffect, useState } from "react";
import { Container, Row, Spinner } from "react-bootstrap";
import SingleTour from "../SingleTour/SingleTour";
import "./Tours.css";

const Tours = () => {
  const [tours, setTours] = useState([]);
  const [page, setPage] = useState(0);
  const [pageCount, setPageCount] = useState(0);
  const [displayTours, setDisplayTours] = useState([]);
  const size = 10;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const url = `https://tevliy-sever.vercel.app/tours?page=${page}&&size=${size}`;
        const response = await fetch(url);
        const { tours, count } = await response.json();
        setTours(tours);
        setDisplayTours(tours);
        setPageCount(Math.ceil(count / size));
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [page]);

  return (
    <div className="px-2">
      <div className="text-center ">
        <h1>Go Exotic Places</h1>
      </div>
      {!tours.length ? (
        <div className="text-center p-2">
          <Spinner animation="border" />
        </div>
      ) : (
        <>
          <div>
            <Row
              xs={1}
              sm={1}
              md={2}
              lg={3}
              xl={3}
              xxl={4}
              className="g-1 mt-2 justify-center"
            >
              {tours.map((tour) => (
                <SingleTour tour={tour} key={tour._id}></SingleTour>
              ))}
            </Row>
          </div>
          <div className="pagination">
            {[...Array(pageCount).keys()].map((number) => (
              <button
                className={number === page ? "selected" : ""}
                key={number}
                onClick={() => setPage(number)}
              >
                {number + 1}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Tours;
