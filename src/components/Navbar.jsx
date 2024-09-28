import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { CartContext } from '../context/CartContext'; 
import { UserContext } from '../context/UserContext'; 
import './Navbar.css';

function Navbar() {
  const { getTotalFormatted } = useContext(CartContext);
  const { token, logout } = useContext(UserContext); 

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <h1>Pizzería Mamma Mía</h1>
      </div>
      <div className="navbar-right">
        {/* Botones que siempre deben estar visibles */}
        <Link to="/" className="nav-link">Inicio</Link>
        <Link to="/cart" className="custom-cart-btn">
          Total: ${getTotalFormatted()}
        </Link>

        {/* Mostrar botones según el estado del token */}
        {token ? (
          <>
            <Link to="/profile" className="nav-link">Perfil</Link>
            <button onClick={logout} className="nav-link">
              Cerrar Sesión
            </button>
          </>
        ) : (
          <>
            <Link to="/login" className="nav-link">Iniciar Sesión</Link>
            <Link to="/register" className="nav-link">Registrarse</Link>
          </>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
