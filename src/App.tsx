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
        <div className={'relative h-[2500px] bg-code-wallpaper flex flex-col font-main '}>
            <Background>
                <Header/>
                <div className={'flex justify-center items-end h-[430px] text-6xl text-white'}>
                    <span className={'inline-block w-[900px] ml-6 mr-6 mb-28'}>Буткемп - выбери свою команду фронтенд-разработки</span>
                </div>
                <main className={'bg-white flex flex-col items-center'}>
                    <FilterBar/>
                    <DirectionShowcase/>
                </main>
            </Background>
        </div>
    );
}

export default App;
