"use client";
import { usePathname } from 'next/navigation';
import MainSponsor from './mainSponsor';
import Secondsponsor from './secondSponsor';
import Helpers from './helpers';

import SubTitle from '../Titles/SubTitle';



const SECONDARY_SPONSORS = [
    { img: 'https://photos.txuli.com/duranguesa/patrocinadores/VCG.png', link: 'https://www.vcg-decoletaje.com/', style: undefined },
    { img: 'https://photos.txuli.com/duranguesa/patrocinadores/BETSAIDE.png', link: 'https://www.betsaide.com/', style: undefined },
    { img: 'https://photos.txuli.com/duranguesa/patrocinadores/TECOEL.png', link: 'https://tecoel.es/', style: undefined },
    { img: 'https://photos.txuli.com/duranguesa/patrocinadores/MARISTAS.png', link: '' },
    { img: 'https://photos.txuli.com/duranguesa/patrocinadores/MALDABIKES.png', link: 'https://www.maldabikes.com/', style: undefined },
    { img: 'https://photos.txuli.com/duranguesa/patrocinadores/INGENIA.png', link: 'https://ingenia2014.com/', style: undefined },
    { img: 'https://photos.txuli.com/duranguesa/patrocinadores/mugarra.png', link: '', style: undefined },
    { img: 'https://photos.txuli.com/duranguesa/patrocinadores/RURALKUTXA.png', link: '', style: undefined },
    { img: 'https://photos.txuli.com/duranguesa/patrocinadores/CUBICAL.png', link: 'https://cubicaldenira.com/', style: undefined },
    { img: 'https://photos.txuli.com/duranguesa/patrocinadores/marraz.png', link: '', style: undefined },

    { img: 'https://photos.txuli.com/duranguesa/patrocinadores/EUSKADILOWCOST.png', link: '', style: undefined  },
    { img: 'https://photos.txuli.com/duranguesa/patrocinadores/CONTROLPACK.png', link: 'https://www.controlpack.com/', style: undefined },
   
];

const HELPERS = [
    { img: 'https://photos.txuli.com/duranguesa/patrocinadores/IURRETA.png', link: 'https://www.iurreta.eus/eu-ES/Orriak/default.aspx', style: 'col-span-2' },
    { img: 'https://photos.txuli.com/duranguesa/patrocinadores/DURANGO.png', link: 'https://www.durango.eus/' , style: undefined},
    { img: 'https://photos.txuli.com/duranguesa/patrocinadores/ABADIÑO.png', link: 'https://www.xn--abadio-0wa.org/' , style: undefined},
    { img: 'https://photos.txuli.com/duranguesa/patrocinadores/BERRIZ.png', link: '' },
    { img: 'https://photos.txuli.com/duranguesa/patrocinadores/ELORRIO.png', link: 'https://www.elorrio.eus/eu-ES/Orriak/default.aspx' , style: undefined},
];

const Sponsor = () => {
    const pathname = usePathname();

    const renderMainSponsors = () => (
        <>


            <MainSponsor
                img='https://photos.txuli.com/duranguesa/patrocinadores/CafeDromedario.webp'
                Link='https://cafedromedario.com/'
                img2='https://photos.txuli.com/duranguesa/patrocinadores/flotamet.png'
                Link2='https://cafedromedario.com/' 
                img3='https://photos.txuli.com/duranguesa/patrocinadores/HIRUMET1.png'
                Link3='https://www.hirumet.com/'
                img4= 'https://photos.txuli.com/duranguesa/patrocinadores/orbeaw.png'
                Link4= 'https://www.orbea.com/'
                />
                


        </>
    );

    const renderSecondarySponsors = () => (
        <>

            <div className=" grid w-9/12 mx-auto grid-cols-3 lg:grid-cols-4  place-items-center gap-4  justify-items-center mb-6">
                {SECONDARY_SPONSORS.map(({ img, link, style }, idx) => (
                    <Secondsponsor key={idx} img={img} Link={link} style={style} />
                ))}
            </div>
            
        </>
    );

    const renderHelpers = () => (
        <>


            <div className=" bg-customDarkBlue lg:bg-transparent  rounded-lg w-8/12 mx-auto grid grid-cols-5  lg:flex lg:space-x-4 sm:gap-8 justify-center mb-20 place-items-center ">
                {HELPERS.map(({ img, link, style }, idx) => (
                    <Helpers key={idx} img={img} Link={link} style={style} />
                ))}
            </div>
            

        </>
    );
    if (pathname == '/eus/bttTxapelduna' || pathname == '/es/bttTxapelduna' || pathname == 'es/irrisarriNotice' || pathname == 'eus/irrisarriNotice' || pathname == '/eus/espainakoTxapelketa' || pathname == '/es/espainakoTxapelketa') {
        return null;
    }

    return (
        <div className='w-full'>
            {pathname === '/eus/cafedromedario' || pathname === '/es/cafedromedario' && (
                <>
                <SubTitle subTitle="BABESLEAK" />
                {renderMainSponsors()}</>
                )}
            {pathname === '/es/eskola'||pathname === '/eus/eskola' && (
                <>
                    <SubTitle subTitle="BABESLEAK" />
                    {renderHelpers()}
                    {renderSecondarySponsors()}

                </>
            )}
            {(pathname !== '/eus/cafedromedario' && pathname !== '/es/cafedromedario' && pathname !== '/es/eskola' && pathname !== '/eus/eskola') && (
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
