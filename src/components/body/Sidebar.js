import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { routerMiddleware } from 'connected-react-router';

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
  constructor(props) {
    super(props);
    this.changeTab = this.changeTab.bind(this);
  }

  changeTab(path) {
    this.props.history.push(path);
  }

  render() {
    return (
      <div style={styles.container}>
        <div style={Object.assign({}, styles.tab, {borderTop: "1px solid #aaa", color: "#000", backgroundColor: "#D6E9FE"})} onClick={() => this.changeTab("/portfolio")}>Portfolio</div>
        <div style={styles.tab} onClick={() => this.changeTab("/transactions")}>Transactions</div>
        <div style={styles.tab}>Market</div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    pathname: state.router.location.pathname
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
  }, dispatch);
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Sidebar))
