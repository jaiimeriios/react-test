import CartItem from "./CartItem";

function Cart({ initialItems }) {
    
    const grandTotal = initialItems.reduce((total, item) => {
        return total + item.qty * item.price
    }, 0).toFixed(2)

    return (
        <div className="cart">
            <h2>cart</h2>
            {
                initialItems.map((item) => (
                    <CartItem key={item.id} {...item} />
                ))
            }
            <div>
                <h4>Grand Total: ${grandTotal}</h4>
            </div>
        </div>
    );
}

export default Cart;
