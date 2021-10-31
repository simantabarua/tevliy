import React from 'react';
import { Container, Row } from 'react-bootstrap';
import { useEffect, useState } from 'react';
import SingleTour from '../SingleTour/SingleTour';
const Tours = () => {
    const [products, setProducts] = useState([])
    const url = 'https://intense-ravine-02304.herokuapp.com/tours'
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setProducts(data)
            )
    }, [])
    return (
        <Container>
            <div className="course-container mt-5 p-3">
                <div className="text-center text-box ">
                    <h2> Shop whatever you want the Right </h2>
                    <h1>Our latest medical items for you</h1>
                </div>
                <Row xs={1} md={2} sm={1} lg={4} className="g-1 mt-2">
                    {
                        products.map(product => <SingleTour
                            product={product}
                        ></SingleTour>)
                    }
                </Row>
            </div>
        </Container>
    );
};

export default Tours;