import React from 'react';
import Link from 'next/link';
import { AiOutlineShopping } from 'react-icons/ai'; 
import { Cart } from './';
import { useStateContext} from '../context/StateContext';

const Navbar = () => {
  const { showCart, setShowCart, totalQuantities } = useStateContext();

  return (
    <nav className="navbar-container">
      <Link href="/">
        <p className="logo">SmallBizMart</p>
      </Link>

      <ul className="nav-links">
        <li>
          <Link href="/">
            <p>Home</p>
          </Link>
        </li>

        <li>
          <Link href="/about">
            <p>About</p>
          </Link>
        </li>

        <li>
        <Link href="/contactus">
            <p>Contact Us</p>
          </Link>
        </li>
       
        </ul>

      <button type="button" className="cart-icon" onClick={() => setShowCart(true)}>
        <AiOutlineShopping />
        <span className="cart-item-qty2">{totalQuantities}</span>
      </button>

      {showCart && <Cart />}   

      <style jsx>{`
    .navbar-container {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 1rem;
    }

    .logo {
      font-size: 1.5rem;
      font-weight: bold;
      color: #333;
      text-decoration: none;
      cursor: pointer;
    }

    .nav-links {
      display: flex;
      list-style: none;
      margin: 0;
      padding: 0;
    }

    .nav-links li:not(:last-child) {
      margin-right: 1rem;
    }

    .nav-links a {
      font-size: 1rem;
      color: #333;
      text-decoration: none;
      cursor: pointer;
    }

    .nav-links a:hover {
      color: #000;
    }

    .cart-icon {
      display: flex;
      align-items: center;
      justify-content: center;
      border: none;
      background-color: transparent;
      cursor: pointer;
      font-size: 1.5rem;
      color: #333;
      margin-left: 1rem;
    }

    .cart-item-qty {
      display: inline-block;
      font-size: 0.8rem;
      color: #fff;
      background-color: #333;
      border-radius: 50%;
      width: 1.5rem;
      height: 1.5rem;
      text-align: center;
      line-height: 1.5rem;
      margin-left: 0.5rem;
    }

    @media (max-width: 768px) {
      .nav-links {
        flex-direction: row;
        align-items: center;
        margin-top: 1rem;
      }

      .nav-links li:not(:last-child) {
        margin-right: 0;
        margin-bottom: 1rem;
      }

      .cart-icon {
        margin-left: 0;
      }
    }
      `}</style>
    </nav>
    
  );
};

export default Navbar;