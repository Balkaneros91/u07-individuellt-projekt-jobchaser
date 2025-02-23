"use client";

import Link from "next/link";
import NavBar from "./NavBar";


const Header = () => {
  return (
    <header className="flex justify-between items-center place-content-center p-6 bg-lightBackground dark:bg-darkBackground text-lightText dark:text-darkText">
          <h1 className="text-xl font-bold">
            <Link href="/">JobChaser</Link> 
          </h1>
          <NavBar />
        </header>
  )
}

export default Header