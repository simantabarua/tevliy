import { useEffect, useState } from 'react';

const useFetch = () => {
    const url = 'https://intense-ravine-02304.herokuapp.com/tours'
    const [tours, setTours] = useState([])

    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setTours(data.tours)
            )
    }, [])
    return [tours]
}

export default useFetch;