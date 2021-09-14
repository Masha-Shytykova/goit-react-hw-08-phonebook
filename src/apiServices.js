import axios from 'axios';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';
const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

export const userRegisterApi = ({ name, email, password }) => {
  return axios
    .post('/users/signup', { name, email, password })
    .then(({ data }) => {
      token.set(data.token);
      return data;
    })
    .catch(err => {
      throw err;
    });
};

export const userLoginApi = ({ email, password }) => {
  return axios
    .post('/users/login', { email, password })
    .then(({ data }) => {
      token.set(data.token);
      return data;
    })
    .catch(err => {
      throw err;
    });
};

export const userLogOutApi = () => {
  return axios
    .post('/users/logout')
    .then(() => {
      token.unset();
    })
    .catch(err => {
      throw err;
    });
};

export const userRefreshApi = persistedToken => {
  token.set(persistedToken);
  return axios
    .get('/users/current')
    .then(({ data }) => {
      return data;
    })
    .catch(err => {
      throw err;
    });
};

export const addContactsApi = ({ name, number, id }) => {
  return axios
    .post('/contacts', { name, number, id })
    .then(({ data }) => data)
    .catch(err => {
      throw err;
    });
};

export const getContactsApi = () => {
  return axios
    .get('/contacts')
    .then(({ data }) => data)
    .catch(err => {
      throw err;
    });
};

export const deleteContactsApi = contactId => {
  return axios
    .delete(`/contacts/${contactId}`)
    .then(({ data }) => data)
    .catch(err => {
      throw err;
    });
};
