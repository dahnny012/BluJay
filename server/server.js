// lol so much from https://github.com/Hashnode/mern-starter/blob/master/server/server.js

import Express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import path from 'path';

// Webpack Requirements
import webpack from 'webpack';
import config from '../webpack.config.dev';

// Initialize the Express App
const app = new Express();

if (process.env.NODE_ENV !== 'production') {
  console.log("not prod");
  const compiler = webpack(config);
}


import playlists from './routes/playlists.routes';
import home from './routes/home.routes';
import serverConfig from './config';

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
app.use('/', home);

/*
const renderError = err => {
  const softTab = '&#32;&#32;&#32;&#32;';
  const errTrace = process.env.NODE_ENV !== 'production' ?
    `:<br><br><pre style="color:red">${softTab}${err.stack.replace(/\n/g, `<br>${softTab}`)}</pre>` : '';
  return renderFullPage(`Server Error${errTrace}`, {});
};
*/

// start the app 
app.listen(serverConfig.port, (error) => {
  if(!error) {
    console.log(`BluJay started on port: ${serverConfig.port}, and Mongo is at ${serverConfig.mongoURL} `);
  }
});

export default app;