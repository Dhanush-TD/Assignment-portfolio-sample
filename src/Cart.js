import React, { useContext } from "react";
import { CartContext } from "./CartContext";

function Cart() {
  const { state, dispatch } = useContext(CartContext);

  return (
    <div>
      <h3>Cart Items</h3>

      {state.cartItems.length === 0 && <p>Cart is empty</p>}

      {state.cartItems.map((item) => (
        <div key={item.id}>
          <p>
            {item.name} - Qty:
            <input
              type="number"
              min="1"
              value={item.quantity}
              onChange={(e) =>
                dispatch({
                  type: "UPDATE_QUANTITY",
                  payload: {
                    id: item.id,
                    quantity: Math.max(1, Number(e.target.value)),
                  },
                })
              }
            />
          </p>

          <button
            onClick={() =>
              dispatch({ type: "REMOVE_ITEM", payload: item.id })
            }
          >
            Remove
          </button>
        </div>
      ))}
    </div>
  );
}

export default Cart;
