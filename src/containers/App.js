import React from 'react';
import {Router} from '../components/router';
import { useRedirect, navigate } from 'hookrouter';
import firebase from "firebase";
import "firebase/auth";
import { enviroment } from '../enviroment';
import { StateProvider, useStateValue } from '../state/rootState';
import { reducer, initialState } from '../reducers/mainReducer';

const App = () => {
  const firebaseConfig = {
    apiKey: "AIzaSyAH63-ehphQKnhdVe78xCmFS72hAPI0DAw",
    authDomain: "transfrio-48c0c.firebaseapp.com",
    databaseURL: "https://transfrio-48c0c.firebaseio.com",
    projectId: "transfrio-48c0c",
    storageBucket: "transfrio-48c0c.appspot.com",
    messagingSenderId: "230365319229",
    appId: "1:230365319229:web:5d07067bbdeedab8aa1a54",
    measurementId: "G-9B96Q79327"  
  };

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