import React from 'react';
import './App.css';
import {Header} from './header/Header';
import {Hero} from './hero/Hero';
import {Skills} from './skills/Skills';
import {Works} from './works/Works';
import {Promo} from './promo/Promo';
import {Contacts} from './contacts/Contacts';
import {Footer} from './footer/Footer';

function App() {
  return (
    <div className='wrapper'>
        <Header></Header>
        <main>
            <Hero></Hero>
            <Skills></Skills>
            <Works></Works>
            <Promo></Promo>
            <Contacts></Contacts>
        </main>
        <Footer></Footer>
    </div>
  );
}

export default App;
