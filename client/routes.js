//All the routes are defined in shared/routes.js. React Router renders components according to route requested.

import { Route, IndexRoute } from 'react-router';
import React from 'react';
import App from './container/App';
import PlaylistContainer from './container/PlaylistContainer';  
import PlaylistDetailViewContainer from './container/PlaylistDetailViewContainer';
import Foo from './components/Foo';

//map each route --> container + view
const routes = (
  <Route path="/">
    <IndexRoute component={App} />
    <Route path="playlist/:slug" component={PlaylistDetailViewContainer} />
    <Route path="foo" component={Foo} />
  </Route>
  
);
//    <Route path="/playlists/:slug" component={PlaylistListView}/>

export default routes;