import { SignUp } from "@clerk/nextjs";
import React from "react";

function SignUpPage() {
  return (
    <div className="flex items-center justify-center">
      <SignUp
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

export default SignUpPage;
