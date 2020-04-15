import React from "react";
import { NavLink } from "react-router-dom";
import routes from "../../routes";
import styles from "./AuthNavigation.module.css";

const AuthNavigation = () => {
  return (
    <div className={styles.navigationMenu}>
      <NavLink
        to={routes.register}
        activeStyle={{ color: "#3317d1" }}
        className={styles.navigationLink}
      >
        Register
      </NavLink>
      <NavLink
        exact
        to={routes.login}
        activeStyle={{ color: "#3317d1" }}
        className={styles.navigationLink}
      >
        Login
      </NavLink>
    </div>
  );
};
export default AuthNavigation;
