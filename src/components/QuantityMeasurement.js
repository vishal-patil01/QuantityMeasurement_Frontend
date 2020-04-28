import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import '../App.css';
import CustomSelector from './CustomSelector';
import { getMainUnits} from "../services/QuantityMeasurmentService";

export default class QuantityMeasurement extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            mainUnitsList: [],
        };
        this.selectedUnits = "";
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
                </CardContent>
            </Card>
        );
    }
}
