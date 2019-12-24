import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  card: {
    minWidth: 265,
    borderRadius: '2px !important'
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 12,
    color: '#787C90'
  },
  pos: {
    // marginBottom: 12,
    color: '#262626'
  },
  root: {
    display: 'flex'
  },
  img: {
    height: '40px',
    marginTop: '12px'
  }
});

export default function SimpleCard(props) {
  const classes = useStyles();
  // const bull = <span className={classes.bullet}>•</span>;

  return (
    <Card className={classes.card}>
      <div className={classes.root}>
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          {props.title}
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          {props.value}
        </Typography>
      </CardContent>
      <img 
      className={classes.img}
      src={require('../img/stats.png')} />
      </div>
    </Card>
  );
}