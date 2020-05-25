import React from "react";

const CartItem = ({ id, name, price, qty, updateQty }) => {

  const addOne = () => updateQty(id, qty + 1);
  const subOne = () => updateQty(id, qty - 1);

  return (
    <div className="cartItem">
      <div>{name}</div>
      <div>{price}</div>
      <div>
        <button onClick={subOne} disabled={qty < 1 ? true : false}>-</button>
        {qty}
        <button onClick={addOne}>+</button>
      </div>
      <div>Total: ${qty * price}</div>
    </div>
  );
};

export default CartItem;
