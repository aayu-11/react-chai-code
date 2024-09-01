import express from "express";

const app = express();

const PORT = process.env.PORT || 3000;

app.get("/api/products", (req, res) => {
  const products = [
    // Dummy data
    {
      id: 1,
      name: "Laptop",
      price: 500,
      description: "New Macbook Pro",
    },
    {
      id: 2,
      name: "Mobile",
      price: 200,
      description: "New Iphone",
    },
    {
      id: 3,
      name: "Tablet",
      price: 100,
      description: "New Ipad",
    },
    {
      id: 4,
      name: "Watch",
      price: 50,
      description: "New Apple Watch",
    },
  ];

  if (req.query.search) {
    const fileteredProducts = products.filter((product) =>
      product.name.includes(req.query.search)
    );
    res.send(fileteredProducts);
    return;
  }

  setTimeout(() => {
    res.send(products);
  }, 3000);
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
