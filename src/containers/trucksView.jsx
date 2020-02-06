import React from 'react';
import Header from '../components/header';
import { withStyles } from '@material-ui/styles';
import TruckForm  from '../components/truckForm';
import { enviroment } from '../enviroment';


const styles = {
    content: {
        backgroundColor: "white",
    }
}


export const TrucksView = (props) => {
    const { classes }  = props; 
    
    const createTruck = truck => {
        truck.truckId = Date.now();
        fetch(enviroment.baseUrl + `/createTruck`, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(truck)
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
                <TruckForm onAction={ action => createTruck(action) }/>
            </div>
        </div>
    );
}

export default withStyles(styles)(TrucksView);