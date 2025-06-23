import Image from 'next/image';
import Link from 'next/link';
import { FaLinkedinIn, FaBehance, FaTwitter } from "react-icons/fa";


export default function Home() {
  return (
    <div className="bg-black text-white flex flex-col items-center">







      <main className="flex flex-col md:flex-row items-center justify-between w-full max-w-6xl px-8 py-16 gap-12">

        <div className="flex-1">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Hej, jeg hedder Jonas</h1>
          <p className="text-gray-400 mb-6">
            Hej, jeg hedder Jonas og er studerende på Center for Medie og Kommunikation (CMK) på Roskilde Tekniske Skole. Jeg brænder for webudvikling og digitalt design, og jeg udforsker hele tiden nye værktøjer og teknologier for at udvikle mine færdigheder.
          </p>
          <Link href="/contact">
            <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-md font-bold shadow-lg shadow-green-500/30">
              Get in touch →
            </button>
          </Link>
        </div>


        <div className="flex-1 flex justify-center">
          <Image
            src="/jonas.png"
            alt="Portræt af personen"
            width={300}
            height={300}
            className="rounded-full object-cover"
          />
        </div>
      </main>

    </div>
  );
}
