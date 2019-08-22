import React, { Component, Fragment } from 'react'
import {connect} from "react-redux"
import Navbar from './navbar.js';

import Paper from '@material-ui/core/Paper';
import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';

import w1 from '../pics/w1.jpg';
import w2 from '../pics/w2.jpg';
import w3 from '../pics/w3.jpg';
import w4 from '../pics/w4.jpg';
import w5 from '../pics/w5.jpg';
import { withStyles } from '@material-ui/core';


import {
  BrowserView,
  MobileView,
  isBrowser,
  isMobile
} from "react-device-detect";


let styles = theme => ({container: {
  display: 'grid',
  gridTemplateColumns: 'repeat(12, 1fr)',
  gridGap: `${theme.spacing.unit * 3}px`,
},
paper: {
  padding: theme.spacing.unit,
  textAlign: 'center',
  color: theme.palette.text.secondary,
  whiteSpace: 'nowrap',
  marginBottom: theme.spacing.unit,
},
divider: {
  margin: `${theme.spacing.unit * 2}px 0`,
}})



function mapStateToProps(state) {
  return {
    redirect: state.redirect
  };
}

class Wall extends Component {

  render() {
 
    let x = 12


var text = (<Grid padding={20} container spacing={24}><Grid item xs={2}></Grid><Grid item xs={8}><p style={{textAlign:"center"}}>In the beginning I drew on walls. When the walls became covered I drew on large sheets of white paper. In each large piece I spent hours in memory, reviving my life.<br/><br/>In the Summer of 2019, I will begin a large mural in Boonton, New Jersey on Plane Street.</p></Grid></Grid>)

    
    var bl = (<Grid item xs={0}>   </Grid>)
      var q = ( <div> 
        <Grid padding={20} container spacing={24}>  {bl} <Grid  item xs={x} spacing={8}> <Paper ><img src={w1} style={styles.paper} width="100%"></img></Paper> </Grid></Grid><br/>
     
        <Grid padding={20} container spacing={24}>  {bl} <Grid  item xs={x} spacing={8}> <Paper ><img src={w2} style={styles.paper} width="100%"></img></Paper> </Grid></Grid><br/>
      <Grid padding={20} container spacing={24}>  {bl} <Grid  item xs={x} spacing={8}> <Paper ><img src={w3} style={styles.paper} width="100%"></img></Paper> </Grid></Grid><br/>
      <Grid padding={20} container spacing={24}>  {bl} <Grid  item xs={x} spacing={8}> <Paper ><img src={w4} style={styles.paper} width="100%"></img></Paper> </Grid></Grid><br/>
    
      </div>)
    
     bl = (<Grid item xs={2}>   </Grid>)
    x = 8

var text2 = (<Grid padding={20} container spacing={24}><Grid item xs={0}></Grid><Grid item xs={12}><p style={{textAlign:"center"}}>In the beginning I drew on walls. When the walls became covered I drew on large sheets of white paper. In each large piece I spent hours in memory, reviving my life.<br/><br/>In the Summer of 2019, I will begin a large mural in Boonton, New Jersey on Plane Street.</p></Grid></Grid>)

    
    var g = ( <div> 
        <Grid padding={20} container spacing={24}>  {bl} <Grid  item xs={x} spacing={8}> <Paper ><img src={w1} style={styles.paper} width="100%"></img></Paper> </Grid></Grid><br/>
     
        <Grid padding={20} container spacing={24}>  {bl} <Grid  item xs={x} spacing={8}> <Paper ><img src={w2} style={styles.paper} width="100%"></img></Paper> </Grid></Grid><br/>
      <Grid padding={20} container spacing={24}>  {bl} <Grid  item xs={x} spacing={8}> <Paper ><img src={w3} style={styles.paper} width="100%"></img></Paper> </Grid></Grid><br/>
      <Grid padding={20} container spacing={24}>  {bl} <Grid  item xs={x} spacing={8}> <Paper ><img src={w4} style={styles.paper} width="100%"></img></Paper> </Grid></Grid><br/>
    
    </div>)
    
            return (<div><BrowserView>{text}{g}{}</BrowserView>
              <MobileView>{text2}{q}</MobileView>
            </div>)
      }
}

export default connect(mapStateToProps)(Wall)