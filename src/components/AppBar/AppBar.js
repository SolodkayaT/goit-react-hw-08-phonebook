import React from "react";
import { connect } from "react-redux";
import Navigation from "../Navigation/Navigation";
import UserMenu from "../UserMenu/UserMenu";
import AuthNavigation from "../AuthNavigation/AuthNavigation";
import { authSelectors } from "../../redux/auth";
import styles from "./AppBar.module.css";

const AppBar = ({ isAuthenticated }) => (
  <header className={styles.header}>
    <Navigation />
    {isAuthenticated ? <UserMenu /> : <AuthNavigation />}
  </header>
);
const mapStateToProps = (state) => ({
  isAuthenticated: authSelectors.isAuthenticated(state),
});
export default connect(mapStateToProps)(AppBar);
