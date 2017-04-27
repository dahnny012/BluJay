//All the routes are defined in shared/routes.js. React Router renders components according to route requested.

import { Route, IndexRoute } from 'react-router';
import React from 'react';
import App from './container/App';
import PlaylistContainer from './container/PlaylistContainer';
import PlaylistDetailView from './container/PlaylistDetailView';

//map each route --> container + view
const routes = (
  <Route path="/" component={App} >
    <IndexRoute component={PlaylistContainer} />
    <Route path="/playlist/:slug" component={PlaylistDetailView} />
  </Route>
  
);
//    <Route path="/playlists/:slug" component={PlaylistListView}/>

export default routes;