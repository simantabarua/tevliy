import React from 'react';
import { Container } from 'react-bootstrap';
import Destination from '../Destination/Destination';
import Slider from '../Slider/Slider';
import SliderSecond from '../Slider/SliderSecond';
const Home = () => {
  return (
    <div>
      <Slider></Slider>
      <Container>
        <SliderSecond></SliderSecond>
        <Destination></Destination>
      </Container>
    </div>
  );
};

export default Home;