import { useState, useEffect } from "react";
import axios from "axios";

const BASE_URL = "https://workintech-fe-ecommerce.onrender.com";

const useAxios = (link) => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        let isMounted = true;

        axios.get(BASE_URL + link)
            .then((res) => {
                if (isMounted) {
                    setData(res.data);
                    console.log(res.data);
                }
            })
            .catch((err) => {
                if (isMounted) setError(err.message || "Veri alınamadı");
            })
            .finally(() => {
                if (isMounted) setLoading(false);
            });

        return () => { isMounted = false };
    }, [link]);

    return { data, loading, error };
};

export default useAxios;
