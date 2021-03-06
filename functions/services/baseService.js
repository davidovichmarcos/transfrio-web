var log = require('loglevel');
var firebase = require("firebase/app");
require('firebase/auth');
require('firebase/database');

const getData = async function (val) {
    const timestamp = Date.now();
    const snapshot = await firebase.database().ref(`/${val}`).once('value');
    log.info(`Data recibed correctly from FireBase at ${timestamp}`);
    return snapshot.val();
}

module.exports = {
    getData
}