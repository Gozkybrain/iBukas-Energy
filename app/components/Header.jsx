"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="header">
      <nav className="nav">
        {/* Desktop Menu */}
        <ul className="menu desktop-menu">
          <li><Link href="/">Home</Link></li>
          <li><Link href="/about">About Us</Link></li>
          <li><Link href="/services">Services</Link></li>
        </ul>

        {/* Logo Centered */}
        <div className="logo">
          <Link href="/">
            <Image src="/logo.png" alt="iBukas Energy" width={100} height={50} />
          </Link>
        </div>

        {/* Right Side Menu */}
        <ul className="menu desktop-menu">
          <li><Link href="/calculator">Calculator</Link></li>
          <li><Link href="/contact">Contact Us</Link></li>
          <li><Link href="/terms">Terms</Link></li>
        </ul>

        {/* Hamburger Menu Button */}
        <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
          ☰
        </button>
      </nav>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${menuOpen ? "animate__animated animate__slideInLeft open" : ""}`}>
        <button className="close-btn" onClick={() => setMenuOpen(false)}>✖</button>

        {/* Logo in Mobile Menu */}
        <div className="mobile-logo">
          <Link href="/">
            <Image src="/logo.png" alt="iBukas Energy" width={120} height={60} />
          </Link>
        </div>

        <ul className="mobile-links">
          <li><Link href="/">Home</Link></li>
          <li><Link href="/about">About Us</Link></li>
          <li><Link href="/services">Services</Link></li>
          <li><Link href="/calculator">Calculator</Link></li>
          <li><Link href="/contact">Contact Us</Link></li>
          <li><Link href="/terms">Terms</Link></li>
        </ul>
      </div>
    </header>
  );
}
