import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, Typography, Button } from '@material-ui/core';
import { refreshUsers } from '../util/apiConnection';
import { useSetRecoilState } from 'recoil';
import { ForceReload } from '../util/tableState';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
}));

export default function ButtonAppBar() {
  const classes = useStyles();
  const reload = useSetRecoilState(ForceReload);

  return (
    <div className={classes.root}>
        <AppBar position="static">
            <Toolbar>
                <Typography variant="h6" className={classes.title}>
                    RedSky User Cache Project
                </Typography>
                <Button color="inherit" onClick={() => refreshUsers(reload)}>Refresh Users</Button>
            </Toolbar>
        </AppBar>
    </div>
  );
}