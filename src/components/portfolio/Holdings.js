import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PieChart from './PieChart';

class Holdings extends React.Component {
  render() {
    return (
      <PieChart data={this.props.data} />
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

export default connect(mapStateToProps, mapDispatchToProps)(Holdings)
