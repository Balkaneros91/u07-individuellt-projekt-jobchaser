"use client";

import SignInForm from "@/components/SignInForm";

export default function SignInPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-lightBackground dark:bg-darkBackground text-lightText dark:text-darkText">
      <div className="w-full max-w-md p-6 shadow-lg rounded-lg bg-lightBackground dark:bg-darkBackground text-lightText dark:text-darkText">
        <h1 className="text-2xl font-bold mb-4">Logga in</h1>
        <SignInForm />
      </div>
    </div>
  );
}
