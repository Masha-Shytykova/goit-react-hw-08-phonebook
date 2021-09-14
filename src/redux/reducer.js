import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import * as actions from './actions';

const itemsReducer = createReducer([], {
  [actions.getContactsSuccess]: (_, { payload }) => payload,
  [actions.addContactsSuccess]: (state, { payload }) => [...state, payload],
  [actions.deleteContactsSuccess]: (state, { payload }) =>
    state.filter(contact => contact.id !== payload),
});

const filterReducer = createReducer('', {
  [actions.changeFilter]: (_, { payload }) => payload,
});

const contactsReducer = combineReducers({
  items: itemsReducer,
  filter: filterReducer,
});

const setError = (_, { payload }) => payload;
const resetError = () => null;

export const errorReducer = createReducer(null, {
  [actions.getContactsReguests]: resetError,
  [actions.getContactsError]: setError,
  [actions.addContactsReguests]: resetError,
  [actions.addContactsError]: setError,
  [actions.deleteContactsReguests]: resetError,
  [actions.deleteContactsError]: setError,
});

export default contactsReducer;
