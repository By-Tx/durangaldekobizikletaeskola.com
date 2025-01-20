"use client";
import { usePathname } from 'next/navigation';
import MainSponsor from './mainSponsor';
import Secondsponsor from './secondSponsor';
import Helpers from './helpers';

import SubTitle from '../Titles/SubTitle';



const SECONDARY_SPONSORS = [
    { img: 'https://photos.txuli.com/duranguesa/patrocinadores/VCG.png', link: 'https://www.vcg-decoletaje.com/' },
    { img: 'https://photos.txuli.com/duranguesa/patrocinadores/BETSAIDE.png', link: 'https://www.betsaide.com/' },
    { img: 'https://photos.txuli.com/duranguesa/patrocinadores/TECOEL.png', link: 'https://tecoel.es/' },
    { img: 'https://photos.txuli.com/duranguesa/patrocinadores/MARISTAS.png', link: '' },
    { img: 'https://photos.txuli.com/duranguesa/patrocinadores/MALDABIKES.png', link: 'https://www.maldabikes.com/' },
    { img: 'https://photos.txuli.com/duranguesa/patrocinadores/INGENIA.png', link: 'https://ingenia2014.com/' },
    { img: 'https://photos.txuli.com/duranguesa/patrocinadores/mugarra.png', link: '' },
    { img: 'https://photos.txuli.com/duranguesa/patrocinadores/RURALKUTXA.png', link: '' },
    { img: 'https://photos.txuli.com/duranguesa/patrocinadores/CUBICAL.png', link: 'https://cubicaldenira.com/' },
    { img: 'https://photos.txuli.com/duranguesa/patrocinadores/marraz.png', link: '' },
    { img: 'https://photos.txuli.com/duranguesa/patrocinadores/EUSKADILOWCOST.png', link: '' },
    { img: 'https://photos.txuli.com/duranguesa/patrocinadores/CONTROLPACK.png', link: 'https://www.controlpack.com/' },
];

const HELPERS = [
    { img: 'https://photos.txuli.com/duranguesa/patrocinadores/DURANGO.png', link: 'https://www.durango.eus/' },
    { img: 'https://photos.txuli.com/duranguesa/patrocinadores/ABADIÑO.png', link: 'https://www.xn--abadio-0wa.org/' },
    { img: 'https://photos.txuli.com/duranguesa/patrocinadores/IURRETA.png', link: 'https://www.iurreta.eus/eu-ES/Orriak/default.aspx' },
    { img: 'https://photos.txuli.com/duranguesa/patrocinadores/ELORRIO.png', link: 'https://www.elorrio.eus/eu-ES/Orriak/default.aspx' },
];

const Sponsor = () => {
    const pathname = usePathname();

    const renderMainSponsors = () => (
        <>
            

            <MainSponsor 
            img='https://photos.txuli.com/duranguesa/patrocinadores/CafeDromedario.webp' 
            Link='https://cafedromedario.com/' 
            img2='https://photos.txuli.com/duranguesa/patrocinadores/flotamet.png' 
            Link2='https://cafedromedario.com/' />


        </>
    );

    const renderSecondarySponsors = () => (
        <>

            <div className="grid w-5/6  mx-auto sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-6 place-items-center gap-4 mb-16">
                {SECONDARY_SPONSORS.map(({ img, link }, idx) => (
                    <Secondsponsor key={idx} img={img} Link={link} />
                ))}
            </div>
        </>
    );

    const renderHelpers = () => (
        <>


            <div className="w-10/12 mx-auto sm:grid sm:grid-cols-2 lg:flex lg:space-x-4 sm:gap-8 justify-center mb-20 place-items-center mt-16">
                {HELPERS.map(({ img, link }, idx) => (
                    <Helpers key={idx} img={img} Link={link} />
                ))}
            </div>


        </>
    );
    if (pathname == '/bttTxapelduna' || pathname == '/irrisarriNotice' || pathname == '/espainakoTxapelketa') {
        return null; 
    }

    return (
        <div className='w-full'>
            {pathname === '/cafedromedario' && renderMainSponsors()}
            {pathname === '/eskola' && (
                <>
                    <SubTitle subTitle="BABESLEAK" />
                    {renderHelpers()}
                    {renderSecondarySponsors()}

                </>
            )}
            {pathname !== '/cafedromedario' && pathname !== '/eskola' && (
                <>
                    <SubTitle subTitle="BABESLEAK" />
                    {renderMainSponsors()}
                    {renderHelpers()}
                    {renderSecondarySponsors()}

                </>
            )}
            
        </div>
    );
};

export default Sponsor;
