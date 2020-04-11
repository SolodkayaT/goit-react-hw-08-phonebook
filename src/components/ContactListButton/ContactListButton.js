import React from "react";
import PropTypes from "prop-types";
import styles from "./ContactListButton.module.css";

export default function ContactListButton({ onRemoveContact }) {
  return (
    <button
      className={styles.contactButton}
      type="button"
      onClick={onRemoveContact}
    ></button>
  );
}

ContactListButton.propTypes = {
  onRemoveContact: PropTypes.func
};
