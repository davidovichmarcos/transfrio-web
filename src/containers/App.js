import React from "react";
import { Router } from "../components/router";
import { navigate } from "hookrouter";
import firebase from "firebase";
import "firebase/auth";
import firebaseConfig from "../firebaseAuth.json";
import { StateProvider } from "../state/rootState";
import { reducer, initialState } from "../reducers/mainReducer";

// const  fbConfig= () => {
//   return  firebaseConfig;
// }

const App = () => {
  // const firebaseConfig = fbConfig();
  firebase.initializeApp(firebaseConfig);
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      navigate("/");
    } else {
      navigate("/login");
    }
  });

  return (
    <StateProvider initialState={initialState} reducer={reducer}>
      <Router></Router>
    </StateProvider>
  );
};

export default App;
