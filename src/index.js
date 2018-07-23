import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createBrowserHistory } from 'history';
import { Route, Switch, withRouter } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router'
import { configureStore } from './store/configureStore';
import './styles/app.scss';
import App from './components/App';
import Portfolio from './components/portfolio/Portfolio';
import Transactions from './components/transactions/Transactions';
import Login from './components/login/Login';
import Container from './components/Container';

let history = createBrowserHistory();
let store = configureStore(history);

// let routes = (
//   <Route component={Container}>
//     <Route path="/portfolio" component={Portfolio} />
//     <Route path="/transactions" component={Transactions} />
//   </Route>
// );

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Container/>
    </ConnectedRouter>
  </Provider>,
  document.getElementById("app")
);
