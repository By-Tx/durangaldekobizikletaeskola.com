
interface TitleProps {
    title: string;
}
export default function SubTitle({ title }: TitleProps) {
    return (
        
        <div className='w-full bg-gradient-to-r bg-customblue mb-10'>
        <h3 className='text-5xl text-gray-200 w-full text-center font-fredoka font-semibold'>{title}</h3>
    </div>
    );
}