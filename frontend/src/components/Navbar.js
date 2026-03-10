import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const Navbar = () => {
    const { cartItems } = useCart();
    const itemCount = cartItems.reduce((total, item) => total + item.quantity, 0);

    return (
        <nav className="navbar">
            <Link to="/shop" className="nav-brand">Aura Threads</Link>
            <div className="nav-links">
                <Link to="/shop">Shop</Link>
                <Link to="/cart">Cart ({itemCount})</Link>
            </div>
        </nav>
    )
}

export default Navbar;