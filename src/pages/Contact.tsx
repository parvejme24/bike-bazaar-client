import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import { Link } from "react-router";

export default function Contact() {
  return (
    <div className="bg-gray-50 py-16">
      <div className="container mx-auto max-w-7xl px-4 md:px-6">
        {/* ===== Header ===== */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Get in Touch
          </h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Have a question or want to talk about bikes? We’re here to help!
            Drop us a message and our team will get back to you shortly.
          </p>
        </div>

        {/* ===== Contact Form + Info ===== */}
        <div className="flex flex-col lg:flex-row gap-10">
          {/* ===== Contact Form ===== */}
          <div className="w-full lg:w-2/3 bg-white p-6 sm:p-8 shadow rounded-lg">
            <form className="space-y-4">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700"
                >
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  placeholder="Enter your name"
                  className="mt-1 block w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="Enter your email"
                  className="mt-1 block w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700"
                >
                  Your Message
                </label>
                <textarea
                  id="message"
                  rows={6}
                  placeholder="Write your message here..."
                  className="mt-1 block w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 px-6 rounded-lg transition"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* ===== Contact Info Section ===== */}
          <div className="w-full lg:w-1/3 space-y-6 text-gray-700">
            {/* Contact Info */}
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-xl font-semibold mb-2">Contact Info</h3>
              <p>
                <strong>Phone:</strong> +880 123 456 7890
              </p>
              <p>
                <strong>Email:</strong> support@bikebazaar.com
              </p>
              <p>
                <strong>Address:</strong> 123 Bike Lane, Dhaka, Bangladesh
              </p>
            </div>

            {/* Business Hours */}
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-xl font-semibold mb-2">Business Hours</h3>
              <p>Mon – Fri: 9:00 AM – 6:00 PM</p>
              <p>Saturday: 10:00 AM – 4:00 PM</p>
              <p>Sunday: Closed</p>
            </div>

            {/* Social Links */}
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-xl font-semibold mb-2">Follow Us</h3>
              <div className="flex items-center space-x-4 mt-2">
                <Link
                  to="#"
                  className="text-gray-300 hover:text-blue-500 transition border border-gray-700 p-2 rounded-full bg-gray-800"
                >
                  <FaFacebookF />
                </Link>
                <Link
                  to="#"
                  className="text-gray-300 hover:text-sky-400 transition border border-gray-700 p-2 rounded-full bg-gray-800"
                >
                  <FaTwitter />
                </Link>
                <Link
                  to="#"
                  className="text-gray-300 hover:text-pink-400 transition border border-gray-700 p-2 rounded-full bg-gray-800"
                >
                  <FaInstagram />
                </Link>
                <Link
                  to="#"
                  className="text-gray-300 hover:text-red-500 transition border border-gray-700 p-2 rounded-full bg-gray-800"
                >
                  <FaYoutube />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* ===== Embedded Map ===== */}
        <div className="mt-12 w-full rounded-3xl overflow-hidden">
          <div className="relative w-full h-64 sm:h-80 lg:h-[500px]">
            <iframe
              className="absolute top-0 left-0 w-full h-full rounded-3xl border-0"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2688.983595190476!2d-122.2587305844436!3d47.826367979191345!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x549010fb82b55bdf%3A0x9b4e5d7a91b7624b!2s16717%20Alderwood%20Mall%20Pkwy%20Apt%20K401%2C%20Lynnwood%2C%20WA%2098037%2C%20USA!5e0!3m2!1sen!2sus!4v1610035984427!5m2!1sen!2sus"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              aria-hidden="false"
              tabIndex={0}
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}
