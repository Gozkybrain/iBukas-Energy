"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import logo from "@/public/images/logo.png";

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);
    const pathname = usePathname();

    return (
        <header className="header">
            <nav className="nav">
                {/* Left Menu */}
                <ul className="menu desktop-menu">
                    <li className={pathname === "/" ? "active" : ""}>
                        <Link href="/">Home</Link>
                    </li>
                    <li className={pathname === "/about" ? "active" : ""}>
                        <Link href="/about">About Us</Link>
                    </li>
                </ul>

                {/* Center Logo */}
                <div className="logo-box">
                    <Link href="/">
                        <Image src={logo} alt="iBukas Energy" className="logo" priority />
                    </Link>
                </div>

                {/* Right Menu */}
                <ul className="menu desktop-menu">
                    <li className={pathname === "/calculator" ? "active" : ""}>
                        <Link href="/calculator">Calculator</Link>
                    </li>
                    <li className={pathname === "/contact" ? "active" : ""}>
                        <Link href="/contact">Contact Us</Link>
                    </li>
                </ul>

                {/* Hamburger Button */}
                <button
                    className="menu-toggle"
                    onClick={() => setMenuOpen(!menuOpen)}>
                    ☰
                </button>
            </nav>

            {/* Mobile Menu */}
            <div
                className={`mobile-menu ${menuOpen
                        ? "animate__animated animate__slideInLeft open"
                        : ""
                    }`}
            >
                <button
                    className="close-btn"
                    onClick={() => setMenuOpen(false)}>
                    ✖
                </button>

                {/* Logo in Mobile Menu */}
                <div className="mobile-logo">
                    <Link href="/">
                        <Image
                            src={logo}
                            alt="iBukas Energy"
                            width={120} height={60} priority />
                    </Link>
                </div>

                <ul className="mobile-links">
                    <li className={pathname === "/" ? "active" : ""}>
                        <Link href="/">Home</Link>
                    </li>
                    <li className={pathname === "/about" ? "active" : ""}>
                        <Link href="/about">About Us</Link>
                    </li>
                    <li className={pathname === "/calculator" ? "active" : ""}>
                        <Link href="/calculator">Calculator</Link>
                    </li>
                    <li className={pathname === "/contact" ? "active" : ""}>
                        <Link href="/contact">Contact Us</Link>
                    </li>
                </ul>
            </div>
        </header>
    );
}
