import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import AppBar from '@material-ui/core/AppBar';
import AccountCircle from '@material-ui/icons/AccountCircle';
import IconButton from '@material-ui/core/IconButton';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';

import UserApi from '../../api/userApi';

const styles = {
  headerContainer: {
    color: "#5995DA",
    backgroundColor: "#D6E9FE",
    display: "flex",
    flexDirection: "row",
    paddingRight: 20,
    paddingLeft: 20,
    justifyContent: "space-between",
    alignItems: "center",
    fontSize: "0.75em"
  }
}

class Header extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      anchorEl: null
    }
    
    this.handleMenuClick = this.handleMenuClick.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }

  handleMenuClick(event) {
    this.setState({ anchorEl: event.currentTarget });
  }

  handleClose() {
    this.setState({ anchorEl: null });
  }

  render() {
    return (
      <AppBar style={styles.headerContainer} position="static">
        <h1>Cryptfolio</h1>
        <IconButton
          aria-owns={open ? 'menu-appbar' : null}
          aria-haspopup="true"
          onClick={this.handleMenuClick}
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        <Menu
          id="menu-appbar"
          anchorEl={this.state.anchorEl}
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          open={!!this.state.anchorEl}
          onClose={this.handleClose}
        >
          <MenuItem onClick={() => this.props.logout(this.props.currentUser.auth_token)}>Sign Out</MenuItem>
        </Menu>
      </AppBar>
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
    logout: UserApi.logout
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)
