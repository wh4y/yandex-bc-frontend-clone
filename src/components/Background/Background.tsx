import React, {FC} from 'react';

const Background: FC = ({children}) => {

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        const X = e.pageX;
        const Y = e.pageY;

        e!.currentTarget.style.background = `radial-gradient(circle at ${X}px ${Y}px, rgba(5, 0, 0, 65%),rgba(10, 0, 0, 70%) 5%, #000 15%)`;
    }

    const handleLoad = (e: React.SyntheticEvent<HTMLDivElement>) => {
        e!.currentTarget.style.background = `black`;
    }

    return (
        <div onMouseMove={handleMouseMove} onLoad={handleLoad} className={'absolute w-full h-full top-0 left-0'}>
            {children}
        </div>
    );
}

export default Background;