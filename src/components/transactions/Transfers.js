import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import axios from 'axios';

class Transfers extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      transfers: []
    }
  }

  componentDidMount() {
    axios.get("http://localhost:3000/api/v1/transfers", { headers: {'Authorization': 'Token token=' + this.props.currentUser.auth_token} }).then(response => {
      // let pieData = [];
      // for (let id of Object.keys(response.data.data.holdings)) {
      //   let holding = response.data.data.holdings[id];
      //
      //   pieData.push({
      //     name: holding.coin,
      //     y: holding.quantity * holding.price
      //   });
      // }
debugger
      this.setState({transfers: response.data.data});
    });
  }

  render() {
    return (
      <article>
        TRANSFERS
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

export default connect(mapStateToProps, mapDispatchToProps)(Transfers);
