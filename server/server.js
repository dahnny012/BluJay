// lol so much from https://github.com/Hashnode/mern-starter/blob/master/server/server.js

import Express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import path from 'path';

// Webpack Requirements
import webpack from 'webpack';
import config from '../webpack.config.dev';


process.on('uncaughtException', function(err) {
  console.log(err.stack);
  throw err;
});

// Initialize the Express App
const app = new Express();

if (process.env.NODE_ENV !== 'production') {
  console.log("not prod");
  const compiler = webpack(config);
}

import { configureStore } from '../shared/redux/store/configureStore';
import { renderToString } from 'react-dom/server';
import { match, RouterContext } from 'react-router';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, browserHistory,hashHistory, StaticRouter } from 'react-router'
import { React } from 'react';


// Import required modules
import routes from '../shared/routes';
import { fetchComponentData } from './utils/fetchData';
import playlists from './routes/playlists.routes';
import serverConfig from './config';
import App from '../shared/container/App';

import dummyData from './dummyData';

// MongoDB Connection
mongoose.connect(serverConfig.mongoURL, (error) => {
  if (error) {
    console.error('Please make sure Mongodb is installed and running!'); // eslint-disable-line no-console
    throw error;
  }

  // feed some dummy data in DB if nothing in mongo.
  dummyData();
});


// Apply body Parser and server public assets and routes
app.use(bodyParser.json({ limit: '20mb' }));
app.use(bodyParser.urlencoded({ limit: '20mb', extended: false }));
app.use(Express.static(path.resolve(__dirname, '../static')));

app.use('/api', playlists);

//Initial HTML, yay arrow functions
const renderFullPage = (html, initialState) => {
    const cssPath = process.env.NODE_ENV === 'production' ? '/css/app.min.css' : '/css/app.css';
    return `
    <!doctype html>
    <html>
      <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>BluJay App</title>
        <link rel="stylesheet" href=${cssPath} />
        <link href='https://fonts.googleapis.com/css?family=Lato:400,300,700' rel='stylesheet' type='text/css'/>
      </head>
      <body>
        <div id="root">${html}</div>
        <script>
          window.__INITIAL_STATE__ = ${JSON.stringify(initialState)};
        </script>
      </body>
    </html>
    `; //webpack bundles generated js files to /dist/bundle.js
};

const renderError = err => {
  const softTab = '&#32;&#32;&#32;&#32;';
  const errTrace = process.env.NODE_ENV !== 'production' ?
    `:<br><br><pre style="color:red">${softTab}${err.stack.replace(/\n/g, `<br>${softTab}`)}</pre>` : '';
  return renderFullPage(`Server Error${errTrace}`, {});
};

// Server-side rendering 
app.use( (req, res, next) => {
    match({routes, location : req.url }, (err, redirectLocation, renderProps) => {
        if(err) {
            return res.status(500).end(renderError(err));
        }
        if(redirectLocation) {
          console.log('redir');
            return res.redirect(302, redirectLocation.pathname + redirectLocation.search);
        }
        if(!renderProps) {
          console.log('!renderops');
            return next();
        }
        console.log('gonna configureStore');
        //Initial State, modify this later
        const initialState = { playlists: [], playlist : {}};
        const store = configureStore(initialState);
        console.log('gonna fetchComponentData');
        return fetchComponentData(store, renderProps.components, renderProps.params)
          .then( () => {
              console.log("fetched component data");
              //lol anonymous functions
              debugger;
              var initialView;
              try {
              initialView = renderToString(
                        <Provider store={store}>
              
              <RouterContext {...renderProps}/>
              
    </Provider> 
              );
              
              } catch (e) {
                console.log(e.stack);
              }
              
              
              const finalState = store.getState();
              res.status(200).end(renderFullPage(initialView, finalState));
          },(e) => {
              console.log(e.stack)
          })
    });
});

// start the app 
app.listen(serverConfig.port, (error) => {
  if(!error) {
    console.log(`BluJay started on port: ${serverConfig.port}, and Mongo is at ${serverConfig.mongoURL} `);
  }
});

export default app;