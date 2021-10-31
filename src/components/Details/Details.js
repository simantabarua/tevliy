import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const Details = () => {
    const { id } = useParams();
    const [tour, setTour] = useState({});
    const {title} = tour;
    useEffect(() => {
        const url = `http://localhost:5000/tours/details/${id}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setTour(data)
            )
    }, [])
    return (
        <div>
            detais{id}
            title{title}
        </div>
    );
};

export default Details;