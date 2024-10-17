import { useContext } from 'react';
import { CartContext } from '../contexts/CartContext';

function Checkout() {
  const { cart, totalPrice } = useContext(CartContext);

  const handleCheckout = () => {
    alert('Thank you for your purchase!');
  };

  return (
    <div className="container mt-5">
      <h1>Checkout</h1>
      <ul className="list-group mb-3">
        {cart.map((item) => (
          <li key={item.id} className="list-group-item">
            {item.name} - ${item.price}
          </li>
        ))}
      </ul>
      <h4>Total: ${totalPrice}</h4>
      <button className="btn btn-success" onClick={handleCheckout}>
        Confirm Purchase
      </button>
    </div>
  );
}

export default Checkout;
