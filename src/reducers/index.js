import { combineReducers } from "redux";
import formationsReducer from "./formationsReducer";
import routeReducer from "./routeReducer";


export default combineReducers({
   formations:formationsReducer,
   route:routeReducer
})