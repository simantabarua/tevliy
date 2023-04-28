import React from "react";
import { Container, Row, Spinner } from "react-bootstrap";
import { useEffect, useState } from "react";
import SingleTour from "../SingleTour/SingleTour";
import "./Tours.css";
const Tours = () => {
  const [tours, setTours] = useState([]);

  const [page, setPage] = useState(0);
  const [pageCount, setPageCount] = useState(0);
  //  rendered on the UI
  const [displayTours, setDisplayTours] = useState([]);
  const size = 10;
  useEffect(() => {
    const url = `https://tevliy-sever.vercel.app/tours?page=${page}&&size=${size}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setTours(data.tours);
        setDisplayTours(data.tours);
        const count = data.count;
        const pageNumber = Math.ceil(count / size);
        setPageCount(pageNumber);
      });
  }, [page]);
  return (
    <Container>
      <div className="text-center text-box ">
        <h1>Go Exotic Places</h1>
      </div>
      {!tours.length ? (
        <div className="text-center p-5">
          {" "}
          <Spinner animation="border" />
        </div>
      ) : (
        <div className="course-container mt-5 p-3">
          <Row xs={1} md={2} sm={1} lg={4} className="g-1 mt-2">
            {tours.map((tour) => (
              <SingleTour tour={tour} key={tour._id}></SingleTour>
            ))}
          </Row>
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
        </div>
      )}
    </Container>
  );
};

export default Tours;
