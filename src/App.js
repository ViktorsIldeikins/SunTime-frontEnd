import React from 'react';
import './App.css';
import View from "./components/View";
import Header from "./components/Header";
import 'rsuite/lib/styles/index.less';
import 'rsuite/dist/styles/rsuite-default.css';

function App() {
    return (
        <>
            <Header/>
            <View/>
        </>
    );
}

export default App;
