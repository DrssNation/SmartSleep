import Link from "next/link";
import { BedSingle } from "lucide-react";
import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import { Button } from "./button";
import { checkUser } from "@/lib/checkUser";

async function header() {


  const user = await checkUser();
  return (
    <header>
      <nav className="p-4 border-b border-border flex items-center justify-between">
        <Link href={"/"} className="text-green-400 sm:text-2xl ml-2">
          <BedSingle className="inline-block mr-2 mb-1" size={24} />
          SmartSleep
        </Link>

        <div className="flex items-center justify-center gap-4">
          <Link href="/about" className="text-green-400 hover:text-green-500">
            About
          </Link>
          <Link href="/contact" className="text-green-400 hover:text-green-500">
            Contact
          </Link>

          <SignedOut>
            <SignInButton mode="redirect">
              <Button className="bg-green-400 hover:bg-green-500 text-white">
                Sign In
              </Button>
            </SignInButton>
          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn>
        </div>
      </nav>
    </header>
  );
}

export default header;
