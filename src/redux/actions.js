import { SUBMIT_NAME, EMAIL_VALIDITY, SHOW_ERROR } from "./actionTypes";

export const setEmailValidity = (payload) => {
  return {
    type: EMAIL_VALIDITY,
    email: payload.value
  }
};

export const setTextValidity = (type, payload) => {
  return {
    type: type,
    name: payload.value
  }
};

export const showError = (type) => {
  return {
    type: SHOW_ERROR
  }
};

export const submitState = (type) => {
  return {
    type: type
  }
};

export const addName = payload => ({
  type: SUBMIT_NAME,
  payload
});
