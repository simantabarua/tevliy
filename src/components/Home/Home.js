import React from 'react';
import { Container } from 'react-bootstrap';
import Slider from '../Slider/Slider';
import Responsive from '../Slider/SliderSecond';
const Home = () => {
  return (
    <div>
      <Slider></Slider>
      <Container>
        <Responsive></Responsive>
      </Container>
    </div>
  );
};

export default Home;