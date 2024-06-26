import { UPDATE_MEAL_POST_SUCCESS } from "../MealPlan/mealPlan.actionType";
import {
  CREATE_COMMENT_STATUS_POST_SUCCESS,
  CREATE_STATUS_POST_FAILURE,
  CREATE_STATUS_POST_REQUEST,
  CREATE_STATUS_POST_SUCCESS,
  DELETE_STATUS_POST_FAILURE,
  DELETE_STATUS_POST_REQUEST,
  DELETE_STATUS_POST_SUCCESS,
  GET_ALL_STATUS_POST_FAILURE,
  GET_ALL_STATUS_POST_REQUEST,
  GET_ALL_STATUS_POST_SUCCESS,
  LIKE_STATUS_POST_FAILURE,
  LIKE_STATUS_POST_REQUEST,
  LIKE_STATUS_POST_SUCCESS,
  UPDATE_STATUS_POST_FAILURE,
  UPDATE_STATUS_POST_REQUEST,
} from "./status.actionType";

const initialState = {
  post: null,
  error: null,
  loading: false,
  posts: [],
  like: null,
  comments: [],
  newComment: null,
  message: null,
};

export const statusReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_STATUS_POST_REQUEST:
    case GET_ALL_STATUS_POST_REQUEST:
    case LIKE_STATUS_POST_REQUEST:
    case DELETE_STATUS_POST_REQUEST:
    case UPDATE_STATUS_POST_REQUEST:
      return { ...state, loading: true, error: null };
    case CREATE_STATUS_POST_SUCCESS:
      return {
        ...state,
        post: action.payload,
        posts: [action.payload, ...state.posts],
        loading: false,
        error: null,
      };
    case DELETE_STATUS_POST_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        message: action.payload,
      };
    case UPDATE_MEAL_POST_SUCCESS:
      return {
        ...state,
        post: action.payload,
        posts: state.posts.map((item) =>
          item.id === action.payload.id ? action.payload : item
        ),
        loading: false,
        error: null,
      };
    case GET_ALL_STATUS_POST_SUCCESS:
      return {
        ...state,
        posts: action.payload,
        comments: action.payload.comments,
        loading: false,
        error: null,
      };
    case LIKE_STATUS_POST_SUCCESS:
      return {
        ...state,
        like: action.payload,
        posts: state.posts.map((item) =>
          item.id === action.payload.id ? action.payload : item
        ),
        loading: false,
        error: null,
      };

    case CREATE_COMMENT_STATUS_POST_SUCCESS:
      return {
        ...state,
        newComment: action.payload,
        loading: false,
        error: null,
      };
    case CREATE_STATUS_POST_FAILURE:
    case GET_ALL_STATUS_POST_FAILURE:
    case LIKE_STATUS_POST_FAILURE:
    case DELETE_STATUS_POST_FAILURE:
    case UPDATE_STATUS_POST_FAILURE:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};
