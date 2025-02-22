import { useState } from "react";
import { Link } from "react-router-dom";
import { FiShoppingCart } from "react-icons/fi";
import { motion } from "framer-motion";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-gray-900 text-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="text-2xl font-bold">
            <Link to="/">Bike Blazer</Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6">
            {["Home", "Products", "Contact", "FAQ", "About"].map((item) => (
              <Link
                key={item}
                to={`/${item.toLowerCase()}`}
                className="hover:text-yellow-400 transition duration-300"
              >
                {item}
              </Link>
            ))}
          </div>

          {/* Right Side - Login & Cart */}
          <div className="hidden md:flex items-center space-x-4">
            <Link to="/cart" className="relative">
              <FiShoppingCart size={24} />
              <span className="absolute -top-2 -right-2 bg-red-500 text-xs text-white px-2 py-1 rounded-full">
                2 {/* Change this with cart item count */}
              </span>
            </Link>
            <Link
              to="/login"
              className="px-4 py-2 bg-yellow-500 text-black rounded-lg hover:bg-yellow-600 transition duration-300"
            >
              Login
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={toggleMenu} className="focus:outline-none">
              {isOpen ? (
                <svg
                  className="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu with Animation */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="md:hidden bg-gray-800"
        >
          <div className="px-4 py-3 space-y-2">
            {["Home", "Products", "Contact", "FAQ", "About"].map((item) => (
              <Link
                key={item}
                to={`/${item.toLowerCase()}`}
                className="block text-white hover:text-yellow-400 transition duration-300"
              >
                {item}
              </Link>
            ))}
            <Link
              to="/login"
              className="block bg-yellow-500 text-black py-2 text-center rounded-lg hover:bg-yellow-600 transition duration-300"
            >
              Login
            </Link>
            <Link
              to="/cart"
              className="flex items-center justify-center space-x-2 text-white hover:text-yellow-400"
            >
              <FiShoppingCart size={20} />
              <span>Cart (2)</span>
            </Link>
          </div>
        </motion.div>
      )}
    </nav>
  );
}
