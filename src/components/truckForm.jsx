import React from "react";
import { withStyles } from "@material-ui/styles";
import WhiteTextField from "./textField";
import ReflectButton from "./reflectButton";
import Select from "react-select";
import { enviroment } from "../enviroment";

const getDrivers = drivers => {
  return fetch(enviroment.baseUrl + `/getDrivers`, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    },
    body: JSON.stringify(drivers)
  })
    .then(response => response.json())
    .catch(function(error) {
      console.log(error);
    });
};
const styles = {
  content: {
    backgroundColor: "white",
    height: "80vh" // to define later
  },
  formContainer: {
    display: "flex",
    width: "300px",
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
};

export const TruckForm = props => {
  const { classes, onAction } = props;
  var drivers = [];
  let truck = {
    brand: "",
    driverDocument: "",
    licensePlate: "",
    model: "",
    year: ""
  };
  const setBrand = value => (truck.brand = value);
  const setDriverDocument = value => (truck.driverDocument = value);
  const setLicensePlate = value => (truck.licensePlate = value);
  const setModel = value => (truck.model = value);
  const setYear = value => (truck.year = value);
  const newTruck = () => onAction(truck);

  getDrivers().then(result => {
    const resultArray = Object.values(result);
    resultArray.forEach(driver => {
      drivers.push({
        value: driver.document,
        label: `${driver.name} ${driver.lastName}`
      });
    });
    // console.log(drivers);
  });

  return (
    <div className={classes.content}>
      <div className={classes.formContainer}>
        <div className={classes.fieldsContainer}>
          <WhiteTextField
            id="standard-basic"
            className={classes.textField}
            label="Marca"
            margin="normal"
            onChange={event => setBrand(event.target.value)}
          />

          <WhiteTextField
            id="standard-basic"
            className={classes.textField}
            label="Patente"
            margin="normal"
            onChange={event => setLicensePlate(event.target.value)}
          />
          <WhiteTextField
            id="standard-basic"
            className={classes.textField}
            label="Modelo"
            margin="normal"
            onChange={event => setModel(event.target.value)}
          />
          <WhiteTextField
            id="standard-basic"
            className={classes.textField}
            label="Año"
            type="number"
            margin="normal"
            onChange={event => setYear(event.target.value)}
          />
          <Select
            options={drivers}
            placeholder="Driver"
            onChange={event => setDriverDocument(event.value)}
          />
        </div>
        <ReflectButton
          text="Crear Camión"
          icon={<i className="fa fa-instagram"></i>}
          clicked={() => newTruck()}
        />
      </div>
    </div>
  );
};

export default withStyles(styles)(TruckForm);
