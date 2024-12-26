
interface TitleProps {
    subTitle: string;
}
export default function SubTitle({ subTitle }: TitleProps) {
    return (
        
        <div className='w-2/5 bg-gradient-to-r from-blue-400 to-blue-500 rounded-r-md py-2 my-10'>
            <h3 className='text-3xl  text-gray-200 w-full  pl-9 rounded-r-md'>{subTitle}</h3>
        </div>
    );
}