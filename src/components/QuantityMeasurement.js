import React, {useEffect, useState} from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import '../App.css';
import CustomSelector from './CustomSelector';
import {getConvertedValue, getMainUnits, getSubUnit} from "../services/QuantityMeasurmentService";
import TextField from "@material-ui/core/TextField";

export default function QuantityMeasurement() {
    const [mainUnitsList, setMainUnits] = useState([]);
    const [subUnitsList, setSubUnits] = useState([]);
    const [firstTextFieldValue, setFirstTextFieldValue] = useState(0);
    const [secondTextFieldValue, setSecondTextFieldValue] = useState(0);
    const [firstSubUnit, setFirstSubUnits] = useState("");
    const [secondSubUnit, setSecondSubUnits] = useState("");

    const fetchMainUnits = () => {
        getMainUnits().then((response) => {
                console.log(response);
                setMainUnits(response.data);
            }
        ).catch((error) => console.log(error));
    };
    const fetchSubUnit = event => {
        console.log("selected MainUnits " + event.target.value);
        getSubUnit(event.target.value).then(response => {
            console.log(response);
            setSubUnits(response.data)
        })
            .catch(error => {
                console.log(error);
            })
    };
    const getFirstSubUnits = event => {
        setFirstSubUnits(event.target.value);
        console.log("selected First SubUnits " + firstSubUnit);
    };

    const getSecondSubUnits = event => {
        setSecondSubUnits(event.target.value);
        console.log("selected Second SubUnits " + secondSubUnit);
    };

    const convertFromFirstToSecondUnit = event => {
        setFirstTextFieldValue(event.target.value);
        getConvertedValue(event.target.value, firstSubUnit, secondSubUnit,).then((response) => {
            console.log(response);
            setSecondTextFieldValue(response.data.value);
        })
    };

    const convertFromSecondToFirstUnit = event => {
        setSecondTextFieldValue(event.target.value);
        getConvertedValue(event.target.value, secondSubUnit, firstSubUnit).then((response) => {
            console.log(response);
            setFirstTextFieldValue(response.data.value);
        })
    };

    useEffect(() => {
        fetchMainUnits();
    }, []);

    return (
        <Card className="Root">
            <CardContent>
                <div className="Component-Container">
                    <CustomSelector width="450px" labelName="Main Units" onChange={fetchSubUnit}
                                    listData={mainUnitsList}/>
                </div>
                <div className="Component-Container">
                    <TextField required id="outlined-required" variant="outlined"
                               helperText="Please Enter Value To Convert"
                               onChange={convertFromFirstToSecondUnit}
                               value={firstTextFieldValue}/>
                    <span className="InlineDiv">=</span>
                    <TextField required id="outlined-required" variant="outlined"
                               value={secondTextFieldValue} onChange={convertFromSecondToFirstUnit}
                               helperText="Please Enter Value To Convert"/>
                </div>
                <div className="Component-Container">
                    <CustomSelector labelName="Sub Units" onChange={getFirstSubUnits}
                                    listData={subUnitsList}/>
                    <CustomSelector labelName="Sub Units" onChange={getSecondSubUnits}
                                    listData={subUnitsList}/>
                </div>
            </CardContent>
        </Card>
    );
}
