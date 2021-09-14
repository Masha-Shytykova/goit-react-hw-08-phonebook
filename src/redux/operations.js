import {
  addContactsReguests,
  addContactsSuccess,
  addContactsError,
  deleteContactsReguests,
  deleteContactsSuccess,
  deleteContactsError,
  getContactsReguests,
  getContactsSuccess,
  getContactsError,
} from './actions';
import {
  addContactsApi,
  deleteContactsApi,
  getContactsApi,
} from '../apiServices';

export const getContacts = () => async dispatch => {
  dispatch(getContactsReguests());
  try {
    const contactsGet = await getContactsApi();
    dispatch(getContactsSuccess(contactsGet));
  } catch (error) {
    dispatch(getContactsError(error));
  }
};

export const addContacts =
  ({ name, number, id }) =>
  async dispatch => {
    dispatch(addContactsReguests());
    try {
      const contactsAdd = await addContactsApi({ name, number, id });
      dispatch(addContactsSuccess(contactsAdd));
    } catch (error) {
      dispatch(addContactsError(error));
    }
  };

export const deleteContacts = contactId => async dispatch => {
  dispatch(deleteContactsReguests());
  try {
    await deleteContactsApi(contactId);
    dispatch(deleteContactsSuccess(contactId));
  } catch (error) {
    dispatch(deleteContactsError(error));
  }
};
