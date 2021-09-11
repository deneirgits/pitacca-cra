import React from "react";
import logo from "./logo.svg";
import "./App.css";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCidgz1IBtYgnuXHkODK2qaLsGlcgALiN8",
  authDomain: "pitacca-6ca19.firebaseapp.com",
  projectId: "pitacca-6ca19",
  storageBucket: "pitacca-6ca19.appspot.com",
  messagingSenderId: "984104102802",
  appId: "1:984104102802:web:eaba0da843cefa29846f4b",
  measurementId: "G-ZWHJZFGMXZ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
