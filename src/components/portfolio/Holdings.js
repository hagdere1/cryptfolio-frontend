import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import axios from 'axios';

const styles = {
  container: {
    display: "flex",
    flex: 1,
    flexDirection: "column",
    overflowY: "scroll"
  }
}

class Holdings extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      holdings: {}
    }
  }

  componentDidMount() {
    axios.get("http://localhost:3000/api/v1/portfolio", { headers: {'Authorization': 'Token token=' + this.props.currentUser.auth_token} }).then(response => {
      this.setState({holdings: response.data.data.holdings});
    });
  }

  render() {
    return (
      <div style={styles.container}>
        {Object.keys(this.state.holdings).map(id => {
          return (
            <div key={id}>
              <p>Coin ID: {this.state.holdings[id].coin_id}</p>
              <p>Quantity: {this.state.holdings[id].quantity}</p>
              <p>Price: {this.state.holdings[id].price}</p>
            </div>
          );
        })}
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
