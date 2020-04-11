import { combineReducers } from "redux";
import { createReducer } from "@reduxjs/toolkit";
import contactsAction from "./contactsActions";

const addContact = (state, action) => {
  const isExist = state.some(contact => contact.name === action.payload.name);
  if (isExist) {
    alert(`${action.payload.name} is allready in contacts!`);
    return [...state];
  }
  return [...state, action.payload];
};

const removeContact = (state, action) =>
  state.filter(contact => contact.id !== action.payload);

const phonebook = createReducer([], {
  [contactsAction.fetchContactSuccess]: (state, action) => action.payload,
  [contactsAction.addContactSuccess]: addContact,
  [contactsAction.removeContactSuccess]: removeContact
});

const filter = createReducer("", {
  [contactsAction.changeFilter]: (state, action) => action.payload
});

const loading = createReducer(false, {
  [contactsAction.fetchContactRequest]: () => true,
  [contactsAction.addContactRequest]: () => true,
  [contactsAction.removeContactRequest]: () => true,

  [contactsAction.addContactSuccess]: () => false,
  [contactsAction.fetchContactSuccess]: () => false,
  [contactsAction.removeContactSuccess]: () => false,

  [contactsAction.addContactError]: () => false,
  [contactsAction.fetchContactError]: () => false,
  [contactsAction.removeContactError]: () => false
});

const error = createReducer("", {
  [contactsAction.fetchContactRequest]: () => "",
  [contactsAction.addContactRequest]: () => "",
  [contactsAction.removeContactRequest]: () => "",

  [contactsAction.addContactError]: (state, action) => action.payload,
  [contactsAction.fetchContactError]: (state, action) => action.payload,
  [contactsAction.removeContactError]: (state, action) => action.payload
});

export default combineReducers({
  phonebook,
  filter,
  loading,
  error
});
