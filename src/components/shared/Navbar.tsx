// components/Navbar.tsx
import { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Products", path: "/products" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav className="bg-[#1E2A38] text-white py-3 shadow-md sticky top-0 z-50">
      <div className="container mx-auto max-w-7xl px-6 lg:px-0 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="text-xl font-bold">
          🏍️ BikeShop
        </Link>

        {/* Desktop Nav */}
        <ul className="hidden md:flex gap-6 text-sm font-medium">
          {navLinks.map((link) => (
            <li key={link.path}>
              <Link
                to={link.path}
                className="hover:text-[#FFD700] transition-colors"
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Login Button */}
        <Link
          to="/login"
          className="hidden md:inline-block bg-[#FFD700] text-[#1E2A38] px-4 py-2 rounded-md font-semibold hover:bg-[#E6C200] transition"
        >
          Login
        </Link>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-xl focus:outline-none py-2"
        >
          {open ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Nav */}
      {open && (
        <div className="md:hidden mt-3 space-y-2 bg-[#1E2A38] p-4 rounded-md">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className="block text-white hover:text-[#FFD700] transition-colors"
              onClick={() => setOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <Link
            to="/login"
            className="block bg-[#FFD700] text-[#1E2A38] text-center py-2 rounded-md font-medium mt-2 hover:bg-[#E6C200]"
            onClick={() => setOpen(false)}
          >
            Login
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
