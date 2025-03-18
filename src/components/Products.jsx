import "./Products.css"
export default function Products() {
  const products = [
    { id: 1, name: "Product 1", price: 30 },
    { id: 2, name: "Product 2", price: 40 },
    { id: 3, name: "Product 3", price: 45 },
    { id: 4, name: "Product 4", price: 50 },
    { id: 5, name: "Product 5", price: 55 },
    { id: 6, name: "Product 6", price: 60 },
    { id: 7, name: "Product 7", price: 65 },
    { id: 8, name: "Product 8", price: 70 },
    { id: 9, name: "Product 9", price: 75 },
    { id: 10, name: "Product 10", price: 80 },

  ];
  return (
    <div>
      <div className="App-Products-Row">
        {products.map((value, index) => (
          <div className="App-Products-Box" key={index}>
            <h3>{value.name}</h3>
            <h4>{value.price}</h4>
            <button>Add to Cart</button>
            </div>
        ))}
      </div>
    </div>
  );
}