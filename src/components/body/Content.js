import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Route, Switch, Redirect, withRouter } from 'react-router-dom';
import styled from 'styled-components';

import Tabs from './Tabs';
import Portfolio from '../portfolio/Portfolio';
import Transactions from '../transactions/Transactions';

const StyledContent = styled.aside`
  display: flex;
  flex: 1;
  flex-direction: column;
  overflow-y: scroll;
`

class Content extends React.Component {
  render() {
    const tabs = {
      portfolio: [
        {name: "Holdings", path: "/portfolio/holdings"},
        {name: "Performance", path: "/portfolio/performance"},
        {name: "Fake tab", path: "/portfolio/fake"}
      ],
      transactions: [
        {name: "Trades", path: "/transactions/trades"},
        {name: "Transfers", path: "/transactions/transfers"}
      ]
    };
    const pathStart = this.props.location.pathname.split("/")[1];

    return (
      <StyledContent>
        <Tabs tabs={tabs[pathStart]} />

        <Redirect from="/" to="/portfolio/holdings" />
        <Route path="/portfolio" component={Portfolio} />
        <Route path="/transactions" component={Transactions} />
      </StyledContent>
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
