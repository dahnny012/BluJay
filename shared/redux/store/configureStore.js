//https://github.com/Hashnode/mern-starter/blob/master/shared/redux/store/configureStore.dev.js

import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers/reducer';

export function configureStore(initialState = {}) {
  let enhancerClient;
  if (process.env.CLIENT) {
    enhancerClient = compose(
      applyMiddleware(thunk)
      //window.devToolsExtension ? window.devToolsExtension() : null
      );
  }


  const enhancerServer = applyMiddleware(thunk);

  let store;

  if (process.env.CLIENT) {
    store = createStore(rootReducer, initialState, enhancerClient);
  } else {
    store = createStore(rootReducer, initialState, enhancerServer);
  }

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../reducers/reducer', () => {
      const nextReducer = require('../reducers/reducer').default;
      store.replaceReducer(nextReducer);
    });
  }

  return store;
}