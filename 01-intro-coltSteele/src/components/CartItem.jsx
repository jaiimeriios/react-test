function CartItem({ id, name, price, qty, updateQty }) {

    const add = () => {
        updateQty(id, qty + 1);
    };
    const sub = () => {
        updateQty(id, qty - 1);
    };

    return (
        <div className="cart-item">
            <div>{name}</div>
            <div>
                <button onClick={sub} disabled={qty < 1}>-</button>
                {qty}
                <button onClick={add}>+</button>
            </div>
            <div>Price: ${(price).toFixed(2)}</div>
            <div>Total: ${(qty * price).toFixed(2)}</div>
        </div>
    );
}

export default CartItem;
