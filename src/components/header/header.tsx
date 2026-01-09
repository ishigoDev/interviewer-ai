'use client';

import SiteIcon from '../ui/SiteIcon';
import Link from 'next/link';
import { Button } from '../ui/button';
import { useSession, signOut } from 'next-auth/react';

const Header = () => {
  const { data: session } = useSession();

  return (
    <header className="py-6 px-6 bg-black text-white border-b border-b-gray-700">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="flex items-center gap-2">
          <SiteIcon size={40} showLabel label="Interviewer AI" />
        </Link>
        <div className="flex items-center gap-4">
          {session ? (
            <>
              <Link href="/dashboard" className="mr-2 hover:underline">
                Dashboard
              </Link>
              <Button onClick={() => signOut()}>Logout</Button>
            </>
          ) : (
            <>
              <Link href="/login" className="mr-2 hover:underline">
                Login
              </Link>
              <Button asChild>
                <Link href="/signup">Sign Up</Link>
              </Button>
            </>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
