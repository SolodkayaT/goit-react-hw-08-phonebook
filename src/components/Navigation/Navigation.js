import React from "react";
import { NavLink } from "react-router-dom";
import routes from "../../routes";
import { connect } from "react-redux";
import { authSelectors } from "../../redux/auth";
import styles from "../Navigation/Navigation.module.css";

const Navigation = ({ isAuthenticated }) => {
  return (
    <div className={styles.navigationMenu}>
      <NavLink
        exact
        to={routes.home}
        activeStyle={{ color: "#3317d1" }}
        className={styles.navigationLink}
      >
        Home
      </NavLink>
      {isAuthenticated && (
        <NavLink
          exact
          to={routes.contacts}
          activeStyle={{ color: "#3317d1" }}
          className={styles.navigationLink}
        >
          Contacts
        </NavLink>
      )}
    </div>
  );
};

const mapStateToProps = (state) => ({
  isAuthenticated: authSelectors.isAuthenticated(state),
});
export default connect(mapStateToProps)(Navigation);
