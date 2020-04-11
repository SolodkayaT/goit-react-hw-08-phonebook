import React from "react";
import { NavLink } from "react-router-dom";
import routes from "../../routes";
import styles from "./NotFound.module.css";
const NotFound = () => {
  return (
    <div className={styles.title}>
      <h1>You are lost!</h1>
      <p>
        Please, go{" "}
        <NavLink to={routes.home} className={styles.navigationLink}>
          HOME PAGE!
        </NavLink>
      </p>
    </div>
  );
};
export default NotFound;
