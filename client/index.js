import { React } from 'react';
import routes from './routes';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Router, hashHistory } from 'react-router';
import { configureStore } from './redux/store/configureStore';

const store = configureStore(window.__INITIAL_STATE__);
const history = hashHistory;
const dest = document.getElementById('root');

let toRender;

if (process.env.CLIENT) {
  toRender = (<Provider store={store}>
                <div>
                  <Router history={history} routes={routes} />
                </div>
              </Provider>);
} else {
  toRender = (<Provider store={store}>
                <Router history={history} routes={routes} />
              </Provider>);
}

render(toRender, dest);