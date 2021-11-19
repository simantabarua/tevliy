import { useEffect, useState } from 'react';

const useFetch = () => {
    const url = 'http://localhost:5000/tours'
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