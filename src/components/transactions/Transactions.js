import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import axios from 'axios';
import { Route } from 'react-router-dom';

import Trades from './Trades';
import Transfers from './Transfers';

const styles = {
  container: {
    display: "flex",
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    overflowY: "scroll"
  }
}

class Transactions extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      transactions: [1, 2, 3, 4, 5]
    }
  }

  render() {
    return (
      <div style={styles.container}>
        <Route path="/transactions/trades" render={(props) => <Trades {...props} data={[]} />} />
        <Route path="/transactions/transfers" render={(props) => <Transfers {...props} data={[]} />} />
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

export default connect(mapStateToProps, mapDispatchToProps)(Transactions)
