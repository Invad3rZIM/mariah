import React, { Component, Fragment } from 'react'
import {connect} from "react-redux"
import Navbar from './navbar.js';

import Paper from '@material-ui/core/Paper';
import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';
import {redirect} from '../actions/redirectActions.js';

import Progression from './progression.js';
import Favorites from './favorites.js';

import Button from '@material-ui/core/Button';
import m1 from '../pics/m1.jpg';
import m5 from '../pics/m5.jpg';
import m6 from '../pics/flyer.png';
import m4 from '../pics/m4.jpg';
import { withStyles } from '@material-ui/core';


import {
  BrowserView,
  MobileView,
  isBrowser,
  isMobile
} from "react-device-detect";


let styles = theme => ({container: {
  flex: 1,
  backgroundColor: '#fff',
  flexDirection:'column',
},
paper: {
  padding: theme.spacing.unit,
  textAlign: 'center',
  color: theme.palette.text.secondary,
  whiteSpace: 'nowrap',
  marginBottom: theme.spacing.unit,
    flex: 1,
    backgroundColor: '#fff',
    flexDirection:'column',
},
divider: {
  margin: `${theme.spacing.unit * 2}px 0`,
}})



function mapStateToProps(state) {
  return {
    redirect: state.redirect
  };
}

var favorites = (<div><Favorites/></div>)
var progression = (<div><Progression/></div>)


class Future extends Component {

render() {


var g = ( <div style={{paddingRight:"20px", width:"100%", display: 'flex',  justifyContent:'center', alignItems:'center'}}>
<Grid container spacing={24} padding={20}><Grid xs={3}></Grid><Grid xs={5}>
 <img src={m6} style={{paddingRight:"20px", width:"100%", display: 'flex',  justifyContent:'center', alignItems:'center'}} width="100%"></img>
</Grid><Grid xs={4}>
<Grid padding={20} container spacing={24}>
  <Grid item xs={6}>
    <Button onClick={e => redirect("PROGRESSION")}><Paper>Progression</Paper></Button><br/>
    <Button onClick={e => redirect("FAVORITES")}><Paper>Future</Paper></Button><br/>
  </Grid>
</Grid></Grid>
</Grid></div>)

var rr = ( <div>
  <img src={m6} style={{padding:"4px", width:"100%", display: 'flex',  justifyContent:'center', alignItems:'center'}} width="100%"></img>
 <br/></div> )
var r = ( <div style={{ width:"100%", display: 'flex',  justifyContent:'center', alignItems:'center'}}>

<Grid padding={20} container spacing={0}>
 <Grid item xs={1}></Grid><Grid item xs={6}>
    <Button width="100%" onClick={e => redirect("PROGRESSION")}><Paper>Progression</Paper></Button> </Grid> <Grid item xs={5}>
    <Button width="100%" onClick={e => redirect("FAVORITES")}><Paper>Favorites</Paper></Button> </Grid> 
</Grid></div>)


var otherStuff = ( <div></div>)

if (this.props.redirect.minipage === "PROGRESSION") {
  otherStuff = progression
}
if (this.props.redirect.minipage === "FAVORITES") {
  otherStuff = favorites
}

var q = (  <div><Paper ><img src={m5} style={styles.paper} width="100%"></img></Paper>
<Paper ><img src={m6} style={styles.paper} width="100%"></img></Paper></div>

)

        return (<div><BrowserView><Navbar/><br/><Grid container spacing={24}><Grid xs="2"></Grid><Grid xs="7">{g}</Grid></Grid><br/>{otherStuff} </BrowserView>
          <MobileView><Navbar/>{r}{rr}{otherStuff}</MobileView>
        </div>)
  }
}

export default connect(mapStateToProps)(Future)