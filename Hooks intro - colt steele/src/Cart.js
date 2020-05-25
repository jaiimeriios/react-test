import React, { useState } from "react";
import CartItem from "./CartItem";

const Cart = ({ initialItems }) => {

  const [items, setItems] = useState(initialItems);

  const updateQty = (id, newQty) => {
    const newItems = items.map(item => {
      if(item.id === id){
        return{...item, qty: newQty}
      }
      return item
    })
    setItems(newItems)
  }

  const grandTotal = items
    .reduce((total, item) => total + item.qty * item.price, 0)
    .toFixed(2);

  return (
    <div className="cart">
      <h4>Cart</h4>

      <div className="cart-items">
        {items.map((item) => (
          <CartItem key={item.id} updateQty={updateQty} {...item} />
        ))}
      </div>

      <h5>Total: ${grandTotal}</h5>
    </div>
  );
};

export default Cart;
