import React, { Component } from "react";
import Header from "../components/header";
import { withStyles } from "@material-ui/styles";
import TruckForm from "../components/truckForm";
import TruckList from "../components/truckList";
import { enviroment } from "../enviroment";

const styles = {
  container: {
    display: "grid",
    gridAutoFlow: "column",
    gridTemplateColumns: "30% 70%",
  },
};

class AdminView extends Component {
  createTruck = (truck) => {
    truck.truckId = Date.now();
    fetch(enviroment.baseUrl + `/createTruck`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(truck),
    })
      .then((response) => response.json())
      .catch(function (error) {
        console.log(error);
      });
  };

  render() {
    const { classes } = this.props;

    return (
      <div>
        <Header></Header>
        <div className={classes.container}>
          <div>
            <TruckForm onAction={(action) => this.createTruck(action)} />
          </div>
          <div>
            <TruckList />
          </div>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(AdminView);
