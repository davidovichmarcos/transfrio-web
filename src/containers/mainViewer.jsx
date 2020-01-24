import React, { useEffect } from 'react';
import { useStateValue } from '../state/rootState';
//import Header from '../components/header';
import ReactPageScroller from "react-page-scroller";
import { withStyles } from '@material-ui/styles';


const styles = {
    content: {
        backgroundColor: "#FFF",
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
    const [state, dispatch] = useStateValue();
    const { user } = state;
    const { isDealing, showBookingSection, goToBookingSection, currentPage } = state;

    return (
        <div>
            
            <div className={classes.content}>
            holi!
            </div>
        </div>
    );
}

export default withStyles(styles)(MainViewer);