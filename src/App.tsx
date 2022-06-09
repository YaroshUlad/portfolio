import React from 'react';
import './App.css';
import {Header} from "./components/header/Header";
import {Main} from "./components/main/Main";
import {MySkills} from "./components/mySkills/MySkills";
import {Examples} from "./components/examples/Examples";
import {Contacts} from "./components/Contacts/Contacts";

function App() {
    return (
        <div className="App">
            <Header/>
            <Main/>
            <MySkills/>
            <Examples/>
            <Contacts/>

        </div>
    );
}

export default App;
