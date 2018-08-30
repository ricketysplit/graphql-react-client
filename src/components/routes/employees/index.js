import React from "react";
import Grid from "@material-ui/core/Grid";
import { graphql, QueryRenderer } from "react-relay";
import Employee from "./employeeCard";
import environment from "../../../../relay.environment";

const Employees = () => (
  <Grid container direction="column" spacing={16}>
    <QueryRenderer
      environment={environment}
      query={graphql`
        query employeesQuery {
          employees {
            id
            name
            position
            reportsTo {
              name
            }
          }
        }
      `}
      variables={{}}
      render={({ error, props }) => {
        if (error) {
          return <div>ERROR</div>;
        }
        if (!props) {
          return <div>Loading...</div>;
        }
        return (
          <React.Fragment>
            {props.employees.map(employee => (
              <Grid item key={employee.name}>
                <Employee employee={employee} />
              </Grid>
            ))}
          </React.Fragment>
        );
      }}
    />
  </Grid>
);

export default Employees;
