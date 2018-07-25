import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

class Transfers extends React.Component {
  render() {
    return (
      <article>
        TRANSFERS
      </article>
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

  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Transfers);
