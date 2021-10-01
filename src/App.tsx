import "product-sans-webfont/GoogleSans.css";

import Navbar from "./components/Navbar";
import NewRecordButton from "./components/NewRecordButton";
import { BrowserRouter, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import NewRecord from "./pages/NewRecord";
import { AuthProvider } from "./utils/Auth";
import PrivateRoute from "./utils/PrivateRoute";

function App() {
    return (
        <div className="h-screen flex flex-col bg-primbg select-none">
            <AuthProvider>
                <BrowserRouter>
                    <Route exact path="/login" component={Login} />
                    <Route exact path="/records/new" component={NewRecord} />
                    <PrivateRoute exact path="/">
                        <Home />
                        <NewRecordButton />
                        <Navbar />
                    </PrivateRoute>
                </BrowserRouter>
            </AuthProvider>
        </div>
    );
}

export default App;
