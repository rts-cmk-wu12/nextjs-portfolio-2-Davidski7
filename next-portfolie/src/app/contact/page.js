export default function Contact() {
    return (
        <div className="bg-black text-white flex flex-col items-center px-4">
            <main className="max-w-xl w-full py-20">
                <h1 className="text-4xl font-bold text-center mb-4">Contact </h1>
                <p className="text-center text-gray-400 mb-10 font-mono text-sm">
                    Tak fordi du kiggede forbi!
                    Hvis du leder efter en motiveret og detaljeorienteret webudvikler med interesse for front-end og responsivt design, så vil jeg meget gerne høre fra dig.
                    Uanset om det handler om et projekt, en praktikplads eller en uformel snak, er du velkommen til at kontakte mig. Jeg er altid åben for nye muligheder og udvikling.
                </p>

                <form className="space-y-6">
                    <div>
                        <label className="block text-sm font-bold mb-1">Email</label>
                        <input
                            type="email"
                            placeholder="Please enter your email"
                            className="w-full bg-white text-black p-3 rounded focus:outline-none"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-bold mb-1">Mobile</label>
                        <input
                            type="tel"
                            placeholder="Enter mobile"
                            className="w-full bg-white text-black p-3 rounded focus:outline-none"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-bold mb-1">Message</label>
                        <textarea
                            placeholder="Enter your message"
                            className="w-full bg-white text-black p-3 rounded h-32 resize-none focus:outline-none"
                        />
                    </div>

                    <div className="flex justify-center">
                        <button
                            type="submit"
                            className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded w-full shadow-[0_0_40px_0_rgba(0,255,0,0.2)] transition duration-300 ease-in-out"
                        >
                            Submit &nbsp; &rarr;
                        </button>
                    </div>
                </form>
            </main>
        </div>
    );
}
