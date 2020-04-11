import React from "react";
import { NavLink } from "react-router-dom";
import routes from "../../routes";
import styles from "../Navigation/Navigation.module.css";

const Navigation = () => {
  return (
    <ul className={styles.navigationMenu}>
      <li className={styles.navigationMenuItem}>
        <NavLink
          exact
          to={routes.home}
          activeStyle={{ color: "blue" }}
          className={styles.navigationLink}
        >
          Home
        </NavLink>
      </li>
      <li className={styles.navigationMenuItem}>
        <NavLink
          to={routes.register}
          activeStyle={{ color: "blue" }}
          className={styles.navigationLink}
        >
          Register
        </NavLink>
      </li>
      <li className={styles.navigationMenuItem}>
        <NavLink
          exact
          to={routes.login}
          activeStyle={{ color: "blue" }}
          className={styles.navigationLink}
        >
          Login
        </NavLink>
      </li>
      <li className={styles.navigationMenuItem}>
        <NavLink
          exact
          to={routes.contacts}
          activeStyle={{ color: "blue" }}
          className={styles.navigationLink}
        >
          Contacts
        </NavLink>
      </li>
    </ul>
  );
};

export default Navigation;
