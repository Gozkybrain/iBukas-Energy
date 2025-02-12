import Link from "next/link";

export default function Header() {
  return (
    <header className="header">
      <nav className="nav">
        <ul className="menu">
          <li><Link href="/">Home</Link></li>
          <li><Link href="/about">About</Link></li>
          <li className="logo"><Link href="/">LOGO</Link></li>
          <li><Link href="/services">Services</Link></li>
          <li><Link href="/contact">Contact</Link></li>
        </ul>
      </nav>
    </header>
  );
}
