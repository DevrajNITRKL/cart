import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import firebase from "firebase/compat/app";
import { initializeApp } from "firebase/app";
import 'firebase/compat/firestore';
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBDWQnpD-8_e3_FysZ7sMzm7oyJm04aGts",
  authDomain: "cart-c86ea.firebaseapp.com",
  projectId: "cart-c86ea",
  storageBucket: "cart-c86ea.appspot.com",
  messagingSenderId: "144442822137",
  appId: "1:144442822137:web:13bd6ba4843539ab3dc128"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
