import React, { Component } from "react";
import { withStyles } from "@material-ui/styles";
import { enviroment } from "../enviroment";
import SearchInput from "./searchInput";

const styles = {
  xx: {
    backgroundColor: "lightGrey",
  },
};

const getTrucks = async () => {
  let res = await fetch(enviroment.baseUrl + `/getTrucks`);
  res = await res.json();
  const trucks = Object.entries(res).map((subArray) => {
    let truck = subArray[1];
    truck.id = subArray[0];
    return truck;
  });
  return trucks;
};

const getDrivers = async () => {
  let res = await fetch(enviroment.baseUrl + `/getDrivers`);
  res = await res.json();
  const drivers = Object.entries(res).map((subArray) => {
    let driver = subArray[1];
    driver.id = subArray[0];
    return driver;
  });
  return drivers;
};

const buildTrucks = (trucks, drivers) => {
  const buildedTrucks = trucks.map((truck) => ({
    ...truck,
    driver: drivers.find((driver) => driver.document === truck.driverDocument),
  }));

  return buildedTrucks;
};

const listTrucks = (trucks) => {
  console.log(trucks);
  return trucks.map((truck) => truckRow(truck));
};

const truckRow = (truck) => {
  const { brand, driver, id: truckId, model, year, licensePlate } = truck;
  const { address, document, id: driverId, lastName, name, phone } = driver;
  return (
    <div className="truckContainer">
      Patente: {licensePlate} , id: {truckId} <br />
      Detalles: {brand}, {model}, {year} <br />
      <div className="driverDetails">
        Conductor <br />
        Nombre: {name} {lastName}, dni: {document} id: {driverId} <br />
        Contacto: TEL {phone}, DIR {address}
        <br />
      </div>
      <hr />
    </div>
  );
};

class truckList extends Component {
  state = { trucks: [], keyword: "", isLoading: true };

  async componentDidMount() {
    const trucks = await getTrucks();
    const drivers = await getDrivers();
    this.setState({
      isLoading: false,
      trucks: buildTrucks(trucks, drivers),
    });
  }
  handleKeyword = (event) => {
    this.setState({
      ...this.state,
      keyword: event.target.value,
    });
  };

  render() {
    const { trucks, isLoading } = this.state;
    const { classes } = this.props;
    const filteredTrucks = trucks.filter((truck) => {
      return truck.licensePlate
        .toLowerCase()
        .includes(this.state.keyword.toLowerCase());
    });
    return (
      <div>
        <div className={classes.xx}>TRUCKS!</div>
        {isLoading ? (
          <div>LOADING</div>
        ) : (
          <div>
            <SearchInput
              id="standard-basic"
              className={classes.textField}
              label="Buscar"
              margin="normal"
              onChange={this.handleKeyword}
            />
            {listTrucks(filteredTrucks)}
          </div>
        )}
      </div>
    );
  }
}

export default withStyles(styles)(truckList);
