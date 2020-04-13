import React, { lazy, Suspense, Component } from "react";
import { Switch, Route } from "react-router-dom";
import routes from "../../routes";
import Loader from "react-loader-spinner";
import { authOperations } from "../../redux/auth";
import { connect } from "react-redux";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import PublicRoute from "../PublicRoute/PublicRoute";

const Contacts = lazy(() => import("../../views/Contacts/Contacts"));
const HomePage = lazy(() => import("../../views/HomePage/HomePage"));
const Login = lazy(() => import("../../views/Login/Login"));
const NotFound = lazy(() => import("../../views/NotFound/NotFound"));
const Register = lazy(() => import("../../views/Register/Register"));
const AppBar = lazy(() => import("../AppBar/AppBar"));

class App extends Component {
  componentDidMount() {
    this.props.onGetCurrentUser();
  }
  render() {
    return (
      <>
        <Suspense
          fallback={
            <Loader
              type="Puff"
              color="#00BFFF"
              height={100}
              width={100}
              timeout={3000}
            />
          }
        >
          <AppBar />
          <Switch>
            <PublicRoute
              path={routes.home}
              exact
              component={HomePage}
              restricted={false}
            />
            <PublicRoute
              path={routes.login}
              exact
              component={Login}
              restricted={true}
            />
            <PublicRoute
              path={routes.register}
              exact
              component={Register}
              restricted={true}
            />
            <PrivateRoute path={routes.contacts} exact component={Contacts} />
            <Route component={NotFound} />
          </Switch>
        </Suspense>
      </>
    );
  }
}

export default connect(null, {
  onGetCurrentUser: authOperations.getCurrentUser,
})(App);
