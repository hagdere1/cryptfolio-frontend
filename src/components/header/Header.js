import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import AccountCircle from '@material-ui/icons/AccountCircle';
import IconButton from '@material-ui/core/IconButton';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';

const styles = {
  menuContainer: {
    color: "#fff",
    backgroundColor: "#5995da",
    padding: "20px 0",
    display: "flex",
    justifyContent: "center",

  },
  menu: {
    display: "flex",
    justifyContent: "space-between"
  },
  links: {
    display: "flex",
    justifyContent: "center"
  },
  loginLink: {
    marginLeft: 10
  },
  headerContainer: {
    color: "#5995DA",
    backgroundColor: "#D6E9FE",
    display: "flex",
    justifyContent: "center"
  },
  header: {
    width: "90%",
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center"
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
      <div style={styles.headerContainer} className='header-container'>
        <div style={styles.header}>
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
            <MenuItem>Sign Out</MenuItem>
          </Menu>
        </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(Header)
