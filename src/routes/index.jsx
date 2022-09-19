import { Switch, Route } from "react-router-dom";
import Dashboard from "../pages/dashboard";
import Home from "../pages/home";
import LoginPage from "../pages/login";
import RegisterPage from "../pages/register";

const Routes = () => {
    return (
        <Switch>
            <Route exact path="/">
                <Home />
            </Route>

            <Route exact path="/login">
                <LoginPage />
            </Route>

            <Route exact path="/register">
                <RegisterPage />
            </Route>

            <Route exact path="/dashboard">
                <Dashboard />
            </Route>
        </Switch>
    )
}

export default Routes
