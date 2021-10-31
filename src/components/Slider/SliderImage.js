import React from 'react';

const SliderImage = (props) => {
    const {image,title} = props.tour;
    
    return (
        <div className="sliderImage">
            <img src={image} alt="" />
            <p>{title}</p>
        </div>
    );
};

export default SliderImage;