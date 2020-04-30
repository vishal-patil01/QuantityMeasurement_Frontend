import React from 'react';
import './App.css';
import QuantityMeasurement from './components/QuantityMeasurement'
import CustomHeader from "./components/CustomHeader";

function App() {
    return (
        <div>
            <div>
                <CustomHeader/>
            </div>
            <div className="background-flex ">
                <h2 align="center" style={{marginTop: "7%"}}>Unit Conversion</h2>
                <QuantityMeasurement/>
            </div>
        </div>
    );
}

export default App;
