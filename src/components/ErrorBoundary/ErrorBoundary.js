import React from "react";
import styles from "./ErrorBoundary.module.css";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { contactsSelectors } from "../../redux/contacts";
import { authSelectors } from "../../redux/auth";

function Error({ contactError, authError }) {
  return (
    <p className={styles.errorMessage}>
      {contactError.message}
      {authError.message}
    </p>
  );
}

Error.defaultProps = {
  contactError: "Something went wrong...",
  authError: "Something went wrong...",
};

Error.propTypes = {
  contactError: PropTypes.string,
  authError: PropTypes.string,
};

const mapStateToProps = (state) => {
  return {
    contactError: contactsSelectors.getError(state),
    authError: authSelectors.getError(state),
  };
};
export default connect(mapStateToProps)(Error);
