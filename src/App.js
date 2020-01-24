import React, {useState} from 'react';
import './App.css';
import SunTimeToday from "./components/SunTimeToday";
import Header from "./components/Header";
import 'rsuite/lib/styles/index.less';
import 'rsuite/dist/styles/rsuite-default.css';
import CitySelector from "./components/CitySelector";

function App() {

    const [city, setCity] = useState('Riga');

    return (
        <>
            <Header city={city}/>
            <SunTimeToday city={city}/>
            <CitySelector city={city} setCity={setCity}/>
        </>
    );
}

export default App;
