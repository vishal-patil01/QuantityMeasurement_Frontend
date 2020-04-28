import React, {Component} from 'react';
import TextField from '@material-ui/core/TextField';

export default class CustomSelector extends Component {
    render() {
        return (
            <TextField style={{width: this.props.width}} id="outlined-select-Units" select label={this.props.labelName}
                       onChange={this.props.onChange}
                       helperText="Please select your Units"
                       variant="outlined">
                {this.props.listData.map((option) => (
                    <option value={option}>
                        {option}
                    </option>
                ))}
            </TextField>
        );
    }
}
