"use client";

import SignUpForm from "@/components/SignUpForm";

export default function SignUpPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-lightBackground dark:bg-darkBackground text-lightText dark:text-darkText">
      <div className="w-full max-w-md p-6 shadow-lg rounded-lg bg-lightBackground dark:bg-darkBackground text-lightText dark:text-darkText">
        <h1 className="text-2xl font-bold mb-4">Registrera dig</h1>
        <SignUpForm />
      </div>
    </div>
  );
}
