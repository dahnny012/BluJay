import { Router } from 'express';
import * as HomeController from '../controllers/home.controller';
const router = new Router();

//Get all playlists
router.route('/').get(HomeController.index);
router.route('/playlist/*').get(HomeController.index);


//TODO: CRUD all playlists

export default router;