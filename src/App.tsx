import React, {FC} from 'react';
import "tailwindcss/tailwind.css"
import './App.css';
import Background from "./components/Background/Background";

const App: FC = () => {

    return (
        <main className={'relative h-[2000px] bg-code-wallpaper'}>
            <Background/>
        </main>
    );
}

export default App;
