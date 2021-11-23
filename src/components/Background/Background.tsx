import React, {FC, useEffect, useRef} from 'react';

const Background: FC = ({children}) => {

    const ref = useRef(null);

    useEffect(() => {
        document.addEventListener('mousemove', e => {
            const X = e.pageX;
            const Y = e.pageY;
            // @ts-ignore
            ref.current!.style.background = `radial-gradient(circle at ${X}px ${Y}px, rgba(5, 0, 0, 65%),rgba(10, 0, 0, 70%) 5%, #000 15%)`;
        })
    }, [])

    return (
        <div ref={ref} style={{background: 'black'}}
             className={'absolute w-full h-full top-0 left-0'}>
            {children}
        </div>
    );
}

export default Background;