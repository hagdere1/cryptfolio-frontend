import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import axios from 'axios';
import PieChart from './PieChart';

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

class Holdings extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      holdings: {},
      pieData: []
    }
  }

  componentDidMount() {
    axios.get("http://localhost:3000/api/v1/portfolio", { headers: {'Authorization': 'Token token=' + this.props.currentUser.auth_token} }).then(response => {
      let pieData = [];
      for (let id of Object.keys(response.data.data.holdings)) {
        let holding = response.data.data.holdings[id];

        pieData.push({
          name: holding.coin,
          y: holding.quantity * holding.price
        });
      }

      this.setState({holdings: response.data.data.holdings, pieData: pieData});
    });
  }

  render() {
    return (
      <div style={styles.container}>
        <PieChart data={this.state.pieData} />
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
