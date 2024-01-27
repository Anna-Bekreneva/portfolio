import React from "react";
import {Header, Hero, Skills, Works, Education, Contacts} from "./layout";
import {Particle} from "./components/particle";
import Headroom from "react-headroom";

function App() {
    return (
        <div className="App">
            <Particle/>
            <Headroom>
                <Header/>
            </Headroom>

            <main>
                <Hero/>
                <Skills/>
                <Works/>
                <Education/>
                <Contacts/>
            </main>
        </div>
    );
}

export default App;
