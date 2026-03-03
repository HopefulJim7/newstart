import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-green-800 text-white mt-10 py-10">
      <div className="container grid grid-cols-1 md:grid-cols-4 gap-10">

        {/* Brand */}
        <div>
          <h2 className="text-xl font-bold mb-3">Newstart</h2>
          <p className="text-gray-200">
            Natural remedies for a healthier lifestyle.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2">
            <li><Link to="/" className="hover:text-gray-300">Home</Link></li>
            <li><Link to="/about" className="hover:text-gray-300">About Us</Link></li>
            <li><Link to="/contact" className="hover:text-gray-300">Contact</Link></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="font-semibold mb-3">Contact</h3>

          <p>
            <a
              href="mailto:support@newstart.com"
              className="hover:text-gray-300 transition"
            >
              support@newstart.com
            </a>
          </p>

          <p>
            <a
              href="tel:+254700000000"
              className="hover:text-gray-300 transition"
            >
              +254 700 000 000
            </a>
          </p>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="font-semibold mb-3">Follow Us</h3>
          <div className="flex items-center gap-5 text-2xl">

            {/* Facebook */}
            <a
              href="https://facebook.com"
              target="_blank"
              className="transition hover:text-[#1877F2]"
            >
              <i className="fab fa-facebook"></i>
            </a>

            {/* Instagram */}
            <a
              href="https://instagram.com"
              target="_blank"
              className="transition hover:text-[#E4405F]"
            >
              <i className="fab fa-instagram"></i>
            </a>

            {/* Twitter / X */}
            <a
              href="https://twitter.com"
              target="_blank"
              className="transition hover:text-[#1DA1F2]"
            >
              <i className="fab fa-twitter"></i>
            </a>

            {/* WhatsApp */}
            <a
              href="https://wa.me/254700000000"
              target="_blank"
              className="transition hover:text-[#25D366]"
            >
              <i className="fab fa-whatsapp"></i>
            </a>

            {/* YouTube */}
            <a
              href="https://youtube.com"
              target="_blank"
              className="transition hover:text-[#FF0000]"
            >
              <i className="fab fa-youtube"></i>
            </a>

          </div>
        </div>

      </div>

      <div className="text-center text-gray-300 mt-10">
        © {new Date().getFullYear()} Newstart. All rights reserved.
      </div>
    </footer>
  );
}