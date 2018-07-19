import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

const styles = {
  container: {
    width: 200,
    backgroundColor: "#ccc",
    flex: "initial",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center"
  },
  tab: {
    color: "#808080",
    backgroundColor: "#fff",
    padding: "20px 10px",
    borderBottom: "1px solid #aaa",
    backgroundColor: "#f0f0f0"
  }
}

class Sidebar extends React.Component {
  render() {
    return (
      <div style={styles.container}>
        <div style={Object.assign({}, styles.tab, {borderTop: "1px solid #aaa", color: "#000"})}>Portfolio</div>
        <div style={styles.tab}>Transactions</div>
        <div style={styles.tab}>Market</div>
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
