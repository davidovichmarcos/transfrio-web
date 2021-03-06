import React from 'react';
import { withStyles} from '@material-ui/styles';

const styles = {
    button: {
        border: "2px solid black",
        cursor: "pointer",
        letterSpacing: "0.0525rem",
        overflow: "hidden",
        margin: "5px",
        padding: "20px 30px",
        position: "relative",
        backgroundColor: "#000",
        textAlign: "center",
        textTransform: "camelcase",
        fontWeight: "bold",
        outline: "0px",
        transition: "background 5s cubic-bezier(0.19, 1, 0.22, 1)," +
            "border 1s cubic-bezier(0.19, 1, 0.22, 1)," +
            "color 0.6s cubic-bezier(0.19, 1, 0.22, 1)",
        "&:hover": {
            // backgroundColor: "rgba(39, 35, 35, 0.92)",
            borderColor: "#FFF",
            boxShadow: "0 0 5px rgba(255, 245, 245, 0.8)",
            transition: "background 0s",
            "& div": {
                "& a": {
                    color: "#FFF"
                },
                "& i": {
                    paddingLeft: "5px"
                },
                "& .mask": {
                    backgroundColor: "#fff",
                    transform: "translate3d(150%, -100px, 0) rotate3d(0, 0, 1, 90deg)"
                }
            }
        },
         
        "& div": {
            "& a": {
                color: "white",
                fontSize: "16px",
                textDecoration: "none"
            },
            "& i": {
                paddingLeft: "2px",
                transition: ".5s ease-in-out",
                color: "#FFF",
                fontSize: "18px"
            },
            "& .mask": {
                backgroundColor: "rgba(255, 255, 255, 0.5)",
                height: "100px",
                position: "absolute",
                transform: "translate3d(-120%, -50px, 0) rotate3d(0, 0, 1, 45deg)",
                transition: "all 1.1s cubic-bezier(0.19, 1, 0.22, 1)",
                width: "200px"
            }
        }
    },
    boldFont: {
        fontWeight: "bold"
    }    
}

const HeaderButton = (props) => {
    const { classes, text, icon, clicked } = props;
    return (
    <button className={classes.button +' '+ (props.strong ? classes.boldFont : '' )} onClick={ () => clicked(true)}>
        <div>
            <a href>{ text }</a>
            { icon }
            <div className="mask"></div>
        </div>
    </button>);
};


export default withStyles(styles)(HeaderButton);