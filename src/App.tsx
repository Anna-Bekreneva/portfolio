import React from "react";
import {Header, Hero, Skills, Works, Education, Footer, Contacts, Works2} from "./layout";


function App() {
    return (
        <div className="App">
            <Header/>
            <main>
                <Hero/>
                <Skills/>
                <Works/>
                {/*<Works2/>*/}
                <Education/>
                <Contacts/>
            </main>
            {/*<Footer/>*/}
        </div>
    );
}

export default App;
