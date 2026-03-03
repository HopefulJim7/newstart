import React from 'react';

export default function Contact() {
  return (
    <div className="space-y-20 max-w-3xl mx-auto">

      {/* Contact Us Title (centered) */}
      <div className="text-center">
        <h1 className="text-3xl font-bold mb-4">Contact Us</h1>
        <p className="text-gray-700 max-w-xl mx-auto">
          Have questions or need support? Reach out to us anytime.
        </p>
      </div>

      {/* Contact Form (centered) */}
      <div className="text-center">
        <h2 className="text-xl font-semibold mb-4">Send Us a Message</h2>

        <form className="space-y-4 w-full max-w-lg mx-auto">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full border p-3 rounded"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full border p-3 rounded"
          />
          <textarea
            placeholder="Your Message"
            className="w-full border p-3 rounded h-32"
          ></textarea>

          <button className="bg-green-700 text-white px-6 py-3 rounded hover:bg-green-800">
            Send Message
          </button>
        </form>
      </div>

      {/* Live Chat Section */}
      <div className="bg-white p-8 shadow rounded max-w-lg mx-auto text-center">
        <h2 className="text-xl font-semibold mb-3">Live Chat</h2>
        <p className="text-gray-600 mb-4">
          Our support team is available to chat with you in real-time.
        </p>

        <button className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700">
          Start Live Chat
        </button>
      </div>

      {/* Contact Info */}
      <div className="text-center space-y-3">
        <h2 className="text-xl font-semibold">Reach Us Directly</h2>

        <p>
          <strong>Email:</strong>{' '}
          <a
            href="mailto:support@newstart.com"
            className="text-green-700 hover:underline"
          >
            support@newstart.com
          </a>
        </p>

        <p>
          <strong>Phone:</strong>{' '}
          <a
            href="tel:+254700000000"
            className="text-green-700 hover:underline"
          >
            +254 700 000 000
          </a>
        </p>

        <p><strong>Location:</strong> Nairobi, Kenya</p>
      </div>

      {/* Social Media Section */}
      <div className="text-center">
        <h2 className="text-xl font-semibold mb-4">Connect With Us</h2>
        <p className="text-gray-600 mb-6">
          Follow us on social media for updates, offers, and wellness tips.
        </p>

        <div className="flex justify-center items-center gap-10 text-4xl">

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

        </div>
      </div>

    </div>
  );
}