import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";
import { HiOutlinePhone } from "react-icons/hi";
import { HiOutlineEnvelope } from "react-icons/hi2";
import { LuMapPin } from "react-icons/lu";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto max-w-7xl px-6 py-20 lg:px-0 grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Logo & Description */}
        <div>
          <h2 className="text-2xl font-bold text-blue-400">Bike Bazaar</h2>
          <p className="mt-2 text-sm text-gray-300">
            Your trusted bike marketplace for buying, selling, and discovering
            amazing rides.
          </p>
          <div className="flex space-x-2 mt-4 text-xl">
            <Link
              to="#"
              className="text-gray-300 hover:text-blue-400 transition border border-gray-700 p-2 rounded-full bg-gray-800"
            >
              <FaFacebookF />
            </Link>
            <Link
              to="#"
              className="text-gray-300 hover:text-blue-400 transition border border-gray-700 p-2 rounded-full bg-gray-800"
            >
              <FaTwitter />
            </Link>
            <Link
              to="#"
              className="text-gray-300 hover:text-blue-400 transition border border-gray-700 p-2 rounded-full bg-gray-800"
            >
              <FaInstagram />
            </Link>
            <Link
              to="#"
              className="text-gray-300 hover:text-blue-400 transition border border-gray-700 p-2 rounded-full bg-gray-800"
            >
              <FaYoutube />
            </Link>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold mb-3 text-blue-300">
            Quick Links
          </h3>
          <ul className="space-y-2 text-gray-400">
            <li>
              <Link to="/" className="hover:text-white duration-300">
                Home
              </Link>
            </li>
            <li>
              <Link to="/products" className="hover:text-white duration-300">
                All Bikes
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-white duration-300">
                About Us
              </Link>
            </li>
            <li>
              <Link to="/login" className="hover:text-white duration-300">
                Login
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-xl font-semibold mb-3 text-blue-300">Contact</h3>
          <div className="space-y-2">
            <p className="text-gray-400 text-sm flex items-center gap-2">
              <LuMapPin className="text-xl" /> Bashundhara, Dhaka, Bangladesh
            </p>
            <p className="text-gray-400 text-sm flex items-center gap-2">
              <HiOutlinePhone className="text-xl" /> +880 123 456 789
            </p>
            <p className="text-gray-400 text-sm flex items-center gap-2">
              <HiOutlineEnvelope className="text-xl" /> support@bikebazaar.com
            </p>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-700 py-5 text-center text-sm text-gray-400">
        &copy; {new Date().getFullYear()} Bike Bazaar. All rights reserved.
      </div>
    </footer>
  );
}
