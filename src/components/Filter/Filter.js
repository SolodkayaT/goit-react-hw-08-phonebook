import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import contactsActions from "../../redux/contacts/contactsActions";
import contactsSelectors from "../../redux/contacts/contactsSelectors";
import styles from "./Filter.module.css";

function Filter({ value, onChangeFilter }) {
  return (
    <div className={styles.filterContainer}>
      <label className={styles.filterName}>
        Find contacts by name
        <input
          className={styles.filter}
          type="text"
          value={value}
          onChange={e => onChangeFilter(e.target.value)}
        ></input>{" "}
      </label>
    </div>
  );
}

Filter.defaultProps = {
  value: ""
};

Filter.propTypes = {
  value: PropTypes.string,
  onChangeFilter: PropTypes.func
};

const mapStateToProps = state => ({
  value: contactsSelectors.getFilter(state)
});

const mapDispatchToProps = {
  onChangeFilter: contactsActions.changeFilter
};
export default connect(mapStateToProps, mapDispatchToProps)(Filter);
