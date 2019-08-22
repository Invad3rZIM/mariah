import React, { Component, Fragment } from 'react'
import {connect} from "react-redux";
import Navbar from './navbar.js';

import Paper from '@material-ui/core/Paper';
import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';

import m1 from '../pics/m1.jpg';
import m2 from '../pics/m2.jpg';
import m3 from '../pics/m3.jpg';
import m4 from '../pics/m4.jpg';
import { withStyles } from '@material-ui/core';
import instagram from '../pics/instagram3.png';
import facebook from '../pics/facebook.png';

import {
  BrowserView,
  MobileView,
  isBrowser,
  isMobile
} from "react-device-detect";

function mapStateToProps(state) {
  return {
    redirect: state.redirect
  };
}

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

var g
var q = -1
var signing = (<div><br/><br/><p style={{textAlign:"center"}}><i><b>Website by Kirk Zimmer (kzimmer655@gmail.com)</b></i></p></div>)

class Present extends Component {
  
  render() {
    if(q == -1) {
var support = (<p style={{textAlign:"center"}}><b>Support</b><br/><br/>If you like my work support me by following me.  Together, we will start a conversation about how we perceive value in art.</p>)
    g = ( <div> <Grid padding={20} container spacing={24}>
  <Grid  item xs={3} spacing={8}>
  </Grid> 
  <Grid item xs={6}>
  
  <iframe width="100%" height="600"  src="https://www.youtube.com/embed/7e0VWh7q0wA" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

<p style={{textAlign:"center"}}><b>Obsession/Personal Art Statement</b><br/><br/>I digest the world through my art.  This gift has given me an obsession that I need to manage.<br/><br/>When I’m trying, I work to express the dimensions of feeling.  At times, my subconscious leads the expression. When this happens, I have no idea what I am creating. In addition, beware, my shadows, nightmares and negative attitudes occasionally appear in my work.  For this, I am sorry.<br/><br/><i>-- Mariah Ringhoff --</i></p>
 <br/>{support}
 <Grid padding={20} container spacing={24}><Grid item xs={5} spacing={8}></Grid><Grid item xs={1}> <a href="https://www.instagram.com/ringhoffart/?hl=en"><img src={instagram}></img></a></Grid><Grid item xs={5}><a href="https://m.facebook.com/mariah.seminara/photos#_=_"><img src={facebook} height="64" width="64"></img></a></Grid>
  </Grid>
  <br/><img src={m3} style={styles.paper} width="100%"></img>
  </Grid>
</Grid></div>)

q = (  <div><Paper ><iframe width="100%" height="400"  src="https://www.youtube.com/embed/7e0VWh7q0wA" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
<br/><p style={{textAlign:"center"}}><b>Obsession/Personal Art Statement</b><br/><br/>I digest the world through my art.  This gift has given me an obsession that I need to manage.<br/><br/>When I’m trying, I work to express the dimensions of feeling.  At times, my subconscious leads the expression. When this happens, I have no idea what I am creating. In addition, beware, my shadows, nightmares and negative attitudes occasionally appear in my work.  For this, I am sorry.<br/><br/><i>-- Mariah Ringhoff --</i></p>
{support}
 <Grid padding={20} container spacing={24}><Grid item xs={4} spacing={8}></Grid><Grid item xs={2}> <a href="https://www.instagram.com/ringhoffart/?hl=en"><img src={instagram}></img></a></Grid><Grid item xs={2}><a href="https://m.facebook.com/mariah.seminara/photos#_=_"><img src={facebook} height="64" width="64"></img></a></Grid>
  </Grid><br/><img src={m3} style={styles.paper} width="100%"></img></Paper></div>)
    }

        return (<div><BrowserView><Navbar/>{g}{signing}</BrowserView>
          <MobileView><Navbar/>{q}{signing}</MobileView>
        </div>)
  }
}

export default connect(mapStateToProps)(withStyles(styles)(Present))