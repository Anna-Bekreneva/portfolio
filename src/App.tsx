import React from "react";
import {Header} from "./layout";
import {Hero} from "./layout/hero";
import {Skills} from "./layout/skills";



function App() {
    return (
        <div className="App">
            <Header/>
            <main>
                <Hero/>
                <Skills/>
            </main>
        </div>
    );
}

export default App;
