import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useCart } from "../context/Context";

type NavbarProps = {};

const Navbar: React.FC<NavbarProps> = () => {
  const { cart } = useCart();

  return (
    <nav className="sticky top-0 z-10 w-full bg-white shadow-md border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link
            to="/"
            className="flex-shrink-0 font-sans text-xl font-semibold text-indigo-600 hover:text-indigo-500 transition-colors duration-300"
          >
            Shop
          </Link>
          <div className="flex items-center">
            <Link to="/cart" className="relative group">
              <FaShoppingCart className="w-9 h-10 text-gray-600 group-hover:text-indigo-600 transition-colors duration-300" />
              {cart.length > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center transition-all duration-300 transform group-hover:scale-110">
                  {cart.length}
                </span>
              )}
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;