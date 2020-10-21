import React from "react";
import Header from "../components/header";
import { withStyles } from "@material-ui/styles";
import TruckForm from "../components/truckForm";
import TruckList from "../components/truckList";
import { enviroment } from "../enviroment";

const styles = {
  container: {
    display: "grid",
    gridAutoFlow: "column"
  }
};

export const TrucksView = props => {
  const { classes } = props;

  const createTruck = truck => {
    truck.truckId = Date.now();
    fetch(enviroment.baseUrl + `/createTruck`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(truck)
    })
      .then(response => response.json())
      .catch(function(error) {
        console.log(error);
      });
  };

  return (
    <div>
      <Header></Header>
      <div className={classes.container}>
        <div>
          <TruckForm onAction={action => createTruck(action)} />
        </div>
        <div>
          <TruckList />
        </div>
      </div>
    </div>
  );
};

export default withStyles(styles)(TrucksView);
