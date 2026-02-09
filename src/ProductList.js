import React, { useContext } from "react";
import { CartContext } from "./CartContext";

function ProductList() {
  const { dispatch } = useContext(CartContext);

  const products = [
    { id: 1, name: "Laptop", price: 500 },
    { id: 2, name: "Phone", price: 300 },
  ];

  return (
    <div>
      <h3>Products</h3>

      {products.map((product) => (
        <div key={product.id}>
          <p>
            {product.name} - ${product.price}
          </p>
          <button
            onClick={() =>
              dispatch({
                type: "ADD_ITEM",
                payload: { ...product, quantity: 1 },
              })
            }
          >
            Add to Cart
          </button>
        </div>
      ))}
    </div>
  );
}

export default ProductList;
