import { FaHeart } from "react-icons/fa";

export default function Footer() {
    return (
        <footer className="w-full bg-[#1B1B1B] py-4 flex justify-center items-center rounded-md px-8">
            {/* Wrapper med max-w og centreret */}
            <div className="w-full max-w-6xl mx-auto">
                <p className="text-white text-center text-sm flex items-center justify-center gap-2">
                    Made with <FaHeart className="text-red-500" />
                </p>
            </div>
        </footer>
    );
}
