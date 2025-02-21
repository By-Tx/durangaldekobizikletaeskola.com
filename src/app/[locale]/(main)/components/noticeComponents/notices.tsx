
import Image from 'next/image';
import {Link} from '@/i18n/routing';
import { useTranslations } from "use-intl";
export default function News() {
  const t = useTranslations("noticeComponent");
  return (
    <div className="flex flex-wrap h-auto xl:h-112 w-full gap-8 justify-center sm:grid sm:grid-cols-1 md:grid md:grid-cols-2 lg:grid lg:grid-cols-2 xl:flex mb-24 ">

      <Link
        href="/espainakoTxapelketa"
        className='hove:cursor-pointer'
      >
        <div className='group relative h-96 w-96 hover:w-100  lg:hover:h-100 transition-all duration-300 ease-in-out  mb-32 mx-auto'>
          <Image
            src={'https://photos.txuli.com/duranguesa/notices/noticiasSeleccion.png'}
            alt={t("altImage")}
            width={400}
            height={240}
            className='w-full h-full object-cover rounded-t-2xl '
          />
          <div className='absolute bottom-0 bg-opacity-75  text-white w-full text-left p-2 font-fredoka font-light'>
            {t("date")}
          </div>
          <div className='bg-customDarkBlue text-white text-center rounded-b-2xl pl-1'>
            <div className='ml-1 mb-5  '>
              <h3 className='font-fredoka font-semibold text-xl text-left'>{t("noticeTitle")}  </h3>
              <h4 className='font-fredoka font-light text-left text-2xl'>{t("category")}</h4>
            </div>
          </div>
        </div>
      </Link>

      <Link
        href="/irrisarriNotice"
        className='hover:cursor-pointer'
      >
        <div className='group relative h-96 w-96 hover:w-100  lg:hover:h-100 transition-all duration-300 ease-in-out mb-32 mx-auto'>
          <Image
            src={'https://photos.txuli.com/duranguesa/notices/irrisarri.JPG'}
            alt={t("altImage2")}
            width={400}
            height={240}
            className='w-full h-full object-cover rounded-t-2xl '
          />
          <div className='absolute bottom-0 bg-opacity-75  text-white w-full text-left p-2 font-fredoka font-light'>
            {t("date2")}
          </div>
          <div className='bg-customDarkBlue text-white text-center rounded-b-2xl pl-1'>
            <div className='ml-1 mb-5'>
              <h3 className='font-fredoka font-semibold text-xl text-left'> {t("noticeTitle2")} </h3>
              <h4 className='font-fredoka font-light text-left text-2xl'>{t("category2")}</h4>
            </div>
          </div>
        </div>
      </Link>

      <Link
        href="/bttTxapelduna"
        className='hove:cursor-pointer md:col-span-2'
      >
        <div className='group relative h-96 w-96  hover:w-100  lg:hover:h-100 transition-all duration-300 ease-in-out  sm:mb-32 l:mb-0 mx-auto'>
          <Image
            src={'https://photos.txuli.com/duranguesa/notices/ander.JPG'}
            alt={t("altImage3")}
            width={400}
            height={240}
            className='w-full h-full object-cover rounded-t-2xl '
          />
          <div className='absolute bottom-0 bg-opacity-75  text-white w-full text-left p-2 font-fredoka font-light'>
            26-05-2024
          </div>
          <div className='bg-customDarkBlue text-white text-center rounded-b-2xl pl-1'>
            <div className='ml-1 mb-5 '>
              <h3 className='font-fredoka font-semibold text-xl text-left'>{t("noticeTitle3")}</h3>
              <h4 className='font-fredoka font-light text-left text-2xl'>{t("category3")}</h4>
            </div>
          </div>
        </div>
      </Link>



      

    </div>



  )
}
