"use client"
import { usePathname } from 'next/navigation';
import MainSponsor from './mainSponsor';
import Secondsponsor from './secondSponsor';
import Helpers from './helpers';

const Sponsor = () => {
    const pathname = usePathname();
    const isCafeDromedarioRoute = pathname === '/cafedromedario';

    return (
        <div className='w-full'>
            <h3 className='text-5xl text-center'>BABESLE NAGUSIAK</h3>
            <div className="grid w-10/12 mx-auto sm:grid-cols-1 lg:grid-cols-2">
                <MainSponsor img={'https://photos.txuli.com/duranguesa/patrocinadores/CafeDromedario.webp'} Link={"https://cafedromedario.com/"}/>
                <MainSponsor img={'https://photos.txuli.com/duranguesa/patrocinadores/flotamet.png'} Link={""}/>
            </div>

            {!isCafeDromedarioRoute && (
                <>
                    <h3 className='text-5xl text-center'>BABESLEAK</h3>
                    <div className="grid w-5/6 mx-auto sm:grid-cols-3 lg:grid-cols-4">
                        <Secondsponsor img={'https://photos.txuli.com/duranguesa/patrocinadores/vcg.png'} Link={"https://www.vcg-decoletaje.com/index.html"}/>
                        <Secondsponsor img={'https://photos.txuli.com/duranguesa/patrocinadores/betsaide.png'} Link={"https://www.betsaide.com/"}/>
                        <Secondsponsor img={'https://photos.txuli.com/duranguesa/patrocinadores/tecoel.png'} Link={"https://www.betsaide.com/"}/>
                        <Secondsponsor img={'https://photos.txuli.com/duranguesa/patrocinadores/maristak.png'} Link={"https://www.betsaide.com/"}/>
                        <Secondsponsor img={'https://photos.txuli.com/duranguesa/patrocinadores/malda.png'} Link={"https://www.betsaide.com/"}/>
                        <Secondsponsor img={'https://photos.txuli.com/duranguesa/patrocinadores/ingenia.png'} Link={"https://www.betsaide.com/"}/>
                        <Secondsponsor img={'https://photos.txuli.com/duranguesa/patrocinadores/mugarra.png'} Link={"https://www.betsaide.com/"}/>
                        <Secondsponsor img={'https://photos.txuli.com/duranguesa/patrocinadores/ruralkutxa.png'} Link={"https://www.betsaide.com/"}/>
                        <Secondsponsor img={'https://photos.txuli.com/duranguesa/patrocinadores/cubical.png'} Link={"https://www.betsaide.com/"}/>
                        <Secondsponsor img={'https://photos.txuli.com/duranguesa/patrocinadores/marraz.png'} Link={"https://www.betsaide.com/"}/>
                        <Secondsponsor img={'https://photos.txuli.com/duranguesa/patrocinadores/esukadiLowCost.png'} Link={"https://www.betsaide.com/"}/>
                        <Secondsponsor img={'https://photos.txuli.com/duranguesa/patrocinadores/controlpack.png'} Link={"https://www.betsaide.com/"}/>
                    </div>

                    <h3 className='text-center text-5xl'>LAGUNTZAILEAK</h3>
                    <div className='flex justify-center'>
                        <Helpers img={'https://photos.txuli.com/duranguesa/patrocinadores/durango.png'} Link={"https://www.betsaide.com/"}/>
                        <Helpers img={'https://photos.txuli.com/duranguesa/patrocinadores/abadiño.png'} Link={"https://www.betsaide.com/"}/>
                        <Helpers img={'https://photos.txuli.com/duranguesa/patrocinadores/elorrio.png'} Link={"https://www.betsaide.com/"}/>
                        <Helpers img={'https://photos.txuli.com/duranguesa/patrocinadores/iurreta.png'} Link={"https://www.betsaide.com/"}/>
                    </div>
                </>
            )}
        </div>
    );
};

export default Sponsor;
