import React, { Component } from "react";
import { connect } from "react-redux";
import ContactList from "../../components/ContactList/ContactList";
import ContactForm from "../../components/ContactForm/ContactForm";
import Filter from "../../components/Filter/Filter";
import styles from "./Contacts.module.css";
import contactsOperations from "../../redux/contacts/contactsOperations";
import contactsSelectors from "../../redux/contacts/contactsSelectors";

class Contacts extends Component {
  componentDidMount() {
    this.props.onFetchContacts();
  }
  render() {
    return (
      <section className={styles.section}>
        <h1 className={styles.title}>Phonebook</h1>
        <ContactForm />
        <h2 className={styles.title}>Contacts</h2>
        {this.props.contacts.length > 1 && <Filter />}
        <ContactList />
      </section>
    );
  }
}
const mapDispatchToProps = {
  onFetchContacts: contactsOperations.fetchContacts,
};

const mapStateToProps = (state) => {
  return { contacts: contactsSelectors.getContacts(state) };
};
export default connect(mapStateToProps, mapDispatchToProps)(Contacts);
