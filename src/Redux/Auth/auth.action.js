import axios from "axios";
import { API_BASE_URL, api } from "../../config/api";
import {
  GET_ALL_USER_FAILURE,
  GET_ALL_USER_REQUEST,
  GET_ALL_USER_SUCCESS,
  GET_PROFILE_FAILURE,
  GET_PROFILE_REQUEST,
  GET_PROFILE_SUCCESS,
  LOGIN_FAILURE,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  REGISTER_FAILURE,
  REGISTER_REQUEST,
  REGISTER_SUCCESS,
  SEARCH_USER_FAILURE,
  SEARCH_USER_REQUEST,
  SEARCH_USER_SUCCESS,
  UPDATE_PROFILE_FAILURE,
  UPDATE_PROFILE_REQUEST,
  UPDATE_PROFILE_SUCCESS,
} from "./auth.actionType";

export const loginUserAction = (loginData) => async (dispath) => {
  dispath({ type: LOGIN_REQUEST });
  try {
    const { data } = await axios.post(
      `${API_BASE_URL}/auth/signin`,
      loginData.data
    );

    if (data.token) {
      localStorage.setItem("jwt", data.token);
    }

    dispath({ type: LOGIN_SUCCESS, payload: data.jwt });
  } catch (error) {
    dispath({ type: LOGIN_FAILURE, payload: error });
  }
};

export const registerUserAction = (loginData) => async (dispath) => {
  dispath({ type: REGISTER_REQUEST });
  try {
    const { data } = await axios.post(
      `${API_BASE_URL}/auth/signup`,
      loginData.data
    );

    if (data.token) {
      localStorage.setItem("jwt", data.token);
    }

    dispath({ type: REGISTER_SUCCESS, payload: data.jwt });
  } catch (error) {
    dispath({ type: REGISTER_FAILURE, payload: error });
  }
};

export const getProfileAction = (jwt) => async (dispath) => {
  dispath({ type: GET_PROFILE_REQUEST });
  try {
    const { data } = await axios.get(`${API_BASE_URL}/api/users/profile`, {
      headers: {
        Authorization: `Bearer ${jwt}`,
      },
    });

    dispath({ type: GET_PROFILE_SUCCESS, payload: data });
  } catch (error) {
    dispath({ type: GET_PROFILE_FAILURE, payload: error });
  }
};

export const updateProfileAction = (reqData) => async (dispath) => {
  dispath({ type: UPDATE_PROFILE_REQUEST });
  try {
    const { data } = await api.put(`${API_BASE_URL}/api/users`, reqData);

    dispath({ type: UPDATE_PROFILE_SUCCESS, payload: data });
  } catch (error) {
    dispath({ type: UPDATE_PROFILE_FAILURE, payload: error });
  }
};

export const searchUser = (query) => async (dispath) => {
  dispath({ type: SEARCH_USER_REQUEST });
  try {
    const { data } = await api.get(`/api/users/search?query=${query}`);

    dispath({ type: SEARCH_USER_SUCCESS, payload: data });
  } catch (error) {
    dispath({ type: SEARCH_USER_FAILURE, payload: error });
  }
};

export const getALlUsersAction = () => async (dispatch) => {
  dispatch({ type: GET_ALL_USER_REQUEST });
  try {
    const { data } = await api.get("/api/users");
    dispatch({ type: GET_ALL_USER_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: GET_ALL_USER_FAILURE, payload: error });
  }
};
