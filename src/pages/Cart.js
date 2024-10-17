import { useContext } from 'react';
import { CartContext } from '../contexts/CartContext';
import { Link } from 'react-router-dom';

function Cart() {
  const { cart, removeFromCart, totalPrice } = useContext(CartContext);

  if (cart.length === 0) {
    return <p className="text-center mt-5">Your cart is empty.</p>;
  }

  return (
    <div className="container mt-5">
      <h1>Your Cart</h1>
      <ul className="list-group mb-3">
        {cart.map((item) => (
          <li key={item.id} className="list-group-item d-flex justify-content-between align-items-center">
            {item.name}
            <button className="btn btn-danger btn-sm" onClick={() => removeFromCart(item.id)}>Remove</button>
          </li>
        ))}
      </ul>
      <h4>Total: ${totalPrice}</h4>
      <Link to="/checkout" className="btn btn-primary">Proceed to Checkout</Link>
    </div>
  );
}

export default Cart;
