import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import Sidebar from './Sidebar';
import Content from './Content';

const styles = {}

class Body extends React.Component {
  render() {
    return (
      <div style={{display: "flex", flex: 1, alignItems: "stretch"}}>
        <Sidebar />
        <Content />
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

export default connect(mapStateToProps, mapDispatchToProps)(Body)
