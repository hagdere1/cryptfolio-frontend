import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PieChart from './PieChart';

class Holdings extends React.Component {
  render() {
    return (
      <div>
        <PieChart data={this.props.data} />
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

  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Holdings)
