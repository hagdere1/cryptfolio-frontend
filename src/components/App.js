import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import axios from 'axios';
import Container from './Container';
import Login from './login/Login'
import UserApi from '../api/userApi';
import { getCookie } from '../util/auth';

import URI from 'urijs';

class App extends React.Component {
  componentDidMount() {
    let token = getCookie("token");

    if (token) {
      this.props.fetchCurrentUser(token);
    }
  }

  render() {
    return (
      <div style={{height: "100%"}}>
        {this.props.currentUser && this.props.currentUser.auth_token ? <Container /> : <Login />}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    currentUser: state.user.currentUser
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    fetchCurrentUser: UserApi.fetchCurrentUser
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
