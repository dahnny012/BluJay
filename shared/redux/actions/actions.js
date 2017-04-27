//TODO: Add CRUD actions

import * as ActionTypes from '../actionTypes';
import Config from '../../../server/config';
import fetch from 'isomorphic-fetch';

const baseURL = typeof window === 'undefined' ? process.env.BASE_URL || (`http://localhost:${Config.port}`) : '';

export function fetchPlaylists() {
    console.log('fetching playlists in actions.js');
    return (dispatch) => {
        return fetch(`${baseURL}/api/getPlaylists`).
            then((response) => response.json()).
            then((response) => dispatch(addPlaylists(response.playlists)));
    };
}

export function addPlaylists(playlists) {
    console.log('addPlaylists() called');
    return {
        type : ActionTypes.ADD_PLAYLISTS,
        playlists
    };
}