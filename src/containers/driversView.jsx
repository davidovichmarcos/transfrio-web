import React from 'react';
import Header from '../components/header';
import { withStyles } from '@material-ui/styles';
import DriverForm from '../components/driverForm';


const styles = {
    content: {
        backgroundColor: "white",
        margin: "5px"
    }
}


export const DriversView = (props) => {
    const { classes } = props; 
    
    return (
        <div>
            <Header></Header>
            <div className={classes.content}>
                <DriverForm/>
            </div>
        </div>
    );
}

export default withStyles(styles)(DriversView);