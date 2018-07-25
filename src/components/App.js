import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import styled from 'styled-components';

import Container from './Container';
import Login from './login/Login'
import UserApi from '../api/userApi';
import { getCookie } from '../util/auth';

const StyledApp = styled.div`
  height: 100%;
`

class App extends React.Component {
  componentDidMount() {
    let token = getCookie("token");

    if (token) {
      this.props.fetchCurrentUser(token);
    }
  }

  render() {
    return (
      <StyledApp>
        {this.props.currentUser && this.props.currentUser.auth_token ? <Container /> : <Login />}
      </StyledApp>
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

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App))
