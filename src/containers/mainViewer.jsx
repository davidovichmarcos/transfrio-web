import React from 'react';
import Header from '../components/header';
import { withStyles } from '@material-ui/styles';


const styles = {
    content: {
        backgroundColor: "white",
        height: "100vh"
    },
    headerSpace: {
        height: "76px"
    },
    buttonContainer: {
        position: "fixed",
        top: "75%",
        left: "45%"
    },
    nextPageButton: {
        color: "#FFF",
        fontSize: "40px",
        border: "none",
        outline: "0px",
        background: "transparent",
        transition: "1s all ease-in-out",

        "&:hover": {
            color: "#000",
            paddingTop: "10px"
        }
    }
}

export const MainViewer = (props) => {
    const { classes } = props; 

    return (
        <div>
            <Header></Header>
            <div className={classes.content}>
            </div>
        </div>
    );
}

export default withStyles(styles)(MainViewer);