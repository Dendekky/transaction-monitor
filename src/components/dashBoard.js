import React from 'react';
import Transaction from './dashboardComponents/transaction';
import Grid from '@material-ui/core/Grid';
import Chart from './dashboardComponents/chart'
import Order from './dashboardComponents/order'

export default function  DashBoard (props) {
    return(
    <div>
      <Transaction />
      <div className='charts'>
      <Grid container>
        <Grid item xs={8} md={8}>
          <Chart />
        </Grid>
        <Grid item xs={4} md={4}>
          <Order />
        </Grid>
      </Grid>
      </div>
    </div>
    )
}
