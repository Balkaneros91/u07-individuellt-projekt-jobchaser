"use client";

import Link from "next/link";

export default function Home() {

  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-3xl font-bold">Welcome to JobChaser</h1>
      <p>Find your dream job today!</p>
      
      {/* Link to Jobs Page */}
      <Link href="/jobs">
        <button className="mt-4 px-6 py-2 bg-blue-500 text-white rounded">
          Browse Jobs
        </button>
      </Link>
    </div>
  );

}
