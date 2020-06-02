import React, {Fragment} from 'react';
import {Provider} from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux'
import reducers from './src/redux/reducers';
import logger from 'redux-logger';
import saga from './src/redux/saga';
import createSagaMiddleware from 'redux-saga';
import Navigation from './src/navigation/navigation';

export default class App extends React.Component {

  render() {
    const configureStore = () => {
      const sagaMiddleware = createSagaMiddleware();
      const store = createStore(reducers, compose(applyMiddleware(logger, sagaMiddleware)));
      sagaMiddleware.run(saga);
      return store;
    };
    const store = configureStore();
    return (
        <Fragment>
          <Provider store={store}>
            <Navigation  />
          </Provider>
        </Fragment>
    );
  }


}
