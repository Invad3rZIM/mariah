import React, { Component, Fragment } from 'react'
import {connect} from "react-redux"
import Navbar from './navbar.js';

import Paper from '@material-ui/core/Paper';
import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';

import w1 from '../pics/KirKWebsite/progression/Progression-2.jpg';
import w2 from '../pics/KirKWebsite/progression/Progression-3.jpg';
import w3 from '../pics/KirKWebsite/progression/Progression-4.jpg';
import w4 from '../pics/KirKWebsite/progression/Progression-5.jpg';
import w5 from '../pics/KirKWebsite/progression/Progression-6.jpg';
import w6 from '../pics/KirKWebsite/progression/Progression-7.jpg';
import w7 from '../pics/KirKWebsite/progression/Progression-8.jpg';
import w8 from '../pics/KirKWebsite/progression/Progression-9.jpg';
import w9 from '../pics/KirKWebsite/progression/Progression-10.jpg';
import w10 from '../pics/KirKWebsite/progression/Progression-11.jpg';
import w11 from '../pics/KirKWebsite/progression/Progression-12.jpg';
import w12 from '../pics/KirKWebsite/progression/Progression-13.jpg';
import w13 from '../pics/KirKWebsite/progression/Progression-14.jpg';
import w14 from '../pics/KirKWebsite/progression/Progression-15.jpg';
import w15 from '../pics/KirKWebsite/progression/Progression-16.jpg';
import w16 from '../pics/KirKWebsite/progression/Progression-17.jpg';
import w17 from '../pics/KirKWebsite/progression/Progression-18.jpg';
import w18 from '../pics/KirKWebsite/progression/Progression-19.jpg';
import w19 from '../pics/KirKWebsite/progression/Progression-20.jpg';


import { withStyles } from '@material-ui/core';


import {
  BrowserView,
  MobileView,
  isBrowser,
  isMobile
} from "react-device-detect";


