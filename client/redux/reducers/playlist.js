import * as ActionTypes from '../actionTypes';

//TODO: update this later
const initialState = { playlists : [] };

const playlist = (state = initialState, action) => {
    console.log('playlistReducer called');
    switch (action.type) {
        
        case ActionTypes.ADD_PLAYLIST:
            
            return {
                playlists : {
                   [action.playlist.cuid]: action.playlist
                }, 
                    ...state.playlists
            };
        case ActionTypes.ADD_PLAYLISTS:
            var playlists = {};
            action.playlists.forEach(playlist => {
                playlists[playlist.cuid] = playlist;
            })
            return {
                playlists : playlists, 
                    ...state.playlists
            };
        default:
            console.log('hit default case ...: ' + action.type);
            return state;
    }
};

export default playlist;