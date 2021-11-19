
import React from "react";
import {Button, Badge, Card, ListGroup, Spinner } from "react-bootstrap";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import useFetch from "../../hooks/useFetch";



const SliderSecond = () => {
  const [tours] = useFetch();
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <div>
      <h1 className="text-center mt-5"> Go Exotic Places </h1>
      {(!tours.length) ? <div className='text-center p-5'>
        <Spinner animation="border" /></div> :
        <Slider {...settings}>
          {
            tours.map(tour => <Card style={{ width: '18rem' }} className="custom-cart">
              <Card.Img variant="top" src={tour.image} />
              <Card.Body>
                <Card.Title>{tour.title}</Card.Title>
                <Card.Text>
                </Card.Text>
                <ListGroup variant="flush" >
                  <ListGroup.Item> Location: <Badge pill bg="primary">{tour.Imglocation}</Badge></ListGroup.Item>
                  <ListGroup.Item>Price: ${tour.price} </ListGroup.Item>
                  <ListGroup.Item>{tour.day} days </ListGroup.Item>
                </ListGroup>
              </Card.Body>
              <Card.Footer className="text-center card-footer">
                <Link to={`/tour_details/${tour._id}`} className="text-light"> <Button variant="primary" >Details</Button></Link>
              </Card.Footer>
            </Card>)
          }
        </Slider>
      }
    </div>
  );
}

export default SliderSecond;