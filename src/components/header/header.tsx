import { BotMessageSquare } from 'lucide-react';
import Link from 'next/link';
import { Button } from '../ui/button';

const Header = () => {
  return (
    <header className="py-6 px-6 bg-black text-white border-b border-b-gray-700">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="flex items-center gap-2">
          <BotMessageSquare  className="w-8 h-8"/>
          <span className="text-lg font-semibold">Interviewer AI</span>
        </Link>
        <div className="flex items-center gap-4">
          <Button variant="outline" className="text-white bg-black" asChild>
            <Link href="/login">
              Login
            </Link>
          </Button>
          <Button variant="outline" className="text-black bg-white hover:bg-black hover:text-white" asChild>
            <Link href="/signup">
              Sign Up
            </Link>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
