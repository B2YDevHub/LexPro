import { ReactElement } from 'react';

interface CardProps {
    title: string;
    subTitle: string
    svgChildren: ReactElement
}

export function Card ({ title, subTitle, svgChildren }: CardProps) {
    return (
        <div className="p-6 bg-gray600  border-[1px] border-zinc1 flex flex-col items-center justify-center gap-5 w-full">
            {svgChildren}
            <div className='flex flex-col gap-3 items-center justify-center'>
                <h2 className='text-xl text-brown400 font-bold text-nowrap'>{title}</h2>
                <span className='font-inter font-bold text-gray500 text-nowrap'>{subTitle}</span>
            </div>
        </div>
    )
}