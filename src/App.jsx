import React from "react";
import PropTypes from "prop-types";
import { createStyles, withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Divider from "@material-ui/core/Divider";
import Drawer from "@material-ui/core/Drawer";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";

import DrawerNavigation from "./components/DrawerNavigation";
import Main from "./components/Main";

const drawerWidth = 240;

const styles = theme =>
  createStyles({
    appBar: {
      marginLeft: drawerWidth,
      width: `calc(100% - ${drawerWidth}px)`
    },
    appFrame: {
      minHeight: 440,
      zIndex: 1,
      overflow: "hidden",
      position: "relative",
      display: "flex",
      flexGrow: 1,
      width: "100%"
    },
    content: {
      flexGrow: 1,
      backgroundColor: theme.palette.background.default,
      padding: theme.spacing.unit * 3
    },
    drawerPaper: { position: "relative", width: drawerWidth },
    toolbar: theme.mixins.toolbar
  });

const App = ({ classes }) => (
  <div className={classes.appFrame}>
    <AppBar position="absolute" className={classes.appBar}>
      <Toolbar>
        <Typography variant="title" color="inherit">
          HR Management Tool
        </Typography>
      </Toolbar>
    </AppBar>
    <Drawer
      variant="permanent"
      classes={{ paper: classes.drawerPaper }}
      anchor="left"
    >
      <div className={classes.toolbar} />
      <Divider />
      <DrawerNavigation />
    </Drawer>
    <main className={classes.content}>
      <div className={classes.toolbar} />
      <Main />
    </main>
  </div>
);

App.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(App);
