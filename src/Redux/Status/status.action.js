import { api } from "../../config/api";
import {
  CREATE_COMMENT_STATUS_POST_FAILURE,
  CREATE_COMMENT_STATUS_POST_REQUEST,
  CREATE_COMMENT_STATUS_POST_SUCCESS,
  CREATE_STATUS_POST_FAILURE,
  CREATE_STATUS_POST_REQUEST,
  CREATE_STATUS_POST_SUCCESS,
  GET_ALL_STATUS_POST_FAILURE,
  GET_ALL_STATUS_POST_REQUEST,
  GET_ALL_STATUS_POST_SUCCESS,
  GET_USERS_STATUS_POST_FAILURE,
  GET_USERS_STATUS_POST_REQUEST,
  GET_USERS_STATUS_POST_SUCCESS,
  LIKE_STATUS_POST_FAILURE,
  LIKE_STATUS_POST_REQUEST,
  LIKE_STATUS_POST_SUCCESS,
} from "./status.actionType";

export const createStatusPostAction = (postData) => async (dispatch) => {
  dispatch({ type: CREATE_STATUS_POST_REQUEST });
  try {
    const { data } = await api.post("/api/status", postData);
    dispatch({ type: CREATE_STATUS_POST_SUCCESS, payload: data });
    console.log("Created post ", data);
  } catch (error) {
    dispatch({ type: CREATE_STATUS_POST_FAILURE, payload: error });
  }
};

export const getALlStatusPostAction = () => async (dispatch) => {
  dispatch({ type: GET_ALL_STATUS_POST_REQUEST });
  try {
    const { data } = await api.get("/api/status");
    dispatch({ type: GET_ALL_STATUS_POST_SUCCESS, payload: data });
    console.log("Get All post ", data);
  } catch (error) {
    dispatch({ type: GET_ALL_STATUS_POST_FAILURE, payload: error });
  }
};

export const getUsersStatusPostAction = (userId) => async (dispatch) => {
  dispatch({ type: GET_USERS_STATUS_POST_REQUEST });
  try {
    const { data } = await api.get(`/api/status/user/${userId}`);
    dispatch({ type: GET_USERS_STATUS_POST_SUCCESS, payload: data });
    console.log("Get Users post ", data);
  } catch (error) {
    dispatch({ type: GET_USERS_STATUS_POST_FAILURE, payload: error });
  }
};

export const likeStatusPostAction = (postId) => async (dispatch) => {
  dispatch({ type: LIKE_STATUS_POST_REQUEST });
  try {
    const { data } = await api.put(`/api/status/like/${postId}`);
    dispatch({ type: LIKE_STATUS_POST_SUCCESS, payload: data });
    console.log("Like post ", data);
  } catch (error) {
    dispatch({ type: LIKE_STATUS_POST_FAILURE, payload: error });
  }
};

export const createStatusCommentAction = (reqData) => async (dispatch) => {
  dispatch({ type: CREATE_COMMENT_STATUS_POST_REQUEST });
  try {
    const { data } = await api.post(
      `/api/comments/status/${reqData.postId}`,
      reqData.data
    );
    dispatch({ type: CREATE_COMMENT_STATUS_POST_SUCCESS, payload: data });
    console.log("Created post ", data);
  } catch (error) {
    dispatch({ type: CREATE_COMMENT_STATUS_POST_FAILURE, payload: error });
  }
};
