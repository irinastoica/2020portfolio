import firebase from 'firebase'

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyBI2o1lPevLhaoN93FnTv5i_0LxtmcMSXA",
    authDomain: "portfolio-contact-form-67529.firebaseapp.com",
    projectId: "portfolio-contact-form-67529",
    storageBucket: "portfolio-contact-form-67529.appspot.com",
    messagingSenderId: "690162159471",
    appId: "1:690162159471:web:3cffe4f40b718c0fd8a29a",

});

const db = firebaseApp.firestore();

export { db };
