import { types } from "../actions/employees.actions";
import employees from "../components/mockData/employees";

const initialState = {
  list: [...employees]
};

const employeeReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case types.SET_EMPLOYEES:
      const { employees } = payload;
      return Object.assign({}, state, { list: employees });
    default:
      return state;
  }
};

export default employeeReducer;
