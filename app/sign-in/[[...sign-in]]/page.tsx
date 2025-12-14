import { SignIn } from "@clerk/nextjs";
import React from "react";

function SignInPage() {
  return (
    <div className="flex items-center justify-center pt-20">
      <SignIn
        appearance={{
          elements: {
            modal: {
              position: "fixed",
            },
          },
        }}
      />
    </div>
  );
}

export default SignInPage;
