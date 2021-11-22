import React, {FC} from 'react';
import "tailwindcss/tailwind.css"
import './App.css';
import Background from "./components/Background/Background";

const App: FC = () => {

    return (
        <main className={'relative h-[2000px] bg-code-wallpaper'}>
            <Background>
                <div className={'bg-transparent h-[500px] relative text-white text-8xl'}>
                    JOJO
                </div>
            </Background>
        </main>
    );
}

export default App;
