import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCidgz1IBtYgnuXHkODK2qaLsGlcgALiN8",
  authDomain: "pitacca-6ca19.firebaseapp.com",
  projectId: "pitacca-6ca19",
  storageBucket: "pitacca-6ca19.appspot.com",
  messagingSenderId: "984104102802",
  appId: "1:984104102802:web:eaba0da843cefa29846f4b",
  measurementId: "G-ZWHJZFGMXZ",
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
