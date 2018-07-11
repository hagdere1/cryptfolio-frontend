import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import axios from 'axios';
import Header from './header/Header';
import Body from './body/Body';
import Footer from './footer/Footer';

import {store} from '../store/configureStore';

import URI from 'urijs';

class Container extends React.Component {
  componentDidMount() {

    axios.post("http://localhost:3000/api/v1/sessions", {email: "hgagdere@gmail.com", password: "Password123"}).then(response => {
      store.dispatch({type: "LOGIN_SUCCESS", payload: response.data.data});
    }).catch(error => {
      debugger
    });

  }

  render() {
    return (
      <div style={{display: "flex", flexDirection: "column", height: "100%"}}>

        <Header />

        <Body />

        <Footer />

      </div>
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
