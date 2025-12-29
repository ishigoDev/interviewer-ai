import { Heart } from "lucide-react";

export default function Footer() {
       return (
		<footer className="w-full bg-black text-white border-t border-gray-800">
			<div className="max-w-7xl mx-auto px-2 py-6 flex flex-col md:flex-row items-center md:justify-between gap-2">
				<div className="text-sm text-center md:text-left text-gray-300">&copy; {new Date().getFullYear()} Interviewer AI. All rights reserved.</div>
				<div className="flex items-center gap-2 text-sm text-center md:text-right text-gray-200">
					<span className="capitalize tracking-wide">made by pranay with</span>
					<Heart className="w-4 h-4 text-red-500" fill="currentColor" />
				</div>
			</div>
		</footer>
       );
}
