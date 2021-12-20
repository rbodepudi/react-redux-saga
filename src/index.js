import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import './index.css';
import App from './Components/App';
import reducer from './Reducers/reducer'
import projectsSaga from './Sagas/saga'


const sagaMiddleware = createSagaMiddleware()
let store = createStore(reducer, applyMiddleware(sagaMiddleware))

sagaMiddleware.run(projectsSaga)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);



