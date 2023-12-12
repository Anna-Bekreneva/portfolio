import React from "react";
import {Header} from "./layout";
import {Hero} from "./layout/hero";
import {Skills} from "./layout/skills";
import {Works} from "./layout/works";



function App() {
    return (
        <div className="App">
            <Header/>
            <main>
                <Hero/>
                <Skills/>
                <Works/>
            </main>
        </div>
    );
}

export default App;
