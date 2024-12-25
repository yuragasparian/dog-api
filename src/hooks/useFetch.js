import { useEffect, useState } from "react";

export default function useFetch(url) {
    const [data, setData] = useState(null); // Holds fetched data
    const [loading, setLoading] = useState(true); // Tracks loading state
    const [error, setError] = useState(null); // Tracks errors, if any

    useEffect(() => {
        setLoading(true); // Start loading
        fetch(url)
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Network response was not ok");
                }
                return response.json();
            })
            .then((data) => {
                setData(data); // Store fetched data
                setLoading(false); // Stop loading
            })
            .catch((err) => {
                setError(err.message); // Handle errors
                setLoading(false); // Stop loading
            });
    }, [url]); // Dependency array includes the URL

    return { data, loading, error }; // Return state variables
}
