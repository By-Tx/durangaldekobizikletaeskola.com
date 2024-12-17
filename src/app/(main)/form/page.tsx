"use client";
import Title from "@/app/components/Titles/Title";

export default function Page() {
    return (
        <section className="mt-52  ">  
            <Title title="Izena eman" />
            
            <p className="mt-4 text-center text-lg text-gray-600">
                Izena emateko, bete beheko formularioa eta lehen baino lehen zurekin kontaktuan jarriko gara. Eskerrik asko! 
                Dudaren bat badaukazu, telefonoz kontaktatu dezakezu:
            </p>
            <form className="mt-10 max-w-3xl mx-auto bg-gradient-to-br from-white to-gray-50 shadow-2xl rounded-lg p-8">
                <div className="grid gap-6 md:grid-cols-2">
                    <div>
                        <label className="block text-lg font-medium text-gray-700">Izen abizena</label>
                        <input 
                            className="border-2 border-gray-300 rounded-lg p-3 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                            type="text" 
                            placeholder="Umearen izena" 
                        />
                    </div>
                    <div>
                        <label className="block text-lg font-medium text-gray-700">Jaiotze data</label>
                        <input 
                            className="border-2 border-gray-300 rounded-lg p-3 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                            type="date" 
                        />
                    </div>
                </div>
                <div className="mt-6">
                    <label className="block text-lg font-medium text-gray-700">Helbidea</label>
                    <input 
                        className="border-2 border-gray-300 rounded-lg p-3 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                        type="text" 
                        placeholder="Zure helbidea" 
                    />
                </div>
                <div className="grid gap-6 mt-6 md:grid-cols-2">
                    <div>
                        <label className="block text-lg font-medium text-gray-700">Herria</label>
                        <input 
                            className="border-2 border-gray-300 rounded-lg p-3 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                            type="text" 
                            placeholder="Zure herria" 
                        />
                    </div>
                    <div>
                        <label className="block text-lg font-medium text-gray-700">Ikasketa Zentroa</label>
                        <input 
                            className="border-2 border-gray-300 rounded-lg p-3 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                            type="text" 
                            placeholder="Ikasketa Zentroaren izena" 
                        />
                    </div>
                </div>
                <div className="grid gap-6 mt-6 md:grid-cols-2">
                    <div>
                        <label className="block text-lg font-medium text-gray-700">Aita Ama edo tutorearen Izen-abizenak</label>
                        <input 
                            className="border-2 border-gray-300 rounded-lg p-3 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                            type="text" 
                            placeholder="Tutorearen izena eta abizenak" 
                        />
                    </div>
                    <div>
                        <label className="block text-lg font-medium text-gray-700">Telefono Zenbakia</label>
                        <input 
                            className="border-2 border-gray-300 rounded-lg p-3 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                            type="tel" 
                            placeholder="123456789" 
                        />
                    </div>
                </div>
                <div className="mt-6">
                    <label className="block text-lg font-medium text-gray-700">Posta electronikoa</label>
                    <input 
                        className="border-2 border-gray-300 rounded-lg p-3 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                        type="email" 
                        placeholder="zure.emaila@example.com" 
                    />
                </div>
                <div className="mt-6">
                    <label className="block text-lg font-medium text-gray-700">Mezua</label>
                    <textarea 
                        className="border-2 border-gray-300 rounded-lg p-3 w-full h-28 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Zure mezua hemen idatzi"
                    ></textarea>
                </div>
                <div className="text-center mt-8">
                    <button 
                        type="submit" 
                        className="bg-blue-500 text-white py-3 px-8 rounded-lg text-lg font-semibold transition transform hover:bg-blue-600 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-400"
                    >
                        Bidali
                    </button>
                </div>
            </form>
        </section>
    );
}
