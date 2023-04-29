import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import  "./Destination.css";
import dest_img1 from "./../../assets/destination/destination1.jpg";
import dest_img2 from "./../../assets/destination/destination2.jpg";
import dest_img3 from "./../../assets/destination/destination3.jpg";
import dest_img4 from "./../../assets/destination/destination4.jpg";
import dest_img5 from "./../../assets/destination/destination5.jpg";

const destImages = [
  {
    id: 1,
    src: dest_img1,
    alt: "Spain",
  },
  {
    id: 2,
    src: dest_img2,
    alt: "Dubai",
  },
  {
    id: 3,
    src: dest_img3,
    alt: "Thailand",
  },
  {
    id: 4,
    src: dest_img4,
    alt: "Australia",
  },
  {
    id: 5,
    src: dest_img5,
    alt: "Singapore",
  },
];

const Destination = () => {
  return (
    <div>
      <Container>
        <div >
          <h2 className="text-center mt-5" >Find Your Destination</h2>
        </div>
        <div>
          <Row
            xs={1}
            sm={2}
            md={3}
            lg={4}
            xl={5}
            className={`g-3 mt-2 text-center`}
          >
            {destImages.map(({ id, src, alt }) => (
              <Col key={id}>
                <Card className="custom-cart-2">
                  <Card.Img variant="top" src={src} />
                  <Card.Body>
                    <Card.Title>{alt }</Card.Title>
                    <Card.Text className="text-muted"></Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </div>
      </Container>
    </div>
  );
};

export default Destination;
