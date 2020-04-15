import React from "react";
import { authSelectors, authOperations } from "../../redux/auth";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import styles from "./UserMenu.module.css";

const UserMenu = ({ name, onLogout }) => (
  <div className={styles.userMenu}>
    <span className={styles.welcomeMessage}>Welcome, {name}</span>
    <button className={styles.userMenuBtn} type="button" onClick={onLogout}>
      Logout
    </button>
  </div>
);

const mapStateToProps = (state) => ({
  name: authSelectors.getUserName(state),
});

UserMenu.propTypes = {
  name: PropTypes.string,
  onLogout: PropTypes.func,
};

UserMenu.defaultProps = {
  name: "",
};
export default connect(mapStateToProps, { onLogout: authOperations.logOut })(
  UserMenu
);
