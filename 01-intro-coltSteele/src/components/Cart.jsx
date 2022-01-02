import { useState } from 'react';
import CartItem from './CartItem';

function Cart({ initialItems }) {
    const [items, setItems] = useState(initialItems);

    const updateQty = (id, newQty) => {
        const newItems = items.map((item) => {
            if (item.id === id) {
                return { ...item, qty: newQty };
            }
            return item;
        });
        setItems(newItems);
    };

    const grandTotal = items
        .reduce((total, item) => {
            return total + item.qty * item.price;
        }, 0)
        .toFixed(2);

    return (
        <div className="cart">
            <h2>cart</h2>
            {items.map((item) => (
                <CartItem key={item.id} {...item} updateQty={updateQty} />
            ))}
            <div>
                <h4>Grand Total: ${grandTotal}</h4>
            </div>
        </div>
    );
}

export default Cart;
