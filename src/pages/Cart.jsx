import { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import { UserContext } from '../context/UserContext'; 
import './Cart.css';

const Cart = () => {
  const { cartItems, addToCart, removeFromCart, getTotalFormatted } = useContext(CartContext);
  const { token } = useContext(UserContext); 
  return (
    <div className="cart-container">
      <h1>Carrito de Compras</h1>
      {cartItems.length === 0 ? (
        <p>Tu carrito está vacío</p>
      ) : (
        cartItems.map((pizza) => (
          <div key={pizza.id} className="cart-item">
            <img src={pizza.img} alt={pizza.name} className="pizza-image" />
            <div className="pizza-details">
              <h2>{pizza.name}</h2>
              <p>Precio: ${pizza.price}</p>
              <p>Cantidad: {pizza.count}</p>
              <div className="quantity-controls">
                <button onClick={() => removeFromCart(pizza.id)}>-</button>
                <button onClick={() => addToCart(pizza)}>+</button>
              </div>
            </div>
          </div>
        ))
      )}
      <h2>Total: ${getTotalFormatted()}</h2>

      {/* Botón "Pagar", deshabilitado si el token es false */}
      <button className="checkout-btn" disabled={!token}>
        {token ? "Pagar" : "Inicia sesión para pagar"}
      </button>
    </div>
  );
};

export default Cart;
