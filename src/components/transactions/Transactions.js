import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import axios from 'axios';

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
        TRANSACTIONS
        {/*this.state.transactions.map(transaction => <p>{transaction}</p>)*/}
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
