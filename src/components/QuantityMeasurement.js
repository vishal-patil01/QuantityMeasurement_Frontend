import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import '../App.css';
import TextField from '@material-ui/core/TextField';
import CustomSelector from './CustomSelector';
import { getMainUnits} from "../services/QuantityMeasurmentService";

export default class QuantityMeasurement extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            mainUnitsList: [],
            subUnitsList: [],
            firstTextFieldValue: "",
            secondTextFieldValue: "",
        };
        this.selectedUnits = "";
        this.firstSubUnit = "";
        this.secondSubUnit = "";
    }

    getMainUnits = () => {
        getMainUnits().then((response) => {
                console.log(response)
                this.setState({mainUnitsList: response.data})
            }
        ).catch((error) => console.log(error))
    }

    componentDidMount() {
        this.getMainUnits();
    }

    render() {
        return (
            <Card className="Root">
                <CardContent>
                    <div className="Component-Container">
                        <CustomSelector width="450px" labelName="Main Units" onChange={this.getSubUnit}
                                        listData={this.state.mainUnitsList}/>
                    </div>
                    <div className="Component-Container">
                        <TextField required id="outlined-required" variant="outlined"
                                   helperText="Please Enter Value To Convert"
                                   onChange={this.convertFromFirstToSecondUnit}
                                   value={this.state.firstTextFieldValue}/>
                        <span className="InlineDiv">=</span>
                        <TextField required id="outlined-required" variant="outlined"
                                   value={this.state.secondTextFieldValue} onChange={this.convertFromSecondToFirstUnit}
                                   helperText="Please Enter Value To Convert"/>
                    </div>
                    <div className="Component-Container">
                        <CustomSelector labelName="Sub Units" onChange={this.getFirstSubUnits}
                                        listData={this.state.subUnitsList}/>
                        <CustomSelector labelName="Sub Units" onChange={this.getSecondSubUnits}
                                        listData={this.state.subUnitsList}/>
                    </div>
                </CardContent>
            </Card>
        );
    }
}
