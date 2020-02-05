import React from 'react';
import Header from '../components/header';
import { withStyles } from '@material-ui/styles';


const styles = {
    content: {
        backgroundColor: "white",
    }
}


export const TrucksView = (props) => {
    const { classes }  = props; 

    return (
        <div>
            <Header></Header>
            <div className={classes.content}>
                <div>Trucks</div>
            </div>
        </div>
    );
}

export default withStyles(styles)(TrucksView);