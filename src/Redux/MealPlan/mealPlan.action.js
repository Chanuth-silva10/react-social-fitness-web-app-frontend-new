import { api } from "../../config/api";
import {
  CREATE_MEAL_PLAN_COMMENT_FAILURE,
  CREATE_MEAL_PLAN_COMMENT_REQUEST,
  CREATE_MEAL_PLAN_COMMENT_SUCCESS,
  CREATE_MEAL_PLAN_POST_FAILURE,
  CREATE_MEAL_PLAN_POST_REQUEST,
  CREATE_MEAL_PLAN_POST_SUCCESS,
  GET_ALL_MEAL_PLAN_POST_FAILURE,
  GET_ALL_MEAL_PLAN_POST_REQUEST,
  GET_ALL_MEAL_PLAN_POST_SUCCESS,
  GET_USERS_MEAL_PLAN_POST_FAILURE,
  GET_USERS_MEAL_PLAN_POST_REQUEST,
  GET_USERS_MEAL_PLAN_POST_SUCCESS,
  LIKE_MEAL_PLAN_POST_FAILURE,
  LIKE_MEAL_PLAN_POST_REQUEST,
  LIKE_MEAL_PLAN_POST_SUCCESS,
} from "./mealPlan.actionType";

export const createMealPlanPostAction = (postData) => async (dispatch) => {
  dispatch({ type: CREATE_MEAL_PLAN_POST_REQUEST });
  try {
    const { data } = await api.post("/api/meals", postData);
    dispatch({ type: CREATE_MEAL_PLAN_POST_SUCCESS, payload: data });
    console.log("Created post ", data);
  } catch (error) {
    dispatch({ type: CREATE_MEAL_PLAN_POST_FAILURE, payload: error });
  }
};

export const getALlMealPlanPostAction = () => async (dispatch) => {
  dispatch({ type: GET_ALL_MEAL_PLAN_POST_REQUEST });
  try {
    const { data } = await api.get("/api/meals");
    dispatch({ type: GET_ALL_MEAL_PLAN_POST_SUCCESS, payload: data });
    console.log("Get All post ", data);
  } catch (error) {
    dispatch({ type: GET_ALL_MEAL_PLAN_POST_FAILURE, payload: error });
  }
};

export const getUsersMealPlanPostAction = (userId) => async (dispatch) => {
  dispatch({ type: GET_USERS_MEAL_PLAN_POST_REQUEST });
  try {
    const { data } = await api.get(`/api/meals/user/${userId}`);
    dispatch({ type: GET_USERS_MEAL_PLAN_POST_SUCCESS, payload: data });
    console.log("Get Users post ", data);
  } catch (error) {
    dispatch({ type: GET_USERS_MEAL_PLAN_POST_FAILURE, payload: error });
  }
};

export const likeMealPlanPostAction = (postId) => async (dispatch) => {
  dispatch({ type: LIKE_MEAL_PLAN_POST_REQUEST });
  try {
    const { data } = await api.put(`/api/meals/like/${postId}`);
    dispatch({ type: LIKE_MEAL_PLAN_POST_SUCCESS, payload: data });
    console.log("Like post ", data);
  } catch (error) {
    dispatch({ type: LIKE_MEAL_PLAN_POST_FAILURE, payload: error });
  }
};

export const createMealPlanCommentAction = (reqData) => async (dispatch) => {
  dispatch({ type: CREATE_MEAL_PLAN_COMMENT_REQUEST });
  try {
    const { data } = await api.post(
      `/api/comments/meal/${reqData.postId}`,
      reqData.data
    );
    dispatch({ type: CREATE_MEAL_PLAN_COMMENT_SUCCESS, payload: data });
    console.log("Created post ", data);
  } catch (error) {
    dispatch({ type: CREATE_MEAL_PLAN_COMMENT_FAILURE, payload: error });
  }
};
