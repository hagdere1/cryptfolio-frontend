import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import axios from 'axios';
import Holdings from './Holdings';

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

class Portfolio extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      holdings: {},
      pieData: []
    }
  }

  componentDidMount() {
    // axios.get("http://localhost:3000/api/v1/portfolio", { headers: {'Authorization': 'Token token=' + this.props.currentUser.auth_token} }).then(response => {
    //   let pieData = [];
    //   for (let id of Object.keys(response.data.data.holdings)) {
    //     let holding = response.data.data.holdings[id];
    //
    //     pieData.push({
    //       name: holding.coin,
    //       y: holding.quantity * holding.price
    //     });
    //   }
    //
    //   this.setState({holdings: response.data.data.holdings, pieData: pieData});
    // });
  }

  render() {
    return (
      <div style={styles.container}>
        PORTFOLIO
        {/*<Holdings data={this.state.pieData} />*/}
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

export default connect(mapStateToProps, mapDispatchToProps)(Portfolio)
