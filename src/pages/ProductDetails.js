import { useParams } from 'react-router-dom';
import { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { CartContext } from '../contexts/CartContext';

function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const { addToCart } = useContext(CartContext);

  useEffect(() => {
    axios.get('/products.json')
      .then(response => {
        const foundProduct = response.data.find(p => p.id === parseInt(id));
        setProduct(foundProduct);
      })
      .catch(error => console.error('Error fetching product details:', error));
  }, [id]);

  if (!product) return <p>Loading...</p>;

  return (
    <div className="container mt-5">
      <h1>{product.name}</h1>
      <img src={product.image} alt={product.name} className="img-fluid" />
      <p>Price: ${product.price}</p>
      <button className="btn btn-success" onClick={() => addToCart(product)}>
        Add to Cart
      </button>
    </div>
  );
}

export default ProductDetails;
