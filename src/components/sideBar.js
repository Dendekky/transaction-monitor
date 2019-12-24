import React from 'react';
import Buttons from '../assets/components/button'
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { withStyles, makeStyles, useTheme } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MailIcon from '@material-ui/icons/Mail';
import MenuIcon from '@material-ui/icons/Menu';
import DashboardIcon from '@material-ui/icons/Dashboard';
import SalesIcon from '@material-ui/icons/Receipt';
import ExpensesIcon from '@material-ui/icons/ShoppingBasket';
import ProductsIcon from '@material-ui/icons/Business';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    color: '#647787',
    padding: theme.spacing(1),
  },
  nav: {
    marginBottom: theme.spacing(2),
  },
  a: {
    '&:active': {
      background: '#044830',
    },
  },
}));


const Sidebar = (props) => {

  const mainItem = [
    { label: 'Overview', icon: <DashboardIcon />, url: '#' },
  ];

  const paymentItems = [
    { label: 'All Payments', icon: <DashboardIcon />, url: '#' },
    { label: 'Reconciled Payments', icon: <SalesIcon />, url: '#' },
    { label: 'Un-reconciled Payments', icon: <ExpensesIcon />, url: '#' },
    { label: 'Manual Settlements', icon: <ProductsIcon />, url: '#' },
  ];

  const orderItems = [
    { label: 'All Orders', icon: <DashboardIcon />, url: '#' },
    { label: 'Pending Orders', icon: <SalesIcon />, url: '#' },
    { label: 'Reconciled Orders', icon: <ExpensesIcon />, url: '#' },
  ];

  const classes = useStyles();

  const payment = (
    <div>
      <List>
        {paymentItems.map((item, index) => <ListItem className={classes.a} button key={index} component={Link} to={item.url}>
            <ListItemIcon> {item.icon}
            </ListItemIcon>
            <ListItemText primary={item.label} />
          </ListItem>)}
      </List>
    </div>
  );

  const order = (
    <div>
      <List>
        {orderItems.map((item, index) => <ListItem className={classes.a} button key={index} component={Link} to={item.url}>
            <ListItemIcon> {item.icon}
            </ListItemIcon>
            <ListItemText primary={item.label} />
          </ListItem>)}
      </List>
    </div>
  );

  const main = (
    <div>
      <List>
        {mainItem.map((item, index) => <ListItem className={classes.a} button key={index} component={Link} to={item.url}>
            <ListItemIcon> {item.icon}
            </ListItemIcon>
            <ListItemText primary={item.label} />
          </ListItem>)}
      </List>
    </div>
  );

  return (
      <div
        className={clsx(classes.root)}
      >
        <div>
            <Buttons content='GENERATE INVOICE' />
        </div>
        <ListItemText primary='Main'/>
            {main}
        <ListItemText primary='Payments'/>
            {payment}
        <ListItemText primary='Orders'/>
            {order}
      </div>
  );
};



export default Sidebar;


