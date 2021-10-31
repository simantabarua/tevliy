import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useParams } from 'react-router';
import { useForm } from "react-hook-form";
import useFirebase from '../../hooks/useFirebase';
import './Details.css'

const Details = () => {
    const { register, handleSubmit } = useForm();
    const { user } = useFirebase();
    const onSubmit = data => console.log(data);
    const { id } = useParams();
    const [tour, setTour] = useState({});
    const { title, image, location, price, details } = tour;
    
    useEffect(() => {
        const url = `https://intense-ravine-02304.herokuapp.com/tours/details/${id}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setTour(data)
            )
    }, []);
    return (
        <Container>
            <Row>
                <Col>
                    <div>
                        <h1>Tour Details</h1>
                        <div>
                            <img src={image} alt="" />
                            <h1>Overview</h1>
                            <h3>{title}</h3>
                            <h3>Location: {location}</h3>
                            <p>{details}</p>
                        </div>
                    </div>
                </Col>
                <Col>
                    <div className='details-form '>
                        <h1>Book Tour</h1>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <label>Name</label><br />
                            <input defaultValue={user.displayName} {...register("name", { required: true, maxLength: 20 })} />
                            <label>Email</label><br />
                            <input defaultValue={user.email} type="email" placeholder="Email" {...register("Email", { required: true, pattern: /^\S+@\S+$/i })} />
                            <label>Address</label><br />
                            <input placeholder="Address" {...register("Address", { required: true, maxLength: 20 })} />
                            <label>Mobile number</label><br />
                            <input type="tel" placeholder="Mobile number" {...register("Mobile number", { required: true, minLength: 6, maxLength: 11 })} />
                            <input type="submit" value="Book Now" />
                        </form>
                    </div>
                    <div>

                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default Details;