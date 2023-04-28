import React from 'react';
import { Badge, Button, Card, Col, ListGroup } from 'react-bootstrap';
import './SingleTour.css'
import { Link } from 'react-router-dom';


const SingleTour = (props) => {
    const { _id, title, image, location, price, day } = props.tour;
    return (
        <div>
            <Col>
                <Card style={{ width: '18rem' }} className="custom-cart m-5">
                    <Card.Img variant="top" src={image} />
                    <Card.Body>
                        <Card.Title>{title}</Card.Title>
                        <Card.Text>
                        </Card.Text>
                        <ListGroup variant="flush" >
                            <ListGroup.Item> Location: <Badge pill bg="primary">{location}</Badge></ListGroup.Item>
                            <ListGroup.Item>Price: ${price} </ListGroup.Item>
                            <ListGroup.Item>{day} days </ListGroup.Item>
                        </ListGroup>
                    </Card.Body>
                    <Card.Footer className="text-center card-footer">
                        <Link to={`/tour_details/${_id}`} className="text-light"> <Button variant="primary" >Details</Button></Link>
                    </Card.Footer>
                </Card>
            </Col>
        </div>
    );
};

export default SingleTour;