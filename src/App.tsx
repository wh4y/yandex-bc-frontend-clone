import React, {FC, useEffect, useState} from 'react';
import "tailwindcss/tailwind.css"
import './App.css';
import Background from "./components/Background/Background";
import Header from "./components/Header/Header";

const App: FC = () => {

    return (
        <main className={'relative h-[2000px] bg-code-wallpaper'}>
            <Background>
                <Header/>
            </Background>
        </main>
    );
}

export default App;
