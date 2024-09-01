import { useEffect, useState } from "react";
import axios from "axios";
const customReactQuery = (urlPath) => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // (async () => {
    //   const response = await axios.get("/api/products");
    //   console.log(response.data);
    // })();
    (async () => {
      try {
        setError(false);
        setLoading(true);
        const response = await axios.get(urlPath);
        console.log(response.data);
        setProducts(response.data);
        setLoading(false);
      } catch (e) {
        setError(true);
        console.error("Error while fetching data: ", e);
        setLoading(false);
      }
    })();
  }, []);

  return { products, error, loading };
};

export default customReactQuery;
