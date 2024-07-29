import { combineReducers } from "redux";
import formationsReducer from "./formationsReducer";

export default combineReducers({
   formations:formationsReducer
})