import { api } from "../../config/api";
import {
  CREATE_COMMENT_GOAL_POST_FAILURE,
  CREATE_COMMENT_GOAL_POST_REQUEST,
  CREATE_COMMENT_GOAL_POST_SUCCESS,
  CREATE_GOAL_POST_FAILURE,
  CREATE_GOAL_POST_REQUEST,
  CREATE_GOAL_POST_SUCCESS,
  GET_ALL_GOAL_POST_FAILURE,
  GET_ALL_GOAL_POST_REQUEST,
  GET_ALL_GOAL_POST_SUCCESS,
  GET_USERS_GOAL_POST_FAILURE,
  GET_USERS_GOAL_POST_REQUEST,
  GET_USERS_GOAL_POST_SUCCESS,
  LIKE_GOAL_POST_FAILURE,
  LIKE_GOAL_POST_REQUEST,
  LIKE_GOAL_POST_SUCCESS,
} from "./goal.actionType";

export const createGoalPostAction = (postData) => async (dispatch) => {
  dispatch({ type: CREATE_GOAL_POST_REQUEST });
  try {
    const { data } = await api.post("/api/goal", postData);
    dispatch({ type: CREATE_GOAL_POST_SUCCESS, payload: data });
    console.log("Created post ", data);
  } catch (error) {
    dispatch({ type: CREATE_GOAL_POST_FAILURE, payload: error });
  }
};

export const getALlGoalPostAction = () => async (dispatch) => {
  dispatch({ type: GET_ALL_GOAL_POST_REQUEST });
  try {
    const { data } = await api.get("/api/goals");
    dispatch({ type: GET_ALL_GOAL_POST_SUCCESS, payload: data });
    console.log("Get All post ", data);
  } catch (error) {
    dispatch({ type: GET_ALL_GOAL_POST_FAILURE, payload: error });
  }
};

export const getUsersGoalPostAction = (userId) => async (dispatch) => {
  dispatch({ type: GET_USERS_GOAL_POST_REQUEST });
  try {
    const { data } = await api.get(`/api/goals/user/${userId}`);
    dispatch({ type: GET_USERS_GOAL_POST_SUCCESS, payload: data });
    console.log("Get Users post ", data);
  } catch (error) {
    dispatch({ type: GET_USERS_GOAL_POST_FAILURE, payload: error });
  }
};

export const likeGoalPostAction = (postId) => async (dispatch) => {
  dispatch({ type: LIKE_GOAL_POST_REQUEST });
  try {
    const { data } = await api.put(`/api/goals/like/${postId}`);
    dispatch({ type: LIKE_GOAL_POST_SUCCESS, payload: data });
    console.log("Like post ", data);
  } catch (error) {
    dispatch({ type: LIKE_GOAL_POST_FAILURE, payload: error });
  }
};

export const createGoalCommentAction = (reqData) => async (dispatch) => {
  dispatch({ type: CREATE_COMMENT_GOAL_POST_REQUEST });
  try {
    const { data } = await api.post(
      `/api/comments/goal/${reqData.postId}`,
      reqData.data
    );
    dispatch({ type: CREATE_COMMENT_GOAL_POST_SUCCESS, payload: data });
    console.log("Created post ", data);
  } catch (error) {
    dispatch({ type: CREATE_COMMENT_GOAL_POST_FAILURE, payload: error });
  }
};
