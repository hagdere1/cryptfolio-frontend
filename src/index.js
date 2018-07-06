import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {store} from './store/configureStore';
import './styles/app.scss';
import Container from './container';

ReactDOM.render(
  <Provider store={store}>
    <Container />
  </Provider>,
  document.getElementById("app")
);
