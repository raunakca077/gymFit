import axios from "axios";
import { setToast } from "../../components/Other/CheckProperty";
import { saveLocalData } from "../../utils/localStorage";
import * as types from "./actionType";

const register = (payload, toast) => (dispatch) => {
  // console.log('REACT_APP_AUTHENTICATION:', process.env.REACT_APP_AUTHENTICATION);
  dispatch({ type: types.REGISTER_R });
  return axios
    .post(`http://localhost:5000/auth/signup`, payload)
    .then((r) => {
      return dispatch({ type: types.REGISTER_S, payload: r.data });
    })
    .catch((e) => {
      setToast(toast, e.response.data.msg, "error");
      dispatch({ type: types.REGISTER_F, payload: e });
    });
};

const login = (payload, toast) => (dispatch) => {
  saveLocalData("userInfo", payload.email);
  dispatch({ type: types.LOGIN_R });
  return axios
    .post(`http://localhost:5000/auth/login`, payload)
    .then((r) => {
      return dispatch({ type: types.LOGIN_S, payload: r.data });
    })
    .catch((e) => {
      setToast(toast, e.response.data.msg, "error");
      dispatch({ type: types.LOGIN_F, payload: e });
    });
};

const profile = (payload) => (dispatch) => {
  if (!payload.email) {
    console.error("Email is missing in the payload");
    return;
  }
  dispatch({ type: types.PROFILE_R });
  const options = {
    method: "GET",
    url: `http://localhost:5000/auth/${payload.email}`,
    headers: { Authorization: `Bearer ${payload.token}` },
  };
  return axios(options)
    .then((r) => {
      dispatch({
        type: types.PROFILE_S,
        payload: r.data,
      });
    })
    .catch((e) => dispatch({ type: types.PROFILE_F, payload: e }));
};

export { login, register, profile };