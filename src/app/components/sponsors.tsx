
import MainSponsor from './mainSponsor';

import Secondsponsor from './secondSponsor';

const Sponsor = () => {
    return (
        <div className='w-full'>
                <h3 className='text-5xl text-center'>BABESLE NAGUSIAK</h3>
                <div className="bg-blue-600 grid w-10/12 mx-auto sm:grid-cols-1 lg:grid-cols-2">
                <MainSponsor img={'https://photos.txuli.com/duranguesa/patrocinadores/CafeDromedario.webp'} Link={"https://cafedromedario.com/"}/>
                <MainSponsor img={'https://photos.txuli.com/duranguesa/patrocinadores/flotamet.png' } Link={""}/>
             
                </div>
                <h3 className='text-5xl text-center'>BABESLEAK</h3>
                <div className="bg-blue-600 grid  w-5/6 mx-auto sm:grid-cols-3 lg:grid-cols-4 ">
                <Secondsponsor img={'https://photos.txuli.com/duranguesa/patrocinadores/vcg.png' } Link={"https://www.vcg-decoletaje.com/index.html"}/>
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
                
                
                
        </div>
    )
}
export default Sponsor;