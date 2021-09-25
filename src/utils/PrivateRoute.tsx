import { ReactNode } from "react";
import { Route, Redirect } from "react-router-dom";
import { useAuth } from "./Auth";

interface RouteProps {
    children: ReactNode;
    exact: boolean;
    path: string;
}

export default function PrivateRoute(routeProps: RouteProps) {
    const { currentUser } = useAuth();

    return currentUser ? (
        <Route exact={routeProps.exact} path={routeProps.path}>
            {routeProps.children}
        </Route>
    ) : (
        <Redirect to="/login" />
    );
}
