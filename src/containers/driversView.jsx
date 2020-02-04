import React from 'react';
import Header from '../components/header';
import { withStyles } from '@material-ui/styles';


const styles = {
    content: {
        backgroundColor: "white",
        height: "100vh"
    }
}


export const DriversView = (props) => {
    const { classes } = props; 
    
    return (
        <div>
            <Header></Header>
            <div className={classes.content}>
                <div>Drivers</div>
            </div>
        </div>
    );
}

export default withStyles(styles)(DriversView);