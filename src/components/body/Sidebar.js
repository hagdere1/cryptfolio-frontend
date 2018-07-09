import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

const styles = {}

class Sidebar extends React.Component {
  render() {
    return (
      <div style={{width: 200, backgroundColor: "#ccc", flex: "initial"}}>
        Sidebar
      </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar)
