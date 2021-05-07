import firebase from "firebase/app";
import "firebase/database";


const config = {
    // API KEYS
    apiKey: "AIzaSyD0iv87bHrUU6B1a9wBDq61qeh9tmDE3Mc",
    authDomain: "firechatvue-40e65.firebaseapp.com",
    projectId: "firechatvue-40e65",
    storageBucket: "firechatvue-40e65.appspot.com",
    messagingSenderId: "948888987791",
    appId: "1:948888987791:web:28b139c6a0c7d090e528fa"

};

const db = firebase.initializeApp(config);
export default db;