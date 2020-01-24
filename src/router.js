import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


export default function CustomRouter() {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/trucks">Trucks</Link>
          </li>
          <li>
            <Link to="/drivers">Drivers</Link>
          </li>
        </ul>

        <hr />

        {/*
          A <Switch> looks through all its children <Route>
          elements and renders the first one whose path
          matches the current URL. Use a <Switch> any time
          you have multiple routes, but you want only one
          of them to render at a time
        */}
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/trucks">
            <Trucks />
          </Route>
          <Route path="/drivers">
            <Drivers />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

// You can think of these components as "pages"
// in your app.

function Home() {
  return (
    <div>
      <h2>Home</h2>
    </div>
  );
}

function Trucks() {
  return (
    <div>
      <h2>Trucks</h2>
    </div>
  );
}

function Drivers() {
  return (
    <div>
      <h2>Drivers</h2>
    </div>
  );
}