/* eslint-disable import/no-anonymous-default-export */
import axios from "axios";

function get(suffix, token) {
  return axios.get(suffix, {
    headers: {
      "Content-type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
}

function post(suffix, data, token) {
  return axios.post(suffix, data, {
    headers: {
      "Content-type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
}

function put(suffix, data, token) {
  return axios.put(suffix, data, {
    headers: {
      "Content-type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
}

function remove(suffix, token) {
  return axios.delete(suffix, {
    headers: {
      "Content-type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
}

export default {
    login: function(user) {
        return axios.post('/login', user);
    },
    register: function(user) {
        return axios.post('/register', user);
    }
};
