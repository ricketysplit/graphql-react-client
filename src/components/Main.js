import React from "react";
import { Route } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import Employee from "./routes/employee";
import Employees from "./routes/employees";

const Main = () => (
  <Grid container spacing={32} justify="space-between">
    <Grid item xs={6}>
      <Route path="/employees" component={Employees} />
    </Grid>
    <Grid item xs={6}>
      <Route path="/employees/:id" component={Employee} />
    </Grid>
  </Grid>
);

export default Main;
