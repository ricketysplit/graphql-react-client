import { combineReducers } from "redux";
import employees from "./employees.reducer";

const hrApp = combineReducers({ employees });

export default hrApp;
