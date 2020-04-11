import { createAction } from "@reduxjs/toolkit";

const addContactRequest = createAction("contacts/addRequest");
const addContactSuccess = createAction("contacts/addSuccess");
const addContactError = createAction("contacts/addError");

const fetchContactRequest = createAction("contacts/fetchRequest");
const fetchContactSuccess = createAction("contacts/fetchSuccess");
const fetchContactError = createAction("contacts/fetchError");

const removeContactRequest = createAction("contacts/removeRequest");
const removeContactSuccess = createAction("contacts/removeuccess");
const removeContactError = createAction("contacts/removeError");

const changeFilter = createAction("contacts/changeFilter");

export default {
  removeContactRequest,
  removeContactSuccess,
  removeContactError,
  fetchContactRequest,
  fetchContactSuccess,
  fetchContactError,
  addContactRequest,
  addContactSuccess,
  addContactError,
  changeFilter
};
