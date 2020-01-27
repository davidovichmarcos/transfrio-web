import React from 'react';
import {Router} from '../components/router';
import { useRedirect, navigate } from 'hookrouter';
import firebase from "firebase";
import "firebase/auth";
import { enviroment } from '../enviroment';
import firebaseConfig from '../fireBaseAuth.json';
import { StateProvider, useStateValue } from '../state/rootState';
import { reducer, initialState } from '../reducers/mainReducer';

const  fbConfig= () => {
  return  firebaseConfig;
}

const App = () => {
  const firebaseConfig = fbConfig();

  firebase.initializeApp(firebaseConfig);
  firebase.auth().onAuthStateChanged( user => {
      if (user) {
        navigate('/');
      } else {
        navigate('/login');
      }
  });

  return (
    <StateProvider initialState={initialState} reducer={reducer}>
      <Router></Router>
    </StateProvider>
  );
}

export default App;