import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useHistory, useParams } from 'react-router';
import { useForm } from "react-hook-form";
import useFirebase from '../../hooks/useFirebase';
import './Details.css'
import swal from 'sweetalert';

const Details = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const { user } = useFirebase();
    const { id } = useParams();
    const [tour, setTour] = useState({});
    const history = useHistory();
    const { title, image, location, price, details } = tour;

    useEffect(() => {
        const url = `https://tevliy-sever.vercel.app/tours/details/${id}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setTour(data)
            )
    }, []);

    const onSubmit = (data) => {
        data.title = title;
        data.status = "pending";
        data.image = image;
        data.price = price;

        fetch("https://tevliy-sever.vercel.app/placeOrder", {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(data),
        })
            .then((res) => res.json())
            .then(data => {
                console.log(data);

                if (data.acknowledged) {
                    swal("Order Place Success", {
                        icon: "success",
                    });
                    history.push('/myOrders')
                }

            });
    }
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
                            {errors.name &&
                                (<p>Name is required</p>)
                            }
                            <label>Email</label><br />
                            <input defaultValue={user.email} type="email" placeholder="Email" {...register("email", { required: true, pattern: /^\S+@\S+$/i })} />
                            {errors.email &&
                                (<p>Email is required</p>)
                            }

                            <label>Address</label><br />
                            <input placeholder="Address" {...register("address", { required: true, maxLength: 20 })} />
                            {errors.address &&
                                (<p>Address is required</p>)
                            }
                            <label>Mobile number</label><br />
                            <input type="tel" placeholder="Mobile Number" {...register("phone", { required: true, minLength: 11, maxLength: 11 })} />
                            {errors.address &&
                                (<p>Mobile number must be 11 character long</p>)
                            }
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