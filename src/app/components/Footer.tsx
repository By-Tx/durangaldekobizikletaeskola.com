import logos from "../media/linkLogo.png"; 
import Image from "next/image";
import instagram from "../media/RSS/instagram.svg";
import facebook from "../media/RSS/facebook.svg";
import twitter from "../media/RSS/twitter.svg";
export default function Footer() {
    return (
        <>
            <div className="grid grid-cols-3 bg-gradient-to-r from-blue-400 to-blue-500 h-9">
                <div className="flex items-center"> 
                    <div className="mr-3">©2024 </div>
                    <div className=" flex space-x-2">
                        <a href="http://" target="_blank" rel="noopener noreferrer"><Image src={instagram} width={20} height={20} alt="Instagram logo"/></a>
                        <a href="http://" target="_blank" rel="noopener noreferrer"><Image src={facebook} width={20} height={20} alt="Instagram logo"/></a>
                        <a href="http://" target="_blank" rel="noopener noreferrer"><Image src={twitter} width={20} height={20} alt="Instagram logo"/></a>
                    </div>
                </div>
                <div></div>
                <div className="flex items-center">
                    <div className="flex items-center ">
                        <div className="pl-1">Designed by</div>
                        <a href="https://github.com/txuli" className="flex items-center pl-1 bg-blue-400 rounded-lg w-fit justify-center px-2 mx-2 group">
                            <Image src={logos} alt="Logo" width={20} height={20} className="group-hover:rotate-180 transition-all " />
                            <span className="pl-1">Txuli</span>
                        </a>
                        <span className="pl-1">for Durangaldeko Bizikleta Eskola </span>
                    </div>
                </div>
            </div>
        </>
    );
}
