import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

const prodConfig = {
  apiKey: "AIzaSyBHYkLPW1wV5jhx5O2CIuzkUVQq3A-qMIA",
  authDomain: "teslaworkswebsite.firebaseapp.com",
  databaseURL: "https://teslaworkswebsite.firebaseio.com",
  projectId: "teslaworkswebsite",
  storageBucket: "teslaworkswebsite.appspot.com",
  messagingSenderId: "878331464424"

};

const devConfig = {
  apiKey: "AIzaSyBHYkLPW1wV5jhx5O2CIuzkUVQq3A-qMIA",
  authDomain: "teslaworkswebsite.firebaseapp.com",
  databaseURL: "https://teslaworkswebsite.firebaseio.com",
  projectId: "teslaworkswebsite",
  storageBucket: "teslaworkswebsite.appspot.com",
  messagingSenderId: "878331464424"

};

const config = process.env.NODE_ENV === 'production'
  ? prodConfig
  : devConfig;

if (!firebase.apps.length) {
  firebase.initializeApp(config);
}

const db = firebase.database();
const auth = firebase.auth();

export {
  db,
  auth,
};
