import React, {FC} from 'react';
import "tailwindcss/tailwind.css"
import './App.css';
import Background from "./components/Background/Background";
import Header from "./components/Header/Header";
import FilterBar from "./components/FIlterBar/FilterBar";


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
                    <div className={'flex justify-center self-center'}>
                        <div
                            className={'box-border md:max-w-[1000px] sm:max-w-full self-center flex-wrap sm:flex-col sm:items-center md:flex-row md:items-stretch flex justify-start mb-16'}>
                            <div
                                className={'flex flex-col justify-between border border-blue-700 rounded-[12px] min-h-0 min-w-0 md:max-w-[30%] sm:max-w-11/12 m-3 p-4 box-border'}>
                                <article>
                                    <span
                                        className={'text-[19.3px] font-semibold inline-block mb-4'}>Баннерная реклама</span>
                                    <p className={'inline-block mb-4'}>
                                        Мы делаем релевантную рекламу, благодаря которой вы пользуетесь привычными
                                        сервисами, читаете любимые книги и слушаете понравившихся артистов.
                                    </p>
                                    <p className={'inline-block mb-4 text-gray-400 text-[14px]'}>
                                        #Инфраструктурные задачи, #Продуктовые задачи, #Люблю рефакторить, #Хочу
                                        производительность/скорость, #Общие решения/библиотеки
                                    </p>
                                </article>
                                <button className={'rounded bg-[#3878be] text-white px-3 py-2 w-fit'}>
                                    Подробнее
                                </button>
                            </div>
                        </div>
                    </div>
                </main>
            </Background>
        </div>
    );
}

export default App;
