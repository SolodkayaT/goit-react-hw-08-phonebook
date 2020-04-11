import { createSelector } from "@reduxjs/toolkit";

const getContacts = state => state.contacts.phonebook;
const getLoading = state => state.contacts.loading;
const getFilter = state => state.contacts.filter.toLowerCase();
const getError = state => state.contacts.error;

const getVisibleContacts = createSelector(
  [getContacts, getFilter],
  (phonebook, filter) => {
    return phonebook.filter(contact =>
      contact.name.toLowerCase().includes(filter)
    );
  }
);
const getContactById = createSelector(
  [(state, contactId) => contactId, getContacts],
  (contactId, phonebook) => phonebook.find(item => item.id === contactId)
);

export default {
  getLoading,
  getVisibleContacts,
  getFilter,
  getContactById,
  getError,
  getContacts
};
