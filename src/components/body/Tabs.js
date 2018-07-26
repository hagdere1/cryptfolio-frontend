import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Route, Switch, withRouter } from 'react-router-dom';
import styled from 'styled-components';

const StyledTabs = styled.ul`
  display: flex;
  flex-shrink: 0;
  justify-content: space-around;
  background-color: #f0f0f0;
`
const Tab = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${props => props.selected ? "#fff" : "#f0f0f0"};
  color: ${props => props.selected ? "#000" : "#808080"};
  width: ${props => props.width + "%"};
  flex-shrink: 0;
  padding-top: 10px;
  padding-bottom: 10px;
  border-right: 1px solid #bbb;
  cursor: pointer;

  &:last-child {
    border-right: 0;
  }
`

const Tabs = (props) => (
  <nav>
    <StyledTabs>
      {props.tabs ?
        props.tabs.map((tab, idx) => <Tab key={idx}
                                          width={100 / props.tabs.length}
                                          selected={props.location.pathname === tab.path}
                                          onClick={() => props.history.push(tab.path)}
                                     >
                                       {tab.name}
                                     </Tab>) : <li></li>}
    </StyledTabs>
  </nav>
);

// const mapStateToProps = (state) => {
//   return {
//     pathname: state.router.location.pathname
//   }
// }

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({}, dispatch);
}

export default withRouter(Tabs)
