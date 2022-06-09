import React from 'react';
import './App.css';
import {Header} from "./components/header/Header";
import {Main} from "./components/main/Main";
import {MySkills} from "./components/mySkills/MySkills";
import {Examples} from "./components/examples/Examples";
import {Contacts} from "./components/Contacts/Contacts";
import {Footer} from "./components/footer/Footer";
import {Route, Routes} from 'react-router-dom';

function App() {
    return (
        <div className="App">
            {/*<Routes>
                <Route path={'/'} element={<Main/>}></Route>
                <Route path={'/main'} element={<Main/>}></Route>
                <Route path={'/skills'} element={<MySkills/>}></Route>
                <Route path={'/examples'} element={<Examples/>}></Route>
                <Route path={'/contacts'} element={<Contacts/>}></Route>
            </Routes>*/}
            <Header/>
            <Main/>
            <MySkills/>
            <Examples/>
            <Contacts/>
            <Footer/>
        </div>
    );
}

export default App;
