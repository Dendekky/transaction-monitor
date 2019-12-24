import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';

const useStyles = makeStyles(theme => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

export default function Buttons(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Fab variant="extended">
        {props.content}
      </Fab>
    </div>
  );
}