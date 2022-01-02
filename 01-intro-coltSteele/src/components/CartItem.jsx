function CartItem({ id, name, price, qty }) {

    // console.log(item)

    return (
        <div className="cart-item">
            <div>Name: {name}</div>
            <div>Qty: {qty}</div>
            <div>Price: ${price}</div>
            <div>Total: ${qty * price}</div>
        </div>
    );
}

export default CartItem;
