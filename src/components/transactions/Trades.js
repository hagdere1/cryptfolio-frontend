import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

class Trades extends React.Component {
  render() {
    return (
      <article>
        TRADES
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

export default connect(mapStateToProps, mapDispatchToProps)(Trades);
