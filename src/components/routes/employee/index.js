import React from "react";
import { connect } from "react-redux";
import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import { getEmployeeById } from "../../../selectors/index";
import { applyAll } from "../../../util";

const styles = theme => ({
  employeePaper: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2
  }
});

const Employee = ({ classes, employee }) => (
  <Paper className={classes.employeePaper}>
    <Typography variant="headline" component="h3">
      {employee ? employee.name : "Not Found"}
    </Typography>
  </Paper>
);

const mapStateToProps = (state, props) => ({
  employee: getEmployeeById(props.match.params.id)(state)
});

export default applyAll(withStyles(styles), connect(mapStateToProps))(Employee);
