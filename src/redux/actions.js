import { createAction } from '@reduxjs/toolkit';

export const addContactsReguests = createAction('contacts/addRequests');
export const addContactsSuccess = createAction('contacts/addSuccess');
export const addContactsError = createAction('contacts/addError');

export const deleteContactsReguests = createAction('contacts/deleteRequests');
export const deleteContactsSuccess = createAction('contacts/deleteSuccess');
export const deleteContactsError = createAction('contacts/deleteError');

export const getContactsReguests = createAction('contacts/getRequests');
export const getContactsSuccess = createAction('contacts/getSuccess');
export const getContactsError = createAction('contacts/getError');

export const changeFilter = createAction('contacts/FILTER');