let styles = theme => ({root: {
  flexGrow: 1,
},container: {
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

class Progression extends Component {

render() {
 
let x = 12


var text = (<Grid padding={20} container spacing={24}><Grid item xs={2}></Grid><Grid item xs={8}><p style={{textAlign:"center"}}>
One evening I dared myself to do something different. A red marker was close to my hand so I chose to doodle on the wall. I doodled all night. My morning the wall was covered and I was madly in love with my new form of expression. Smitten, I vowed to nurture my love with the obsessive act of drawing more, drawing nothing and drawing everything.</p></Grid></Grid>)



var text2 = (<Grid padding={20} container spacing={24}><Grid item xs={0}></Grid><Grid item xs={12}><p style={{textAlign:"center"}}>
One evening I dared myself to do something different. A red marker was close to my hand so I chose to doodle on the wall. I doodled all night. My morning the wall was covered and I was madly in love with my new form of expression. Smitten, I vowed to nurture my love with the obsessive act of drawing more, drawing nothing and drawing everything.</p></Grid></Grid>)


var bl = (<Grid item xs={0}>   </Grid>)
  var q = ( <div> 
   <Grid padding={20} container spacing={24}>  {bl} <Grid  item xs={x} spacing={8}> <Paper ><img src={w12} style={styles.paper} width="100%"></img></Paper> </Grid></Grid><br/>
    <Grid padding={20} container spacing={24}>  {bl} <Grid  item xs={x} spacing={8}> <Paper ><img src={w3} style={styles.paper} width="100%"></img></Paper> </Grid></Grid><br/>
    <Grid padding={20} container spacing={24}>  {bl} <Grid  item xs={x} spacing={8}> <Paper ><img src={w4} style={styles.paper} width="100%"></img></Paper> </Grid></Grid><br/>
    <Grid padding={20} container spacing={24}>  {bl} <Grid  item xs={x} spacing={8}> <Paper ><img src={w5} style={styles.paper} width="100%"></img></Paper> </Grid></Grid><br/>
    <Grid padding={20} container spacing={24}>  {bl} <Grid  item xs={x} spacing={8}> <Paper ><img src={w6} style={styles.paper} width="100%"></img></Paper> </Grid></Grid><br/>
    <Grid padding={20} container spacing={24}>  {bl} <Grid  item xs={x} spacing={8}> <Paper ><img src={w7} style={styles.paper} width="100%"></img></Paper> </Grid></Grid><br/>
    <Grid padding={20} container spacing={24}>  {bl} <Grid  item xs={x} spacing={8}> <Paper ><img src={w8} style={styles.paper} width="100%"></img></Paper> </Grid></Grid><br/>
    <Grid padding={20} container spacing={24}>  {bl} <Grid  item xs={x} spacing={8}> <Paper ><img src={w9} style={styles.paper} width="100%"></img></Paper> </Grid></Grid><br/>
    <Grid padding={20} container spacing={24}>  {bl} <Grid  item xs={x} spacing={8}> <Paper ><img src={w10} style={styles.paper} width="100%"></img></Paper> </Grid></Grid><br/>
  
    <Grid padding={20} container spacing={24}>  {bl} <Grid  item xs={x} spacing={8}> <Paper ><img src={w11} style={styles.paper} width="100%"></img></Paper> </Grid></Grid><br/>
  <Grid padding={20} container spacing={24}>  {bl} <Grid  item xs={x} spacing={8}> <Paper ><img src={w1} style={styles.paper} width="100%"></img></Paper> </Grid></Grid><br/>
  <Grid padding={20} container spacing={24}>  {bl} <Grid  item xs={x} spacing={8}> <Paper ><img src={w13} style={styles.paper} width="100%"></img></Paper> </Grid></Grid><br/>
  <Grid padding={20} container spacing={24}>  {bl} <Grid  item xs={x} spacing={8}> <Paper ><img src={w14} style={styles.paper} width="100%"></img></Paper> </Grid></Grid><br/>
  <Grid padding={20} container spacing={24}>  {bl} <Grid  item xs={x} spacing={8}> <Paper ><img src={w15} style={styles.paper} width="100%"></img></Paper> </Grid></Grid><br/>
  <Grid padding={20} container spacing={24}>  {bl} <Grid  item xs={x} spacing={8}> <Paper ><img src={w16} style={styles.paper} width="100%"></img></Paper> </Grid></Grid><br/>
  <Grid padding={20} container spacing={24}>  {bl} <Grid  item xs={x} spacing={8}> <Paper ><img src={w17} style={styles.paper} width="100%"></img></Paper> </Grid></Grid><br/>
  <Grid padding={20} container spacing={24}>  {bl} <Grid  item xs={x} spacing={8}> <Paper ><img src={w18} style={styles.paper} width="100%"></img></Paper> </Grid></Grid><br/>
  <Grid padding={20} container spacing={24}>  {bl} <Grid  item xs={x} spacing={8}> <Paper ><img src={w17} style={styles.paper} width="100%"></img></Paper> </Grid></Grid><br/>
  <Grid padding={20} container spacing={24}>  {bl} <Grid  item xs={x} spacing={8}> <Paper ><img src={w19} style={styles.paper} width="100%"></img></Paper> </Grid></Grid><br/>

  </div>)

 bl = (<Grid item xs={2}>   </Grid>)
x = 8

var g = ( <div> 
    <Grid padding={20} container spacing={24}>  {bl} <Grid  item xs={x} spacing={8}> <Paper ><img src={w12} style={styles.paper} width="100%"></img></Paper> </Grid></Grid><br/>
  <Grid padding={20} container spacing={24}>  {bl} <Grid  item xs={x} spacing={8}> <Paper ><img src={w3} style={styles.paper} width="100%"></img></Paper> </Grid></Grid><br/>
  <Grid padding={20} container spacing={24}>  {bl} <Grid  item xs={x} spacing={8}> <Paper ><img src={w4} style={styles.paper} width="100%"></img></Paper> </Grid></Grid><br/>
  <Grid padding={20} container spacing={24}>  {bl} <Grid  item xs={x} spacing={8}> <Paper ><img src={w5} style={styles.paper} width="100%"></img></Paper> </Grid></Grid><br/>
  <Grid padding={20} container spacing={24}>  {bl} <Grid  item xs={x} spacing={8}> <Paper ><img src={w6} style={styles.paper} width="100%"></img></Paper> </Grid></Grid><br/>
  <Grid padding={20} container spacing={24}>  {bl} <Grid  item xs={x} spacing={8}> <Paper ><img src={w7} style={styles.paper} width="100%"></img></Paper> </Grid></Grid><br/>
  <Grid padding={20} container spacing={24}>  {bl} <Grid  item xs={x} spacing={8}> <Paper ><img src={w8} style={styles.paper} width="100%"></img></Paper> </Grid></Grid><br/>
  <Grid padding={20} container spacing={24}>  {bl} <Grid  item xs={x} spacing={8}> <Paper ><img src={w9} style={styles.paper} width="100%"></img></Paper> </Grid></Grid><br/>
  <Grid padding={20} container spacing={24}>  {bl} <Grid  item xs={x} spacing={8}> <Paper ><img src={w10} style={styles.paper} width="100%"></img></Paper> </Grid></Grid><br/>
 
  <Grid padding={20} container spacing={24}>  {bl} <Grid  item xs={x} spacing={8}> <Paper ><img src={w11} style={styles.paper} width="100%"></img></Paper> </Grid></Grid><br/>
  <Grid padding={20} container spacing={24}>  {bl} <Grid  item xs={x} spacing={8}> <Paper ><img src={w1} style={styles.paper} width="100%"></img></Paper> </Grid></Grid><br/>
  <Grid padding={20} container spacing={24}>  {bl} <Grid  item xs={x} spacing={8}> <Paper ><img src={w13} style={styles.paper} width="100%"></img></Paper> </Grid></Grid><br/>
  <Grid padding={20} container spacing={24}>  {bl} <Grid  item xs={x} spacing={8}> <Paper ><img src={w14} style={styles.paper} width="100%"></img></Paper> </Grid></Grid><br/>
  <Grid padding={20} container spacing={24}>  {bl} <Grid  item xs={x} spacing={8}> <Paper ><img src={w15} style={styles.paper} width="100%"></img></Paper> </Grid></Grid><br/>
  <Grid padding={20} container spacing={24}>  {bl} <Grid  item xs={x} spacing={8}> <Paper ><img src={w16} style={styles.paper} width="100%"></img></Paper> </Grid></Grid><br/>
  <Grid padding={20} container spacing={24}>  {bl} <Grid  item xs={x} spacing={8}> <Paper ><img src={w17} style={styles.paper} width="100%"></img></Paper> </Grid></Grid><br/>
  <Grid padding={20} container spacing={24}>  {bl} <Grid  item xs={x} spacing={8}> <Paper ><img src={w18} style={styles.paper} width="100%"></img></Paper> </Grid></Grid><br/>
  <Grid padding={20} container spacing={24}>  {bl} <Grid  item xs={x} spacing={8}> <Paper ><img src={w19} style={styles.paper} width="100%"></img></Paper> </Grid></Grid><br/>

</div>)

        return (<div><BrowserView>{text} {g}{}</BrowserView>
          <MobileView>{text2}{q}</MobileView>
        </div>)
  }
}

export default connect(mapStateToProps)(Progression)