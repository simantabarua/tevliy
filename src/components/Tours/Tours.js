import React from 'react';
import { Container, Row } from 'react-bootstrap';
import { useEffect, useState } from 'react';
import SingleTour from '../SingleTour/SingleTour';
import './Tours.css'
const Tours = () => {
    const [tours, setTours] = useState([])

    const [page, setPage] = useState(0);
    const [pageCount, setPageCount] = useState(0);
    //  rendered on the UI
    const [displayTours, setDisplayTours] = useState([]);
    const size = 10;
    useEffect(() => {
        const url = `https://intense-ravine-02304.herokuapp.com/tours?page=${page}&&size=${size}`;
        // const url = `http://localhost:5000/tours?page=${page}&&size=${size}`;
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setTours(data.tours);
                setDisplayTours(data.tours);
                const count = data.count;
                const pageNumber = Math.ceil(count / size);
                setPageCount(pageNumber);
            });
    }, [page]);
    return (
        <Container>
            <div className="course-container mt-5 p-3">
                <div className="text-center text-box ">
                    <h2> Shop whatever you want the Right </h2>
                    <h1>Our latest medical items for you</h1>
                </div>
                <Row xs={1} md={2} sm={1} lg={4} className="g-1 mt-2">
                    {
                        tours.map(tour => <SingleTour
                            tour={tour}
                        ></SingleTour>)
                    }

                </Row>
                <div className="pagination">
                    {
                        [...Array(pageCount).keys()]
                            .map(number => <button
                                className={number === page ? 'selected' : ''}
                                key={number}
                                onClick={() => setPage(number)}
                            >{number + 1}</button>)
                    }
                </div>
            </div>
        </Container>
    );
};

export default Tours;