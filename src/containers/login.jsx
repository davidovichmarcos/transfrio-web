import React from 'react';
import { withStyles} from '@material-ui/styles';
import { useStateValue } from '../state/rootState';
import firebase from "firebase";
import "firebase/auth";
import { enviroment } from '../enviroment';
import * as appActions from '../actions/app';
import { navigate } from 'hookrouter';
import ReactPageScroller from "react-page-scroller";

import SignInForm from '../components/signInForm';
import LogInForm from '../components/logInForm';

const styles = {
    login: {
        display: "grid",
        gridTemplateColumns: "repeat(1, minmax(240px, 1fr))",
        gridTemplateRows: "repeat(4, 100px)",
        backgroundColor: "black",
        textAlign: "center",
        "& > div": {
            backgroundColor: "black",
        }
    },
    
    loginFormContainer: {
        height: "100%"
    },
    title: {
        width: "1fr",
        fontFamily: "'Alegreya Sans SC', sans-serif",
        fontWeight: "bold",
        color: "white"
    }
}

const Login = (props) => {
    const { classes } = props;
    const [dispatch] = useStateValue();
    let pageScroller = null;

    firebase.auth().signOut().then(function() {
        // Sign-out successful.
      }).catch(function(error) {
        // An error happened.
      });
    firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
            navigate('/');
        }
    });

    

    const createUserWithEmail = user => {
        firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
        .then( response => {
            const { email, uid } = response.user;
            const { name } = user;
            const newUser = { email, id: uid, name };

            fetch(enviroment.baseUrl + '/createUser', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(newUser)
            })
            .then( response => response.json() )
            .then( response => dispatch(appActions.userLoggedIn(response.user)) );
        })
        .catch(function(error) {
            console.log(error);
        });
    }

    const loginWithEmail = user => {
        firebase.auth().signInWithEmailAndPassword(user.email, user.password)
        .then( response => {
            const { uid } = response.user;
            let user = { id: uid };
            // retrieve user related data from db
            fetch(enviroment.baseUrl + `/logUser/${user.id}`, {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(user)
            })
            .then( response => response.json() );
            //.then( response => dispatch(appActions.userLoggedIn(response.user)) );
        })
        .catch(function(error) {
            console.log(error);
        });
    }
        
    const pageOnChange = scroll => {
        // dispatch( appActions.changePage({ payload: scroll }) );
        // if(scroll === 3) {
        //     dispatch( appActions.bookingHandlerVisited() );
        // }
    }

    const goToPage = (page) => {
        // dispatch( appActions.changePage({ payload: page }) );
    }

    const setScrollHandler = scroll => {
        if(scroll) {
            pageScroller = scroll;
        }
    }

    const loginFormActions = action => {
        if(action === 'changeView') {
            pageScroller.goToPage(1);
        } else {
            loginWithEmail(action);
        }
    }

    return (
        <div className={classes.login}>
            <h1 className={classes.title}>Transfrio Web</h1>
            <ReactPageScroller ref={setScrollHandler} pageOnChange={pageOnChange} blockScrollDown={false} containerWidth={"100%"}>
                <LogInForm onAction={ action => loginFormActions(action) }></LogInForm>
                <SignInForm onAction={ action => createUserWithEmail(action) }></SignInForm>
            </ReactPageScroller>
        </div>
    );
};

export default withStyles(styles)(Login);