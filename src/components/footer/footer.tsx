import { Github, Twitter, Linkedin } from "lucide-react";
import Link from "next/link";
import SiteIcon from "../ui/SiteIcon";

export default function Footer() {
	return (
		<footer className="w-full bg-[#1f1f1f] text-gray-200">
			<div className="max-w-8xl px-2 py-8">
				<div className="px-0 py-0">
					<div className="grid grid-cols-1 md:grid-cols-4 gap-8 ml-[75px]">
						<div className="flex flex-col gap-4 max-w-[48%] items-start">
							<Link href="/">
								<SiteIcon size={40} showLabel label="Interviewer AI" />
							</Link>
                            <div className="flex items-center">
                            <div className="text-sm text-gray-400">Unlock your career potential with personalized guidance and study plans.</div>
                            </div>
						</div>
						<div>
							<div className="font-semibold text-white mb-7">Company</div>
							<ul className="space-y-2 text-gray-400">
								<li><a href="#" className="hover:text-white">About Us</a></li>
								<li><a href="#" className="hover:text-white">Careers</a></li>
								<li><a href="#" className="hover:text-white">Blog</a></li>
							</ul>
						</div>
						<div>
							<div className="font-semibold text-white mb-7">Resources</div>
							<ul className="space-y-2 text-gray-400">
								<li><a href="#" className="hover:text-white">FAQ</a></li>
								<li><a href="#" className="hover:text-white">Help Center</a></li>
								<li><a href="#" className="hover:text-white">Privacy Policy</a></li>
							</ul>
						</div>
                        <div>
							<div className="font-semibold text-white mb-7">Follow Us</div>
							<div className="flex items-center gap-5">
								<a href="#" aria-label="GitHub" className="text-gray-400 hover:text-white">
									<Github className="w-6 h-6" />
								</a>
								<a href="#" aria-label="Twitter" className="text-gray-400 hover:text-white">
									<Twitter className="w-6 h-6" />
								</a>
								<a href="#" aria-label="LinkedIn" className="text-gray-400 hover:text-white">
									<Linkedin className="w-6 h-6" />
								</a>
							</div>
						</div>
					</div>

					<hr className="border-gray-800 my-6" />

					<div className="text-center text-sm text-gray-400">&copy; {new Date().getFullYear()} Interviewer AI. All rights reserved.</div>
				</div>
			</div>
		</footer>
	);
}
