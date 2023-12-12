import React from "react";
import {Header, Hero, Promo, Skills, Works, Education, Footer} from "./layout";


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
            <Footer/>
        </div>
    );
}

export default App;
