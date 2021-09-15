import "product-sans-webfont/GoogleSans.css";

import Navbar from "./Navbar";
import NewRecordButton from "./NewRecordButton";
import AccountList from "./AccountList";
import Records from "./RecordList";

// TODO: Integrate Firebase
// import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyCidgz1IBtYgnuXHkODK2qaLsGlcgALiN8",
//   authDomain: "pitacca-6ca19.firebaseapp.com",
//   projectId: "pitacca-6ca19",
//   storageBucket: "pitacca-6ca19.appspot.com",
//   messagingSenderId: "984104102802",
//   appId: "1:984104102802:web:eaba0da843cefa29846f4b",
//   measurementId: "G-ZWHJZFGMXZ",
// };
// const app = initializeApp(firebaseConfig);

function App() {
  return (
    <div className="h-screen flex flex-col">
      <AccountList />
      <Records />
      <NewRecordButton />
      <Navbar />
    </div>
  );
}

export default App;
