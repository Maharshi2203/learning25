import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../Redux/cartSlice";

const ProductComponent = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.cartItems);

  const products = [
    { id: 1, name: "iPhone", price: 70000 },
    { id: 2, name: "Laptop", price: 50000 },
    { id: 3, name: "Headphones", price: 5000 },
  ];

  const handleAdd = (product) => {
    dispatch(addToCart(product));
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Products</h1>

      {products.map((item) => (
        <div key={item.id} style={{ marginBottom: "15px" }}>
          <h3>{item.name} - ₹{item.price}</h3>
          <button onClick={() => handleAdd(item)}>
            Add to Cart
          </button>
        </div>
      ))}

      <hr />
      <h2>Added Products</h2>

      {cartItems.length === 0 ? (
        <p>No products added yet.</p>
      ) : (
        cartItems.map((item, index) => (
          <div key={`${item.id}-${index}`}>
            <p>{item.name} - {item.price}</p>
          </div>
        ))
      )}
    </div>
  );
};

export default ProductComponent;
