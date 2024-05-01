import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import { thunk } from "redux-thunk";
import { authReducer } from "./Auth/auth.reducer";
import { postReducer } from "./Post/post.reducer";
import { MealPlanReducer } from "./MealPlan/mealPlan.reducer";
import { goalReducer } from "./Goal/goal.reducer";
import { statusReducer } from "./Status/status.reducer";

const rootReducers = combineReducers({
  auth: authReducer,
  post:postReducer,
  meal:MealPlanReducer,
  goal:goalReducer,
  status:statusReducer,
});

export const store = legacy_createStore(rootReducers, applyMiddleware(thunk));
