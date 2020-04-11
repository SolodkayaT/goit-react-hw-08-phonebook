import React from "react";
import styles from "./SwitchTheme.module.css";
import PropTypes from "prop-types";

const SwitchTheme = ({ onToggleTheme }) => {
  return (
    <div className={styles.themeSwitcher}>
      <span className={styles.label}>Theme</span>
      <label className={styles.switch}>
        <input
          type="checkbox"
          checked={styles.checked}
          onChange={e => onToggleTheme(e.target.value)}
        />
        <span className={styles.slider}></span>
      </label>
    </div>
  );
};
export default SwitchTheme;

SwitchTheme.propTypes = {
  onToggleTheme: PropTypes.func
};
