export const types = { SET_EMPLOYEES: "SET_EMPLOYEES" };

export const actions = {
  setEmployees: employees => ({
    type: types.SET_EMPLOYEES,
    payload: { employees }
  })
};
