import { Link } from "@/i18n/routing";
import news from "../../../media/session/news.svg";
import Image from 'next/image';
const NavBarS = () => {
    return (
        <>
            <div className="bg-customDarkBlueSession/65 h-10 flex justify-between items-center w-1/4 rounded-2xl mx-auto mt-4">
                <Link href="/noticeCreator" className="text-white font-fredoka font-semibold px-4 py-2 rounded-lg"><Image src={news} height={24} width={24} alt="news" className="rotate-45 hover:rotate-0 transition-all " /></Link>
                <div className="mr-6">
                    <button className="bg-customBlue text-white font-fredoka font-semibold px-4 py-2 rounded-lg">Logout</button>
                </div>
            </div>


        </>)
}
export default NavBarS;