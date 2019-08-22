import React, { Component, Fragment } from 'react'
import {connect} from "react-redux"
import Navbar from './navbar.js';

import Paper from '@material-ui/core/Paper';
import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';

import w1 from '../pics/KirKWebsite/Collections2/Collections-1.jpg';
import w2 from '../pics/KirKWebsite/Collections2/Collections-2.jpg';
import w3 from '../pics/KirKWebsite/Collections2/Collections-3.jpg';
import w4 from '../pics/KirKWebsite/Collections2/Collections-4.jpg';
import w5 from '../pics/KirKWebsite/Collections2/Collections-5.jpg';
import w6 from '../pics/KirKWebsite/Collections2/Collections-6.jpg';
import w7 from '../pics/KirKWebsite/Collections2/Collections-7.jpg';
import w8 from '../pics/KirKWebsite/Collections2/Collections-8.jpg';
import w9 from '../pics/KirKWebsite/Collections2/Collections-9.jpg';
import w10 from '../pics/KirKWebsite/Collections2/Collections-10.jpg';
import w11 from '../pics/KirKWebsite/Collections2/Collections-11.jpg';
import w12 from '../pics/KirKWebsite/Collections2/Collections-12.jpg';
import w13 from '../pics/KirKWebsite/Collections2/Collections-13.jpg';
import w14 from '../pics/KirKWebsite/Collections2/Collections-14.jpg';
import w15 from '../pics/KirKWebsite/Collections2/Collections-15.jpg';

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

class Collections extends Component {

render() {
 
let x = 12





var text = (<Grid padding={20} container spacing={24}><Grid item xs={2}></Grid><Grid item xs={8}><p style={{textAlign:"center"}}>
‘Collections’ are groups of drawings or paintings that I encoded a dreary boundary so I can push the limits.  My first collection included books abstract pieces limited by 1-3 tones.  Immediately following the tone collection, I started a black/white series to interpret the Bhagavad Gita abstractly.  This Bhagavad Gita series was the first of three collections on the Bhagavad Gita.  The other two collections have unrestricted color but strict adherence to verse.  <br/><br/>My additional Collections include but are not limited to: Eastern philosophy, Indian myth, Wales myth, landscapes, tastes, crows, portraits, Vedic Gods, musical events, sporting events, movies, love and disconnection,
20 Gunas and the described Aruyvedic forms of Tejas, Dhathus, Agni, Doshas/sub-Dosas.</p></Grid></Grid>)



var text2 = (<Grid padding={20} container spacing={24}><Grid item xs={0}></Grid><Grid item xs={12}><p style={{textAlign:"center"}}>
‘Collections’ are groups of drawings or paintings that I encoded a dreary boundary so I can push the limits.  My first collection included books abstract pieces limited by 1-3 tones.  Immediately following the tone collection, I started a black/white series to interpret the Bhagavad Gita abstractly.  This Bhagavad Gita series was the first of three collections on the Bhagavad Gita.  The other two collections have unrestricted color but strict adherence to verse.  <br/><br/>My additional Collections include but are not limited to: Eastern philosophy, Indian myth, Wales myth, landscapes, tastes, crows, portraits, Vedic Gods, musical events, sporting events, movies, love and disconnection,
20 Gunas and the described Aruyvedic forms of Tejas, Dhathus, Agni, Doshas/sub-Dosas.</p></Grid></Grid>)


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

</div>)

        return (<div><BrowserView>{text} {g}{}</BrowserView>
          <MobileView>{text2}{q}</MobileView>
        </div>)
  }
}

export default connect(mapStateToProps)(Collections)