import { createSelector } from "reselect";

export const getEmployees = state => state.employees.list;

export const getEmployeeById = id =>
  createSelector(getEmployees, employees =>
    employees.find(e => e.id === parseInt(id, 10))
  );
