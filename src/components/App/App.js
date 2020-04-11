import React, { lazy, Suspense, Component } from "react";
import { Switch, Route } from "react-router-dom";
import routes from "../../routes";
import Loader from "react-loader-spinner";
import Layout from "../../components/Layout/Layout";
import { authOperations } from "../../redux/auth";
import { connect } from "react-redux";

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
        <Layout>
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
              <Route path="/" exact component={HomePage} />
              <Route path={routes.register} exact component={Register} />
              <Route path={routes.login} component={Login} />
              <Route path={routes.contacts} component={Contacts} />
              <Route component={NotFound} />
            </Switch>
          </Suspense>
        </Layout>
      </>
    );
  }
}

export default connect(null, {
  onGetCurrentUser: authOperations.getCurrentUser,
})(App);
