import { SignUp } from "@clerk/nextjs";
import React from "react";

function SignUpPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      <SignUp />
    </div>
  );
}

export default SignUpPage;
