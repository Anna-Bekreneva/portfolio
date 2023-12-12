import React from "react";
import {Header, Hero, Promo, Skills, Works, Education} from "./layout";


function App() {
    return (
        <div className="App">
            <Header/>
            <main>
                <Hero/>
                <Skills/>
                <Works/>
                <Promo/>
                <Education/>
            </main>
        </div>
    );
}

export default App;
