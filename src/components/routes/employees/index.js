import React from "react";
import Grid from "@material-ui/core/Grid";
import Employee from "./employeeCard";
import employees from "../../mockData/employees";

const Employees = () => (
  <Grid container direction="column" spacing={16}>
    {employees.map(employee => (
      <Grid item key={employee.name}>
        <Employee employee={employee} />
      </Grid>
    ))}
  </Grid>
);

export default Employees;
