"use client";
import { usePathname } from 'next/navigation';
import MainSponsor from './mainSponsor';
import Secondsponsor from './secondSponsor';
import Helpers from './helpers';

const SPONSORS = [
    { img: 'https://photos.txuli.com/duranguesa/patrocinadores/CafeDromedario.webp', link: 'https://cafedromedario.com/' },
    { img: 'https://photos.txuli.com/duranguesa/patrocinadores/flotamet.png', link: '' },
];

const SECONDARY_SPONSORS = [
    { img: 'https://photos.txuli.com/duranguesa/patrocinadores/vcg.png', link: 'https://www.vcg-decoletaje.com/index.html' },
    { img: 'https://photos.txuli.com/duranguesa/patrocinadores/betsaide.png', link: 'https://www.betsaide.com/' },
    { img: 'https://photos.txuli.com/duranguesa/patrocinadores/tecoel.png', link: 'https://tecoel.es/' },
    { img: 'https://photos.txuli.com/duranguesa/patrocinadores/maristak.png', link: '' },
    { img: 'https://photos.txuli.com/duranguesa/patrocinadores/malda.png', link: 'https://www.maldabikes.com/' },
    { img: 'https://photos.txuli.com/duranguesa/patrocinadores/ingenia.png', link: 'https://ingenia2014.com/' },
    { img: 'https://photos.txuli.com/duranguesa/patrocinadores/mugarra.png', link: '' },
    { img: 'https://photos.txuli.com/duranguesa/patrocinadores/ruralkutxa.png', link: '' },
    { img: 'https://photos.txuli.com/duranguesa/patrocinadores/cubical.png', link: 'https://cubicaldenira.com/' },
    { img: 'https://photos.txuli.com/duranguesa/patrocinadores/marraz.png', link: '' },
    { img: 'https://photos.txuli.com/duranguesa/patrocinadores/esukadiLowCost.png', link: '' },
    { img: 'https://photos.txuli.com/duranguesa/patrocinadores/controlpack.png', link: 'https://www.controlpack.com/' },
];

const HELPERS = [
    { img: 'https://photos.txuli.com/duranguesa/patrocinadores/durango.png', link: 'https://www.durango.eus/' },
    { img: 'https://photos.txuli.com/duranguesa/patrocinadores/abadiño.png', link: 'https://www.xn--abadio-0wa.org/' },
    { img: 'https://photos.txuli.com/duranguesa/patrocinadores/elorrio.png', link: 'https://www.elorrio.eus/eu-ES/Orriak/default.aspx' },
    { img: 'https://photos.txuli.com/duranguesa/patrocinadores/iurreta.png', link: 'https://www.iurreta.eus/eu-ES/Orriak/default.aspx' },
];

const Sponsor = () => {
    const pathname = usePathname();

    const renderMainSponsors = () => (
        <>
            <h3 className='text-5xl text-center'>BABESLE NAGUSIAK</h3>
            <div className="grid w-10/12 mx-auto sm:grid-cols-1 lg:grid-cols-2">
                {SPONSORS.map(({ img, link }, idx) => (
                    <MainSponsor key={idx} img={img} Link={link} />
                ))}
            </div>
        </>
    );

    const renderSecondarySponsors = () => (
        <>
            <h3 className='text-5xl text-center'>BABESLEAK</h3>
            <div className="grid w-5/6 mx-auto sm:grid-cols-3 lg:grid-cols-4">
                {SECONDARY_SPONSORS.map(({ img, link }, idx) => (
                    <Secondsponsor key={idx} img={img} Link={link} />
                ))}
            </div>
        </>
    );

    const renderHelpers = () => (
        <>
            <h3 className='text-center text-5xl'>LAGUNTZAILEAK</h3>
            <div className='flex justify-center'>
                {HELPERS.map(({ img, link }, idx) => (
                    <Helpers key={idx} img={img} Link={link} />
                ))}
            </div>
        </>
    );

    return (
        <div className='w-full'>
            {pathname === '/cafedromedario' && renderMainSponsors()}
            {pathname === '/eskola' && (
                <>
                    {renderSecondarySponsors()}
                    {renderHelpers()}
                </>
            )}
            {pathname !== '/cafedromedario' && pathname !== '/eskola' && (
                <>
                    {renderMainSponsors()}
                    {renderSecondarySponsors()}
                    {renderHelpers()}
                </>
            )}
        </div>
    );
};

export default Sponsor;
