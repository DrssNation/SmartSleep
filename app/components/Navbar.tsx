import { SignInButton, SignedIn, SignedOut, UserButton } from '@clerk/nextjs';

import Link from 'next/link';

import  checkUser  from '@/lib/checkUser';

export default async function Navbar() {
  const user = await checkUser();

  return (
    <nav>
      <div className='max-w-full mx-auto px-4 sm:px-6 lg:px-8 border-b border-black'>
        <div className='flex items-center justify-between h-16'>
          <div className='flex items-center'>
            <Link href='/' className='shrink-0'>
              <span className='text-xl sm:text-2xl font-bold text-green-300 bg-clip-text'>
                SleepTracker
              </span>
            </Link>
          </div>

          <div className='flex items-center space-x-4'>
            <Link
              href='/'
              className='text-gray-700  hover:text-green-400 transition-colors duration-200 ease-in-out px-2 py-1 rounded-md text-sm sm:px-3 sm:py-2 sm:text-base font-medium hidden sm:block'
            >
              Home
            </Link>

            <Link
              href='/about'
              className='text-gray-700 hover:text-green-400 transition-colors duration-200 ease-in-out px-2 py-1 rounded-md text-sm sm:px-3 sm:py-2 sm:text-base font-medium '
            >
              About
            </Link>

            <SignedOut>
              <SignInButton>
                <button className='w-full sm:w-auto bg-green-300 hover:bg-green-400 transition-colors duration-200 ease-in-out text-white sm:px-4 py-2 px-3 text-sm sm:text-md rounded-md font-medium cursor-pointer'>
                  Sign In
                </button>
              </SignInButton>
            </SignedOut>

            <SignedIn>
              <UserButton />
            </SignedIn>
          </div>
        </div>
      </div>
    </nav>
  );
}