import Image from 'next/image';
import Link from 'next/link';

export default function News() {
  return (
    <div className="flex flex-wrap h-auto xl:h-112 w-full gap-8 justify-center sm:grid sm:grid-cols-1 md:grid md:grid-cols-2 lg:grid lg:grid-cols-3 xl:flex">

      <Link
        href="/login"
        className='hove:cursor-pointer'
      >
        <div className='group relative h-96 w-96 hover:w-105  hover:h-100 transition-all duration-300 ease-in-out  mb-32'>
          <Image
            src={'https://photos.txuli.com/duranguesa/Duranguesa_3.jpg'}
            alt="Noticias"
            width={400}
            height={240}
            className='w-full h-full object-cover'
          />
          <div className='absolute bottom-0 bg-opacity-75  text-white w-full text-left p-2 font-fredoka font-light'>
            20-10-2024
          </div>
          <div className='bg-customDarkBlue text-white text-center'>
            <div className='ml-1 mb-5'>
              <h3 className='font-fredoka font-semibold text-2xl text-left'>TITULO</h3>
              <h4 className='font-fredoka font-light text-left text-2xl'>CATEGORIA</h4>
            </div>
          </div>
        </div>
      </Link>



      <Link
        href="/login"
        className='hove:cursor-pointer'
      >
        <div className='group relative h-96 w-96 hover:w-105  hover:h-100 transition-all duration-300 ease-in-out  sm:mb-32 l:mb-0'>
          <Image
            src={'https://photos.txuli.com/duranguesa/Duranguesa_3.jpg'}
            alt="Noticias"
            width={400}
            height={240}
            className='w-full h-full object-cover'
          />
          <div className='absolute bottom-0 bg-opacity-75  text-white w-full text-left p-2 font-fredoka font-light'>
            20-10-2024
          </div>
          <div className='bg-customDarkBlue text-white text-center'>
            <div className='ml-1 mb-5'>
              <h3 className='font-fredoka font-semibold text-2xl text-left'>TITULO</h3>
              <h4 className='font-fredoka font-light text-left text-2xl'>CATEGORIA</h4>
            </div>
          </div>
        </div>
      </Link>



      <Link
        href="/login"
        className='hove:cursor-pointer'
      >
        <div className='group relative h-96 w-96 hover:w-105  hover:h-100 transition-all duration-300 ease-in-out  mb-32'>
          <Image
            src={'https://photos.txuli.com/duranguesa/Duranguesa_3.jpg'}
            alt="Noticias"
            width={400}
            height={240}
            className='w-full h-full object-cover'
          />
          <div className='absolute bottom-0 bg-opacity-75  text-white w-full text-left p-2 font-fredoka font-light'>
            20-10-2024
          </div>
          <div className='bg-customDarkBlue text-white text-center'>
            <div className='ml-1 mb-5'>
              <h3 className='font-fredoka font-semibold text-2xl text-left'>TITULO</h3>
              <h4 className='font-fredoka font-light text-left text-2xl'>CATEGORIA</h4>
            </div>
          </div>
        </div>
      </Link>

    </div>



  )
}
