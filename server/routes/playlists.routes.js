import { Router } from 'express';
import * as PlaylistController from '../controllers/playlist.controller';
const router = new Router();

//Get all playlists
router.route('/getPlaylists').get(PlaylistController.getPlaylists);

//Get one playlist by cuid
router.route('/getPlaylist/:id').get(PlaylistController.getPlaylist);


//TODO: CRUD all playlists

export default router;