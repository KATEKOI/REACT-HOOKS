import React, { useEffect, useState } from 'react'
// custom export
export const useFetch = (url) => {

    const [loading, setLoading] = useState(true);
    const [people, setPeople] = useState([]);

    const getPeople = async () => {

        const response = await fetch(url);
        const data = await response.json();

        setTimeout(() => {
            setLoading(false);
            setPeople(data)
        }, 2000);
    }
    useEffect(() => {
        getPeople();
    },[url])
    // we are not returning a div but an object
  return { loading , people}
}

