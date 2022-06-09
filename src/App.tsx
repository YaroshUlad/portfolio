import React from 'react';
import './App.css';
import {Header} from "./components/header/Header";
import {Main} from "./components/main/Main";
import {MySkills} from "./components/mySkills/MySkills";

function App() {
  return (
    <div className="App">
      <Header/>
        <Main/>
        <MySkills/>
    </div>
  );
}

export default App;
