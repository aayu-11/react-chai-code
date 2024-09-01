import "./App.css";
import { useEffect, useState } from "react";
import axios from "axios";
// import useCustomReactQuery from "./hooks/customReactQuery";

function App() {
  // const { products, error, loading } = useCustomReactQuery("/api/products");
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState("Tablet");

  useEffect(() => {
    const controller = new AbortController(); // AbortController is used to avoid race conditions
    // (async () => {
    //   const response = await axios.get("/api/products");
    //   console.log(response.data);
    // })();
    debounce(async () => {
      try {
        setError(false);
        setLoading(true);
        const response = await axios.get("/api/products?search=" + search, {
          signal: controller.signal,
        });
        console.log(response.data);
        setProducts(response.data);
        setLoading(false);
      } catch (e) {
        if (axios.isCancel(e)) {
          console.log("Request cancelled: ", e.message);
          return;
        }
        setError(true);
        console.error("Error while fetching data: ", e);
        setLoading(false);
      }
    }, 500)();
    // cleanup function
    return () => {
      controller.abort();
    };
  }, [search]);

  return (
    <>
      <h1>Chai aur api in react</h1>
      <input
        type="text"
        placeholder="Search..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      {error && <h1>Something went wrong!</h1>}
      {loading && <h1>Loading...</h1>}

      <h2>Number of Products are: {products.length}</h2>
    </>
  );
}

export default App;
function debounce(func, delay) {
  let timeoutId;
  return function (...args) {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      func.apply(this, args);
    }, delay);
  };
}
