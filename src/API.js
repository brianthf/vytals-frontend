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
  login: function (user) {
    return axios.post("/users/login", user);
  },
  register: function (user) {
    return axios.post("/users/new", user);
  },
  createActivity: function (id, token, activity) {
    return post(`/activities/user/${id}/new`, activity, token);
  },
  getActivities: function (id, token) {
    return get(`/activities/user/${id}/all`, token);
  },
  updateActivity: function (id, activity, token) {
    return put(`/activities/user/${id}/update`, activity, token);
  },
  deleteActivity: function (id, token) {
    return remove(`/activities/user/${id}/delete`, token);
  },
  createReading: function (id, reading, token) {
    return post(`/readings/user/${id}/new`, reading, token);
  },
  getReadings: function (id, token) {
    return get(`/readings/user/${id}/all`, token);
  },
  updateReading: function (id, reading, token) {
    return put(`/activities/user/${id}/update`, reading, token);
  },
  deleteReading: function (id, token) {
    return get(`/readings/user/${id}/delete`, token);
  },
};
