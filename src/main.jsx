import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDD8ytQwALNlcLWwPtvYnFwvXVADtaW0C8",
  authDomain: "d-connect-95d02.firebaseapp.com",
  databaseURL: "https://d-connect-95d02-default-rtdb.firebaseio.com",
  projectId: "d-connect-95d02",
  storageBucket: "d-connect-95d02.appspot.com",
  messagingSenderId: "399396570609",
  appId: "1:399396570609:web:934b98c280c688e4ac3050"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
// )


ReactDOM.createRoot(document.getElementById('root')).render(

    <App />
  
)
