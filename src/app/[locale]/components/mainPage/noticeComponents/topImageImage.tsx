import Image from "next/image";
import Bar from './bar';


export default function TopImage(props: { image: string, alt: string|undefined, title: string, subTitle: string, colors?: string }) {
    return (
        <>
            <div className=" h-112 relative">
                <Image src={props.image} alt=""
                    width={1600}
                    height={600}
                    className="w-full h-full object-cover" />
                <div className='absolute  bottom-1 xl:bottom-24 text-white xl:w-112 bg-black bg-opacity-60 rounded-e-3xl p-3'>
                    <h1 className='text-left p-2 font-fredoka font-semibold text-4xl uppercase'>{props.title}</h1>
                    <h2 className='text-left p-2 font-fredoka font-light text-3xl uppercase'>{props.subTitle}</h2>
                </div>
            </div>
            <Bar color={props.colors}/>
        </>
    )
}