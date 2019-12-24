import React from 'react';
import PrimaryAppBar from './components/appBar';
import SideBar from './components/sideBar';
import DashBoard from './components/dashBoard';
import './App.css';


export default function  App (props) {
    return(
    <div>
      <PrimaryAppBar />
      <div className='main-disp'>
        <div className='sidebar'>
        <SideBar />
        </div>
        <div className='dasboard'>
        <DashBoard />
        </div>
      </div>
      {/* <p>Welcome to Transmonitor</p> */}
    </div>
    )
}
