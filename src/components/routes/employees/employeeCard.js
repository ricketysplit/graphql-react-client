import React from "react";
import { withStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

const styles = {
  card: {
    minWidth: 275
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)"
  },
  title: {
    marginBottom: 16,
    fontSize: 14
  },
  pos: {
    marginBottom: 12
  }
};

const Employee = ({ classes, employee }) => (
  <Card className={classes.card}>
    <CardContent>
      <Typography className={classes.title} color="textSecondary">
        Employee
      </Typography>
      <Typography variant="headline" component="h2">
        {employee.name}
      </Typography>
      <Typography color="textSecondary">{employee.position}</Typography>
    </CardContent>
    <CardActions>
      <Button size="small" component={Link} to={`/employees/${employee.id}`}>
        View More
      </Button>
    </CardActions>
  </Card>
);

export default withStyles(styles)(Employee);
