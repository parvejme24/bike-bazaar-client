import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-10 mt-10">
      <div className="container mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {/* Logo & Description */}
          <div>
            <h3 className="text-3xl font-bold text-primary">Bike Blazer</h3>
            <p className="text-gray-300 mt-3">
              Journey begins! As avid cyclists ourselves, we cherish the joy and
              freedom that comes from pedaling on two wheels.
            </p>
          </div>

          {/* Company Section */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link to={"/about"} className="hover:text-primary">
                  About Us
                </Link>
              </li>
              <li>
                <Link to={"/contact"} className="hover:text-primary">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link to={"/products"} className="hover:text-primary">
                  Our Products
                </Link>
              </li>
              <li>
                <Link to={"/bikes"} className="hover:text-primary">
                  All Bikes
                </Link>
              </li>
              <li>
                <Link to={"/categories"} className="hover:text-primary">
                  Category
                </Link>
              </li>
            </ul>
          </div>

          {/* Support Section */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Support</h3>
            <ul className="space-y-2">
              <li>
                <Link to={"/faq"} className="hover:text-primary">
                  FAQ
                </Link>
              </li>
              <li>
                <Link to={"/shipping"} className="hover:text-primary">
                  Shipping Policy
                </Link>
              </li>
              <li>
                <Link to={"/returns"} className="hover:text-primary">
                  Return Policy
                </Link>
              </li>
              <li>
                <Link to={"/terms"} className="hover:text-primary">
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link to={"/privacy"} className="hover:text-primary">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Media Section */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a
                href="https://facebook.com"
                target="_blank"
                className="p-3 bg-gray-700 rounded-full hover:bg-primary transition"
              >
                <FaFacebookF />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                className="p-3 bg-gray-700 rounded-full hover:bg-primary transition"
              >
                <FaTwitter />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                className="p-3 bg-gray-700 rounded-full hover:bg-primary transition"
              >
                <FaInstagram />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                className="p-3 bg-gray-700 rounded-full hover:bg-primary transition"
              >
                <FaLinkedinIn />
              </a>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="text-center text-gray-400 mt-10 border-t border-gray-700 pt-5">
          <p>© {new Date().getFullYear()} Bike Blazer. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}
