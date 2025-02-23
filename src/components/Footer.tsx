"use client";

import Link from "next/link";

const Footer = () => {
  return (
    <footer className="w-full flex flex-col sm:flex-row bg-lightBackground dark:bg-darkBackground text-lightText dark:text-darkText py-6 mt-auto text-center">
      <div className="container mx-auto flex flex-col items-center gap-4">
        <div className="flex gap-4 mt-4 sm:mt-0">
          <Link href="https://twitter.com" target="_blank" className="hover:underline">
            Twitter
          </Link>
          <Link href="https://linkedin.com" target="_blank" className="hover:underline">
            LinkedIn
          </Link>
          <Link href="https://github.com" target="_blank" className="hover:underline">
            GitHub
          </Link>
        </div>

        <p className="text-sm">&copy; {new Date().getFullYear()} JobChaser. By A.C.A for educational purposesd.</p>
      </div>
    </footer>
  )
}

export default Footer