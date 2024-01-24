import React from "react";
import {Header, Hero, Skills, Works, Education, Contacts} from "./layout";

function App() {
    return (
        <div className="App">
            {/*<Header/>*/}
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
