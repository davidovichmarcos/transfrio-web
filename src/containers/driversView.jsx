import React from 'react';
import Header from '../components/header';
import { withStyles } from '@material-ui/styles';
import DriverForm from '../components/driverForm';
import { enviroment } from '../enviroment';

const styles = {
    content: {
        backgroundColor: "white"
    }
}


export const DriversView = (props) => {
    const { classes } = props; 
    
    const createDriver = driver => {
        driver.driverId = Date.now();
        fetch(enviroment.baseUrl + `/createDriver`, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(driver)
        })
        .then( response => response.json() )
        .catch(function(error) {
            console.log(error);
        });
    }
    return (
        <div>
            <Header></Header>
            <div className={classes.content}>
                <DriverForm onAction={ action => createDriver(action) }/>
            </div>
        </div>
    );
}

export default withStyles(styles)(DriversView);