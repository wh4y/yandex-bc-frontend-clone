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
            'text-xl ' +
            'font-bold font-main ' +
            `${isScrolled ? 'bg-white text-black' : 'bg-transparent text-white'}`}>
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
                    <span className={'inline-block mr-4'}>Команда фронтенда</span>
                    <span>Команда бекенда</span>
                </div>
            </div>
        </header>
    );
}

export default Header;