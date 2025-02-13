"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "@/public/images/logo.png";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="header">
      <nav className="nav">
        {/* Left Menu */}
        <ul className="menu desktop-menu">
          <li><Link href="/">Home</Link></li>
          <li><Link href="/about">About Us</Link></li>
          <li><Link href="/services">Services</Link></li>
        </ul>

        {/* Center Logo */}
        <div className="logo">
          <Link href="/">
            <Image src={logo} alt="iBukas Energy" width={100} height={50} priority />
          </Link>
        </div>

        {/* Right Menu */}
        <ul className="menu desktop-menu">
          <li><Link href="/calculator">Calculator</Link></li>
          <li><Link href="/contact">Contact Us</Link></li>
          <li><Link href="/terms">Terms</Link></li>
        </ul>

        {/* Hamburger Button */}
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
            <Image src={logo} alt="iBukas Energy" width={120} height={60} priority />
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
