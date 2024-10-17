import { createContext, useState } from 'react';

// إنشاء السياق
export const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  // إضافة منتج إلى العربة
  const addToCart = (product) => {
    setCart((prevCart) => [...prevCart, product]);
  };

  // إزالة منتج من العربة
  const removeFromCart = (productId) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== productId));
  };

  // حساب المجموع الكلي
  const totalPrice = cart.reduce((total, item) => total + item.price, 0);

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, totalPrice }}>
      {children}
    </CartContext.Provider>
  );
}
