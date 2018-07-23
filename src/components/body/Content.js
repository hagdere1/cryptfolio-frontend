import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Route, Switch, withRouter } from 'react-router-dom';
import Portfolio from '../portfolio/Portfolio';
import Transactions from '../transactions/Transactions';

const styles = {
  container: {
    display: "flex",
    flex: 1,
    flexDirection: "column",
    overflowY: "scroll"
  },
  tabs: {
    display: "flex",
    flexShrink: 0,
    justifyContent: "space-around",
    backgroundColor: "#f0f0f0"
  },
  tab: {
    display: "flex",
    justifyContent: "center",
    width: "50%",
    flexShrink: 0,
    paddingTop: 10,
    paddingBottom: 10,
    alignItems: "center"
  }
}

class Content extends React.Component {
  render() {
    return (
      <div style={styles.container}>
        <div style={styles.tabs}>
          <div className="tab" style={Object.assign({}, styles.tab, {backgroundColor: "#fff", borderRight: "1px solid #bbb"})}>Holdings</div>
          <div className="tab" style={Object.assign({}, styles.tab, {color: "#808080"})}>Performance</div>
        </div>

        <Switch>
          <Route path="/portfolio" component={Portfolio} />
          <Route path="/transactions" component={Transactions} />
        </Switch>
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

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Content))
