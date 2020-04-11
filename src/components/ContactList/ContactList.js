import React from "react";
import { connect } from "react-redux";
import Loader from "react-loader-spinner";
import PropTypes from "prop-types";
import contactsSelectors from "../../redux/contacts/contactsSelectors";
import ContactListItem from "../ContactListItem/ContactListItem";
import ErrorBoundary from "../ErrorBoundary/ErrorBoundary";
import styles from "./ContactList.module.css";

function ContactList({ contacts, isLoadingContacts, isError }) {
  return (
    <>
      {isError && <ErrorBoundary />}
      {isLoadingContacts && (
        <Loader
          type="Puff"
          color="#00BFFF"
          height={100}
          width={100}
          timeout={3000}
        />
      )}
      <ul className={styles.contactList}>
        {contacts.map(({ id }) => (
          <ContactListItem key={id} id={id} />
        ))}
      </ul>
    </>
  );
}

ContactList.defaultProps = {
  contacts: []
};

ContactList.propTypes = {
  contacts: PropTypes.array
};

const mapStateToProps = state => {
  return {
    contacts: contactsSelectors.getVisibleContacts(state),
    isLoadingContacts: contactsSelectors.getLoading(state),
    isError: contactsSelectors.getError(state)
  };
};

export default connect(mapStateToProps)(ContactList);
