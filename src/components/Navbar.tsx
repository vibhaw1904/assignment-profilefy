import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";
type NavbarProps = {};

const Navbar: React.FC<NavbarProps> = () => {
  return (
    <nav className="sticky top-0 z-10 block w-full max-w-full  text-white bg-white border rounded-none shadow-md h-max border-white/80 bg-opacity-80 backdrop-blur-2xl backdrop-saturate-200 lg:px-8 lg:py-4">
      <div className="flex items-center justify-between text-blue-gray-900">
        <a
          href="#"
          className="mr-4 block cursor-pointer py-1.5 font-sans text-lg  font-medium leading-relaxed text-inherit antialiased text-black"
        >
          Shop
        </a>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-x-1 text-blue-500 cursor-pointer text-xl ">
            <Link to={'/cart'}> <FaShoppingCart className="w-10 h-7" />
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
