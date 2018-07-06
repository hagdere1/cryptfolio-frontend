import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

class Login extends React.Component {
  render() {
    return (
      <div>Login here</div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)