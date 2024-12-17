"use client"
interface TitleProps {
    title: string;
}

export default function Title({ title }: TitleProps) {
    return (
        <div className='w-2/5 bg-gradient-to-r from-blue-400 to-blue-500 rounded-r-md py-2'>
            <h1 className='text-4xl text-left pl-9 text-white'>{title}</h1>
        </div>
    );
}
