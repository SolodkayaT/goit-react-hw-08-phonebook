import React from "react";
import styles from "./ErrorBoundary.module.css";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import contactsSelectors from "../../redux/contacts/contactsSelectors";

function Error({ error }) {
  return <p className={styles.errorMessage}>{error.message}</p>;
}

Error.defaultProps = {
  message: "Something went wrong..."
};

Error.propTypes = {
  message: PropTypes.string
};
const mapStateToProps = state => {
  return {
    error: contactsSelectors.getError(state)
  };
};
export default connect(mapStateToProps)(Error);
