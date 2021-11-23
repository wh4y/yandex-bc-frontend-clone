import React, {FC} from 'react';

interface IProps {
    title: string,
    description: string,
    tags: string[],
}

const DirectionItem: FC<IProps> = ({title, description, tags}) => {
    return (
        <div
            className={'flex flex-col justify-between border border-blue-700 rounded-[12px] min-h-0 min-w-0 md:max-w-[30%] sm:max-w-11/12 m-3 p-4 box-border'}>
            <article>
                <span
                    className={'text-[19.3px] font-semibold inline-block mb-4'}>{title}</span>
                <p className={'inline-block mb-4'}>{description}</p>
                <p className={'inline-block mb-4 text-gray-400 text-[14px]'}>
                    {
                        tags.map(tag => `#${tag}, `)
                    }
                </p>
            </article>
            <button className={'rounded bg-[#3878be] text-white px-3 py-2 w-fit'}>
                Подробнее
            </button>
        </div>
    );
}

export default DirectionItem;