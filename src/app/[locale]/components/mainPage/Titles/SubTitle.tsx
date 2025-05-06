
interface TitleProps {
    subTitle: string;
}
export default function SubTitle({ subTitle }: TitleProps) {
    return (
        
        <div className='w-full bg-gradient-to-r bg-customblue mb-10 py-1'>
            <h3 className='text-5xl text-gray-200 w-full text-center font-fredoka font-semibold uppercase'>{subTitle}</h3>
        </div>
    );
}