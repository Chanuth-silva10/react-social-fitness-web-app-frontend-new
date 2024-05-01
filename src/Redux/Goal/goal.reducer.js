import {
  CREATE_COMMENT_GOAL_POST_SUCCESS,
  CREATE_GOAL_POST_FAILURE,
  CREATE_GOAL_POST_REQUEST,
  CREATE_GOAL_POST_SUCCESS,
  GET_ALL_GOAL_POST_FAILURE,
  GET_ALL_GOAL_POST_REQUEST,
  GET_ALL_GOAL_POST_SUCCESS,
  LIKE_GOAL_POST_FAILURE,
  LIKE_GOAL_POST_REQUEST,
  LIKE_GOAL_POST_SUCCESS,
} from "./goal.actionType";

const initialState = {
  post: null,
  error: null,
  loading: false,
  posts: [],
  like: null,
  comments: [],
  newComment:null,
};

export const goalReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_GOAL_POST_REQUEST:
    case GET_ALL_GOAL_POST_REQUEST:
    case LIKE_GOAL_POST_REQUEST:
      return { ...state, loading: true, error: null };
    case CREATE_GOAL_POST_SUCCESS:
      return {
        ...state,
        post: action.payload,
        posts: [action.payload, ...state.posts],
        loading: false,
        error: null,
      };
    case GET_ALL_GOAL_POST_SUCCESS:
      return {
        ...state,
        posts: action.payload,
        comments: action.payload.comments,
        loading: false,
        error: null,
      };
    case LIKE_GOAL_POST_SUCCESS:
      return {
        ...state,
        like: action.payload,
        posts: state.posts.map((item) =>
          item.id === action.payload.id ? action.payload : item
        ),
        loading: false,
        error: null,
      };

    case CREATE_COMMENT_GOAL_POST_SUCCESS:
      return {
        ...state,
        newComment:action.payload,
        loading: false,
        error: null,
      };
    case CREATE_GOAL_POST_FAILURE:
    case GET_ALL_GOAL_POST_FAILURE:
    case LIKE_GOAL_POST_FAILURE:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};
