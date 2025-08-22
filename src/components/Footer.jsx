import Link from "next/link";
import React from "react";
import { FaFacebook, FaLinkedin, FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-base-300 text-base-content p-10 mt-12">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Company Info & Logo */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <h2 className="text-3xl font-bold mb-2 text-primary">NextMart</h2>
            <p className="text-sm text-base-content/80">
              Your one-stop shop for everything you need.
              <br />
              Providing reliable service since 2023.
            </p>
          </div>

          {/* Navigation Links */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <nav className="flex flex-col space-y-2">
              <Link href="/" className="link link-hover">Home</Link>
              <Link href="/about" className="link link-hover">About Us</Link>
              <Link href="/products" className="link link-hover">Products</Link>
              <Link href="/contact" className="link link-hover">Contact</Link>
            </nav>
          </div>

          {/* Social Media Links */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="font-semibold text-lg mb-4">Follow Us</h3>
            <div className="grid grid-flow-col gap-4">
              <a href="https://www.facebook.com/mdalrasel" aria-label="Facebook">
                <FaFacebook size={25}/>
              </a>
              <a href="https://x.com/md_alrasel" aria-label="Twitter">
                <FaTwitter size={25}/>
              </a>
              <a href="https://www.linkedin.com/in/md-al-rasel/" aria-label="LinkedIn">
                <FaLinkedin size={25}/>
              </a>
            </div>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="border-t border-base-content/10 mt-8 pt-6 text-center">
          <p className="text-sm text-base-content/70">Copyright © 2023 - All rights reserved by NextMart Ltd.</p>
        </div>
      </div>
    </footer>
  );
}
