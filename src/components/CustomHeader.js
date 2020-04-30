import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

export default function CustomHeader() {
    return (
        <div>
            <AppBar position="static" style={{alignItems: "center"}}>
                <Toolbar>
                    <Typography variant="h5">
                        Quantity Measurement Application
                    </Typography>
                </Toolbar>
            </AppBar>
        </div>
    );
}