
import logos from "@/app/media/linkLogo.png";
import Image from "next/legacy/image";
import facebook from "@/app/media/RSS/facebook.svg";
import instagram from "@/app/media/RSS/instagram.svg";
import twitter from "@/app/media/RSS/twitter.svg";
import mail from "@/app/media/footer/correo.png";
import telf from "@/app/media/footer/telf.png";
import ubi from "@/app/media/footer/marcador.png";

export default function Footer() {
    return (
        <footer className="bg-blue-500">

            <div className="bg-customblue">
                {/* Información y Mapa */}
                <div className="bg-customblue p-4">
                    {/* Información y Mapa */}
                    <div className="flex flex-col lg:grid lg:grid-cols-2 h-112 lg:h-56">
                        {/* Información de Contacto + Redes Sociales */}
                        <div className="flex flex-col justify-center items-center lg:items-end text-xl font-fredoka my-2 lg:pr-6">
                            <div className="flex items-center my-2 text-center lg:text-end">
                                <span>Murueta Torre Auzunea, 5D <br /> 48200 Durango, Bizkaia</span>
                                <Image src={ubi} alt="Location icon" width={30} height={30} className="ml-2" />
                            </div>
                            <div className="flex items-center my-2">
                                <span>699 780 190</span>
                                <Image src={telf} alt="Phone icon" width={30} height={30} className="ml-2" />
                            </div>
                            <div className="flex items-center my-2">
                                <a href="mailto:durangaldekobizikletaeskola@gmail.com" className="text-white flex items-center">
                                    <span>durangaldekobizikletaeskola@gmail.com</span>
                                    <Image src={mail} alt="Mail icon" width={30} height={30} className="ml-2" />
                                </a>
                            </div>

                            {/* Redes Sociales */}
                            <div className="flex items-center gap-4 mt-4 lg:mt-6">
                                <a href="https://www.facebook.com/profile.php?id=100014739280844" target="_blank" rel="noopener noreferrer">
                                    <Image src={facebook} alt="Facebook" width={35} height={30} className="hover:scale-110 transition invert"  />
                                </a>
                                <a href="https://www.instagram.com/durangaldeko_bzkeskola/" target="_blank" rel="noopener noreferrer">
                                    <Image src={instagram} alt="Instagram" width={35} height={30} className="hover:scale-110 transition invert" />
                                </a>
                                <a href="https://x.com/scduranguesa" target="_blank" rel="noopener noreferrer">
                                    <Image src={twitter} alt="Twitter" width={35} height={30} className="hover:scale-110 transition invert" />
                                </a>
                            </div>
                        </div>

                        {/* Mapa Responsivo */}
                        <div className="w-full h-40 lg:h-full mt-4 lg:mt-0">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2909.733754657407!2d-2.6340831241669345!3d43.173112571128875!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd4e3291d2578213%3A0x5320edb9cf962152!2sMurueta%20Torre%20Auzunea%20Etxetaldea%2C%205D%2C%2048200%20Durango%2C%20Bizkaia!5e0!3m2!1ses!2ses!4v1739347448883!5m2!1ses!2ses"
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                className="w-full h-56 rounded-lg">
                            </iframe>
                        </div>
                    </div>
                </div>


                {/* Footer Inferior */}
                <div className="flex flex-col lg:flex-row items-center justify-center lg:justify-end bg-customDarkBlue h-auto lg:h-10 mt-4 lg:mt-0  py-2 pr-3">
                    <div className="flex items-center justify-center lg:justify-end text-center lg:text-right">
                        <span className="lg:pl-1">Designed by</span>
                        <a href="https://github.com/txuli" className="flex items-center pl-1 bg-customDarkerBlue rounded-lg justify-center px-2 mx-2 group">
                            <Image src={logos} alt="Logo" width={20} height={20} className="group-hover:rotate-180 transition-all grayscale invert" />
                            <span className="pl-1">Txuli</span>
                        </a>
                    </div>
                    <span className="text-center lg:text-right ">for Durangaldeko Bizikleta Eskola ©2025</span>
                </div>
            </div>

        </footer>
    );
}
