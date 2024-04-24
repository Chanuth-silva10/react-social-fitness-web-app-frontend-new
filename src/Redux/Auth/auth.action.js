import axios from "axios";
import { API_BASE_URL } from "../../config/api";
import { LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS, REGISTER_FAILURE, REGISTER_REQUEST, REGISTER_SUCCESS } from "./auth.actionType";

export const loginUserAction = (loginData) => async (dispath) => {
  dispath({ type: LOGIN_REQUEST });
  try {
    const { data } = await axios.post(
      `${API_BASE_URL}/auth/signin`,
      loginData.data
    );

    if (data.jwt) {
      localStorage.setItem("jwt", data.jwt);
    }
    
    console.log("Register", data);
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
  
      if (data.jwt) {
        localStorage.setItem("jwt", data.jwt);
      }
  
      dispath({ type: REGISTER_SUCCESS, payload: data.jwt });
    } catch (error) {
      dispath({ type: REGISTER_FAILURE, payload: error });
    }
  };
