"use client";

import Link from "next/link";

const NavBar = () => {
  return (
    <nav className="bg-lightBackground dark:bg-darkBackground text-lightText dark:text-darkText">
      <ul className="flex gap-4 place-content-center items-center">
        <li><Link href="/" className="hover:underline">Home</Link></li>
        <li><Link href="/jobs" className="hover:underline">Jobs</Link></li>
        <li><Link href="/signup" className="hover:underline">Sign Up</Link></li>
        <li><Link href="/signin" className="hover:underline">Sign In</Link></li>
      </ul>
    </nav>
  )
}

export default NavBar