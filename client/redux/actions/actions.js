//TODO: Add CRUD actions

import * as ActionTypes from '../actionTypes';
import Config from '../../../server/config';
import fetch from 'isomorphic-fetch';

const baseURL = typeof window === 'undefined' ? process.env.BASE_URL || (`http://localhost:${Config.port}`) : '';

export function fetchPlaylists() {
    return (dispatch) => {
        return fetch(`${baseURL}/api/getPlaylists`).
            then((response) => response.json()).
            then((response) => dispatch(addPlaylists(response.playlists)));
    };
}

export function fetchPlaylist(id) {
    return (dispatch) => {
        return fetch(`${baseURL}/api/getPlaylist/${id}`).
            then((response) => response.json()).
            then((response) => dispatch(addPlaylist(response.playlist)));
    };
}

export function addPlaylists(playlists) {
    return {
        type : ActionTypes.ADD_PLAYLISTS,
        playlists
    };
}

export function addPlaylist(playlist) {
    return {
        type : ActionTypes.ADD_PLAYLIST,
        playlist
    };
}