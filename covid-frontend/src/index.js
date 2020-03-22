import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';
import { createStore, applyMiddleware } from 'redux';


import history from './history';
import Routes from './routes';
import rootReducer from './store/reducers';
import rootSaga from './store/sagas';

import { I18nextProvider } from "react-i18next";
import i18n from "./i18n";

import './assets/styles/global.scss';


console.log('%c env: ', 'color: #bada55', process.env.REACT_APP_ENV);


const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  rootReducer,
  composeWithDevTools(
    applyMiddleware(sagaMiddleware)
  )
);

sagaMiddleware.run(rootSaga);

ReactDOM.render(
  <I18nextProvider i18n={i18n}>
    <Provider store={store}>
      <Router history={history}>
        <Routes />
      </Router>
    </Provider>
  </I18nextProvider>,
  document.getElementById('root')
);
