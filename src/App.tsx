import React, {FC} from 'react';
import "tailwindcss/tailwind.css"
import './App.css';
import Background from "./components/Background/Background";
import Header from "./components/Header/Header";
import FilterBar from "./components/FIlterBar/FilterBar";
import DirectionShowcase from "./components/DirectionShowcase/DirectionShowcase";
import Footer from "./components/Footer/Footer";


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
            <Footer/>
        </div>
    );
}

export default App;
