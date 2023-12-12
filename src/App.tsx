import React from "react";
import {Header, Hero, Promo, Skills, Works} from "./layout";


function App() {
    return (
        <div className="App">
            <Header/>
            <main>
                <Hero/>
                <Skills/>
                <Works/>
                <Promo/>
            </main>
        </div>
    );
}

export default App;
