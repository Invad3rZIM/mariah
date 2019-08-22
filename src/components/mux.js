import React, { Component } from 'react'
import {connect} from "react-redux"
import Present from './present.js';
import Past from './past.js';
import Future from './future.js';

var present = (<div><Present/></div>)
var past = (<div><Past/></div>)
var future = (<div><Future/></div>)

function mapStateToProps(state) {

  return {
    redirect: state.redirect
  };
}

class Navigation extends Component {
  

  render() {

    if (this.props.redirect.page === "PRESENT") {
      return present
  }
  if (this.props.redirect.page === "PAST") {
    return past
}
if (this.props.redirect.page === "FUTURE") {
  return future
}
        return <div><p>Timeless</p></div>

  }
}

export default connect(mapStateToProps)(Navigation)