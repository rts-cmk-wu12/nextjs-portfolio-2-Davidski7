import Image from 'next/image';
import Link from 'next/link';
import { FaLinkedinIn, FaBehance, FaTwitter } from "react-icons/fa";



export default function Nav() {
    return (
        <nav className="w-full flex justify-center  text-white">
            <div className="bg-[#1B1B1B] w-full max-w-6xl rounded-md py-4 px-8 flex justify-between items-center">

                <ul className="flex gap-6">
                    <li><Link href="/" className="text-green-500">Home</Link></li>
                    <li><Link href="/about">About</Link></li>
                    <li><Link href="/contact">Contact</Link></li>
                </ul>


                <div className="flex gap-4 text-xl text-white">
                    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                        <FaLinkedinIn className="hover:text-green-500 transition" />
                    </a>
                    <a href="https://behance.net" target="_blank" rel="noopener noreferrer">
                        <FaBehance className="hover:text-green-500 transition" />
                    </a>
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                        <FaTwitter className="hover:text-green-500 transition" />
                    </a>
                </div>
            </div>
        </nav>
    );
}


