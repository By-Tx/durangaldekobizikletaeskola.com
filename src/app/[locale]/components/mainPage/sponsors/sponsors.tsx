"use client";
import { usePathname } from 'next/navigation';
import MainSponsor from './mainSponsor';
import Secondsponsor from './secondSponsor';
import Helpers from './helpers';

import SubTitle from '../Titles/SubTitle';



const SECONDARY_SPONSORS = [
    { img: 'https://photos.txuli.com/duranguesa/sponsors/New-VCG.webp', link: 'https://www.vcg-decoletaje.com/', style: undefined },
    { img: 'https://photos.txuli.com/duranguesa/sponsors/New-Betsaide.webp', link: 'https://www.betsaide.com/', style: undefined },
    { img: 'https://photos.txuli.com/duranguesa/sponsors/New-Tecoel.webp', link: 'https://tecoel.es/', style: undefined },
    { img: 'https://photos.txuli.com/duranguesa/sponsors/New-Maristas.webp', link: 'https://maristak.com/' },
    { img: 'https://photos.txuli.com/duranguesa/sponsors/New-MaldaBikes.webp', link: 'https://www.maldabikes.com/', style: undefined },
    { img: 'https://photos.txuli.com/duranguesa/sponsors/New-Ingenia.webp', link: 'https://ingenia2014.com/', style: undefined },
    { img: 'https://photos.txuli.com/duranguesa/sponsors/New-SuministrosMugarra.webp', link: '', style: undefined },
    { img: 'https://photos.txuli.com/duranguesa/sponsors/New-RuralKutxa.webp', link: 'https://www.ruralkutxa.com/', style: undefined },
    { img: 'https://photos.txuli.com/duranguesa/sponsors/New-CubicalDenira.webp', link: 'https://cubicaldenira.com/', style: undefined },
    { img: 'https://photos.txuli.com/duranguesa/sponsors/New-MarrazDesign.webp', link: '', style: undefined },

    { img: 'https://photos.txuli.com/duranguesa/sponsors/New-EuskadiLowCost.webp', link: 'https://www.euskadilowcost.com/', style: undefined },
    { img: 'https://photos.txuli.com/duranguesa/sponsors/New-ControlPack.webp', link: 'https://www.controlpack.com/', style: undefined },

];

const HELPERS = [
    { img: 'https://photos.txuli.com/duranguesa/sponsors/New-Iurreta.webp', link: 'https://www.iurreta.eus/eu-ES/Orriak/default.aspx', style: 'col-span-2' },
    { img: 'https://photos.txuli.com/duranguesa/sponsors/New-Durango.webp', link: 'https://www.durango.eus/', style: undefined },
    { img: 'https://photos.txuli.com/duranguesa/sponsors/New-Abadiño.webp', link: 'https://www.xn--abadio-0wa.org/', style: undefined },
    { img: 'https://photos.txuli.com/duranguesa/sponsors/New-Berrizko.webp', link: 'https://www.berriz.eus/' },
    { img: 'https://photos.txuli.com/duranguesa/sponsors/New-Elorrio.webp', link: 'https://www.elorrio.eus/eu-ES/Orriak/default.aspx', style: undefined },
];

const Sponsor = () => {
    const pathname = usePathname();

    const renderMainSponsors = () => (
        <>


            <MainSponsor
                img='https://photos.txuli.com/duranguesa/sponsors/New-CafeDromedario.webp'
                Link='https://cafedromedario.com/'
                img2='https://photos.txuli.com/duranguesa/sponsors/New-Flotamet.webp'
                Link2='https://www.recuperacion.org/miembros/flotamet-s-l/'
                img3='https://photos.txuli.com/duranguesa/sponsors/New-Hirumet.webp'
                Link3='https://www.hirumet.com/'
                img4='https://photos.txuli.com/duranguesa/sponsors/New-Orbea.webp'
                Link4='https://www.orbea.com/'
            />



        </>
    );

    const renderSecondarySponsors = () => (
        <>

            <div className=" grid w-10/12 md:w-9/12 mx-auto grid-cols-3 lg:grid-cols-4  place-items-center gap-2 sm:gap-5  justify-items-center mb-6">
                {SECONDARY_SPONSORS.map(({ img, link, style }, idx) => (
                    <Secondsponsor key={idx} img={img} Link={link} style={style} />
                ))}
            </div>

        </>
    );

    const renderHelpers = () => (
        <>


            <div className=" bg-customDarkBlue lg:bg-transparent  rounded-lg w-10/12 sm:w8/12 mx-auto grid grid-cols-5  lg:flex lg:space-x-4 sm:gap-8 justify-center mb-20 place-items-center ">
                {HELPERS.map(({ img, link, style }, idx) => (
                    <Helpers key={idx} img={img} Link={link} style={style} />
                ))}
            </div>


        </>
    );
    if (pathname == '/eus/bttTxapelduna' || pathname == '/es/bttTxapelduna' || pathname == 'es/irrisarriNotice' || pathname == 'eus/irrisarriNotice' || pathname == '/eus/espainakoTxapelketa' || pathname == '/es/espainakoTxapelketa'|| pathname == '/eus/tenporadaAsiera' || pathname == '/es/tenporadaAsiera' ) {
        return null;
    }

    return (
        <div className='w-full'>
            {pathname === '/eus/cafedromedario'  && (
                <>
                    <SubTitle subTitle="BABESLEAK" />
                    {renderMainSponsors()}
                </>
            )}
            {pathname === '/es/cafedromedario' && (
                <>
                    <SubTitle subTitle="PATROCINADORES" />
                    {renderMainSponsors()}
                </>
            )}
            {pathname === '/es/eskola' && (
                <>
                    <SubTitle subTitle="PATROCINADORES" />
                    {renderHelpers()}
                    {renderSecondarySponsors()}

                </>
            )}
            {pathname === '/eus/eskola' && (
                <>
                    <SubTitle subTitle="BABESLEAK" />
                    {renderHelpers()}
                    {renderSecondarySponsors()}

                </>
            )}
            {(pathname !== '/es/cafedromedario' && pathname !== '/es/eskola' && pathname !== '/eus/cafedromedario' && pathname !== '/eus/eskola' && pathname === '/es' ) && (
                <>
                    <SubTitle subTitle="PATROCINADORES" />
                    {renderMainSponsors()}

                    {renderSecondarySponsors()}
                    {renderHelpers()}

                </>
            )}
            {(pathname !== '/eus/cafedromedario' && pathname !== '/eus/eskola' && pathname !== '/es/cafedromedario' && pathname !== '/es/eskola' && pathname === '/eus') && (
                <>
                    <SubTitle subTitle="BABESLEAK" />
                    {renderMainSponsors()}

                    {renderSecondarySponsors()}
                    {renderHelpers()}

                </>
            )}

        </div>
    );
};

export default Sponsor;
