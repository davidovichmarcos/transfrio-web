import React from 'react';
import { withStyles } from '@material-ui/styles';
import WhiteTextField from './textField'; 
import ReflectButton from './reflectButton';

const styles = {
    centerContainer: {
        margin: "20px",
        display: "flex",
        justifyContent: "center"
    },
    contentContainer: {
        padding: "10px",
        maxWidth: "450px",
        width: "50%",
        border: "1px solid",
        borderRadius: "5px",
        backgroundColor: "black",
        color: "white"
    },
    formContainer: {
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
    },
    fieldsContainer: {
        display: "flex",
        flexDirection: "column",
        marginBottom: "60px",
        paddingLeft: "10px",
        paddingRight: "10px"
    },
}

const SignInForm = (props) => {
    const { classes, onAction } = props; 
    let user = { name: '', email: '', password: '' };
    const setName = value => user.name = value;
    const setEmail = value => user.email = value;
    const setPassword = value => user.password = value;
    const newUser= () => onAction(user);

    const validatePassword = (password, callbackSuccess, callbackError) => {
        const strongRegex =  { test: () => password.length > 6 }; // :D new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");
        if(strongRegex.test(password)) {
            callbackSuccess(password);
        } else {
            callbackError(password);
        }
    }

    return (
        <div className={classes.centerContainer}>
            <div className={classes.contentContainer}>
                <div className={classes.formContainer}>
                    <div className={classes.fieldsContainer}>
                        <WhiteTextField
                        id="standard-basic"
                        className={classes.textField}
                        label="Nombre"
                        margin="normal"
                        onChange={ event => setName(event.target.value)}
                        />
                        <WhiteTextField
                        id="standard-basic"
                        className={classes.textField}
                        label="Email"
                        margin="normal"
                        onChange={ event => setEmail(event.target.value)}
                        />
                        <WhiteTextField
                        id="standard-basic"
                        className={classes.textField}
                        label="Contraseña"
                        margin="normal"
                        type="password"
                        onChange={ event => validatePassword(event.target.value, password => setPassword(password), () => console.log("PASS WEAK") )}
                        />
                    </div>
                    <ReflectButton text="Registrarte" icon={<i className="fa fa-instagram"></i>} clicked={ () => newUser() }></ReflectButton>
                </div>
            </div>
        </div>
    );
}

export default withStyles(styles)(SignInForm);