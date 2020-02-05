import React from 'react';
import { withStyles } from '@material-ui/styles';
import WhiteTextField from './textField'; 
import ReflectButton from './reflectButton';

const styles = {
    content: {
        backgroundColor: "white",
        height: "80vh"// to define later
    },
    formContainer: {
        display: "flex",
        width: "600px",
        justifyContent: "center",
        flexDirection: "column",
        borderRadius: "10px",
        backgroundColor: "rgba(150,150,150,0.5);",
        padding: "20px",
        margin: "5px"
    },
    fieldsContainer: {
        display: "flex",
        flexDirection: "column",
        marginBottom: "60px",
        paddingLeft: "10px",
        paddingRight: "10px"
    }
}


export const DriverForm = (props) => {
    const { classes, onAction } = props; 
    let driver = { name: '', lastName: '', address: '', phone: '', document: '' };
    const setName = value => driver.name = value;
    const setLastName = value => driver.lastName = value;
    const setAddress = value => driver.address = value;
    const setPhone = value => driver.phone = value;
    const setDocument = value => driver.document = value;
    const newDriver= () => onAction(driver);

    return (
        <div>
            <div className={classes.content}>
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
                        label="Apellido"
                        margin="normal"
                        onChange={ event => setLastName(event.target.value)}
                        />
                       <WhiteTextField
                        id="standard-basic"
                        className={classes.textField}
                        label="Dirección"
                        margin="normal"
                        onChange={ event => setAddress(event.target.value)}
                        />
                        <WhiteTextField
                        id="standard-basic"
                        className={classes.textField}
                        label="Telefono"
                        margin="normal"
                        onChange={ event => setPhone(event.target.value)}
                        />
                        <WhiteTextField
                        id="standard-basic"
                        className={classes.textField}
                        label="Documento"
                        margin="normal"
                        onChange={ event => setDocument(event.target.value)}
                        />
                    </div>
                    <ReflectButton text="Crear Conductor" icon={<i className="fa fa-instagram"></i>} clicked={ () => newDriver() }></ReflectButton>
                </div>
            </div>
        </div>
    );
}

export default withStyles(styles)(DriverForm);