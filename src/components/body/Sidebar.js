import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { routerMiddleware } from 'connected-react-router';
import styled from 'styled-components';

const StyledSidebar = styled.aside`
  width: 200px;
  background-color: #ccc;
  flex: initial;
  display: flex;
  flex-direction: column;
  justify-content: center;
`
const Tab = styled.div`
  color: ${props => props.selected ? "#000" : "#808080"};
  padding: 20px 10px;
  border-bottom: 1px solid #aaa;
  background-color: ${props => props.selected ? "#d6e9fe": "#f0f0f0"};

  &:first-child {
    border-top: 1px solid #aaa;
  }
`

class Sidebar extends React.Component {
  render() {
    return (
      <StyledSidebar>
        <Tab selected={this.props.pathname.indexOf("/portfolio") !== -1} onClick={() => this.props.history.push("/portfolio/holdings")}>
          Portfolio
        </Tab>
        <Tab selected={this.props.pathname.indexOf("/transactions") !== -1} onClick={() => this.props.history.push("/transactions")}>
          Transactions
        </Tab>
        <Tab>
          Market
        </Tab>
      </StyledSidebar>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    pathname: state.router.location.pathname
  }
}

export default withRouter(connect(mapStateToProps, null)(Sidebar))
