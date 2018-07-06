import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import axios from 'axios';

class Container extends React.Component {
  componentDidMount() {

  }
  
  render() {
    return (
      <div>Login Page</div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    loggedIn: true
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Container)