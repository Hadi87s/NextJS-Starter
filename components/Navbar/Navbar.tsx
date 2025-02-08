import Link from "next/link";
import React from "react";
import styles from "./navbar.module.css";
const Navbar = () => {
  return (
    <nav className="mb-5">
      <ul className="flex justify-center list-none gap-4 p-5 rounded bg-white text-black">
        <li className="hover:text-red-400 transition-all">
          <Link href="/">Home</Link>
        </li>
        <li className="hover:text-red-400 transition-all">
          <Link href="/News/Gaza">Gaza News</Link>
        </li>
        <li className="hover:text-red-400 transition-all">
          <Link href="/News/WestBank">WestBank News</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
