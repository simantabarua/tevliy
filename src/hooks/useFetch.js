import { useEffect, useState } from 'react';

const useFetch = () => {
    const url = 'https://intense-ravine-02304.herokuapp.com/tours'
    const [products, setProducts] = useState([])

    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setProducts(data.tours)
            )
    }, [])
    return [products]
}

export default useFetch;