
import logos from "@/app/media/linkLogo.png";
import Image from "next/image";
import facebook from "@/app/media/RSS/facebook.svg";
import mail from "@/app/media/footer/correo.png";
import telf from "@/app/media/footer/telf.png";
import ubi from "@/app/media/footer/marcador.png";

export default function Footer() {
    return (
        <footer className="bg-blue-500">
            {/* Mobile Footer */}
            <div className="grid grid-cols-4 w-full lg:hidden">
                <div className="col-span-2 flex items-center mt-2">
                    <div className="flex space-x-2 ml-1">
                        <a href="https://www.facebook.com/profile.php?id=100014739280844" target="_blank" rel="noopener noreferrer">
                            <Image src={facebook} width={20} height={20} alt="Facebook logo" />
                        </a>
                        <a href="mailto:durangaldekobizikletaeskola@gmail.com" target="_blank" rel="noopener noreferrer">
                            <Image src={mail} width={20} height={20} alt="Mail logo" />
                        </a>
                    </div>
                </div>

                <div className="col-span-2 flex justify-end mt-2">
                    <div className="pl-1">Designed by</div>
                    <a href="https://github.com/txuli" className="flex items-center pl-1 bg-blue-400 rounded-lg w-fit justify-center px-2 mx-2 group">
                        <Image src={logos} alt="Logo" width={20} height={20} className="group-hover:rotate-180 transition-all grayscale invert" />
                        <span className="pl-1">Txuli</span>
                    </a>
                </div>
            </div>

            <div className="flex justify-center mt-2 pl-4 lg:hidden">
                ©2024, Durangaldeko Bizikleta Eskola
            </div>

            {/* Desktop Footer */}
            <div className="hidden lg:grid lg:grid-cols-2 h-44 bg-customblue">
                <div className="flex flex-col justify-center items-end text-xl font-fredoka my-1 pr-6">
                    <div className="flex items-center my-2">
                        <span className="text-end">Murueta Torre Auzunea, 5D <br /> 48200 Durango, Bizkaia</span>
                        <Image src={ubi} alt="Location icon" width={40} height={40} className="ml-2" />
                    </div>
                    <div className="flex items-center my-2">
                        <span>699 780 190</span>
                        <Image src={telf} alt="Phone icon" width={40} height={40} className="ml-2" />
                    </div>
                    <div className="flex items-center my-2">
                        <a href="mailto:durangaldekobizikletaeskola@gmail.com" className="text-white flex items-center">
                            <span>durangaldekobizikletaeskola@gmail.com</span>
                            <Image src={mail} alt="Mail icon" width={40} height={40} className="ml-2" />
                        </a>
                    </div>
                </div>

                <div className="w-full h-full">
                    <iframe 
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2909.733754657407!2d-2.6340831241669345!3d43.173112571128875!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd4e3291d2578213%3A0x5320edb9cf962152!2sMurueta%20Torre%20Auzunea%20Etxetaldea%2C%205D%2C%2048200%20Durango%2C%20Bizkaia!5e0!3m2!1ses!2ses!4v1739347448883!5m2!1ses!2ses"
                        allowFullScreen 
                        loading="lazy" 
                        referrerPolicy="no-referrer-when-downgrade" 
                        className="w-full h-full">
                    </iframe>
                </div>
            </div>

            <div className="hidden lg:flex items-center justify-end w-full bg-customDarkBlue h-10 pr-2">
                <div className="pl-1">Designed by</div>
                <a href="https://github.com/txuli" className="flex items-center pl-1 bg-customDarkerBlue rounded-lg w-fit justify-center px-2 mx-2 group">
                    <Image src={logos} alt="Logo" width={20} height={20} className="group-hover:rotate-180 transition-all grayscale invert" />
                    <span className="pl-1">Txuli</span>
                </a>
                <span className="pl-1">for Durangaldeko Bizikleta Eskola ©2025</span>
            </div>
        </footer>
    );
}
