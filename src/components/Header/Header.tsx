import React, {useEffect, useState} from 'react';

const Header = () => {

    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        window.addEventListener('scroll', () => {
            window.scrollY > 0 ? setIsScrolled(true) : setIsScrolled(false);
        })
    }, []);

    return (
        <header
            className={'fixed flex w-full h-20 ' +
            'items-center justify-center ' +
            'text-xl z-50 transition duration-200 ' +
            'font-bold border-b-[1px] border-transparent ' +
            `${isScrolled ? 'bg-white text-black border-gray-200' : 'bg-transparent text-white'}`}>
            <div className={'flex justify-between w-[78%]'}>
                <div className={'relative flex h-7'}>
                    <img
                        src={`//yastatic.net/q/logoaas/v2/Яндекс.svg?size=17.5&color=${isScrolled ? '000' : 'fff'}`}
                        className={'h-full'}/>
                    <img
                        src={`//yastatic.net/q/logoaas/v2/ Буткемп.svg?size=17.5&color=${isScrolled ? '000' : 'fff'}`}
                        className={'h-full'}/>
                </div>
                <div className={'flex font-normal text-[.75em]'}>
                    <span className={'inline-block mr-4  hover:text-red-500'}><a href={'#'}>Команда фронтенда</a></span>
                    <span className={'hover:text-red-500'}><a href={'#'}>Команда бекенда</a></span>
                </div>
            </div>
        </header>
    );
}

export default Header;