import SiteIcon from "../ui/SiteIcon";
import Link from 'next/link';
import { Button } from '../ui/button';

const Header = () => {
  return (
    <header className="py-6 px-6 bg-black text-white border-b border-b-gray-700">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="flex items-center gap-2">
          <SiteIcon size={40} showLabel label="Interviewer AI" />
        </Link>
        <div className="flex items-center gap-4">
            <Link href="/login" className="mr-2 hover:underline">Login</Link>
          <Button variant="outline" className="text-black bg-white hover:bg-black hover:text-white" asChild>
            <Link href="/signup">Sign Up</Link>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
