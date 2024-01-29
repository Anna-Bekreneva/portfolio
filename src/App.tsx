import React from "react";
import {Header, Hero, Skills, Works, Education, Contacts} from "./layout";
import {Particle} from "./components/particle";

// todo: i need to check burger menu and add styles for disabled button
function App() {
    return (
        <div className="App" style={{overflow: 'hidden'}}>
            <Particle/>
            <Header/>

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
