import React, {FC} from 'react';
import "tailwindcss/tailwind.css"
import './App.css';
import Background from "./components/Background/Background";
import Header from "./components/Header/Header";
import FilterBar from "./components/FIlterBar/FilterBar";
import DirectionShowcase from "./components/DirectionShowcase/DirectionShowcase";


interface IProps {
}

const App: FC<IProps> = () => {

    return (
        <div className={'relative h-fit bg-code-wallpaper bg-contain flex flex-col font-main '}>
            <Background/>
            <Header/>
            <div className={'flex justify-center items-end xs:text-5xl md+:text-6xl text-white'}>
                <span className={'z-30 inline-block w-[870px] ml-6 mr-6 xs:mt-40 md+:mt-48 mb-28'}>Буткемп — выбери свою команду фронтенд-разработки</span>
            </div>
            <main className={'z-30 bg-white flex flex-col items-center'}>
                <FilterBar/>
                <DirectionShowcase/>
            </main>
            <footer className={'z-30 h-fit bg-transparent flex flex-col items-center'}>
                <span className={'inline-block text-wrap xs:text-6xl md+:text-8xl text-white mt-20'}>Путь</span>
                <span className={'inline-block text-wrap xs:text-6xl md+:text-8xl text-white'}>в Яндекс</span>
                <button
                    className={'rounded mt-16 hover:bg-[#fee47c] transition duration-700 hover:text-gray-900 bg-[#ffdf39] text-black text-[26px] px-7 py-[10px] w-fit'}>Начать
                </button>
                <div className={'flex w-[220px] justify-around mt-24'}>
                    <span className={'rounded-full bg-black w-12 h-12 flex items-center justify-center cursor-pointer'}>
                        <span className={'block bg-vk w-10 h-10'}/>
                    </span>
                    <span className={'rounded-full bg-black w-12 h-12 flex items-center justify-center cursor-pointer'}>
                        <span className={'block bg-fb w-10 h-10'}/>
                    </span>
                    <span className={'rounded-full bg-black w-12 h-12 flex items-center justify-center cursor-pointer'}>
                        <span className={'block bg-ok w-10 h-10'}/>
                    </span>
                    <span className={'rounded-full bg-black w-12 h-12 flex items-center justify-center cursor-pointer'}>
                        <span className={'block bg-tg w-10 h-10'}/>
                    </span>
                </div>
                <div className={'text-[13px] mt-10 mb-7 flex md+:flex-row xs:flex-col items-center'}>
                    <span className={'hover:text-red-600 cursor-pointer inline-block mr-4 text-blue-500'}>Тел.: 8-800-250-96-39 доб. 80061</span>
                    <span className={'text-gray-400'}>© 2015–2021 Яндекс</span>
                </div>
            </footer>
        </div>
    );
}

export default App;
