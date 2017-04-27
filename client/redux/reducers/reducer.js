import * as ActionTypes from '../actionTypes';

//TODO: update this later
const initialState = { playlists : [], playlist : null };

const playlistReducer = (state = initialState, action) => {
    console.log('playlistReducer called');
    switch (action.type) {
        
        case ActionTypes.ADD_PLAYLIST:
            return {
                playlists : [
                    {
                        name : action.name,
                        dateAdded: action.dateAdded,
                        ownerID: action.ownerID,
                        songs : action.songs
                    }, ...state.playlists //this is spreading ...lol: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_operator
                    ],
                playlist : state.playlist
            };
        
        case ActionTypes.ADD_PLAYLISTS :
            return {
                playlists: action.playlists,
                playlist: state.playlist,
            };
        
        default:
            console.log('hit default case ...: ' + action.type);
            return state;
    }
};

export default playlistReducer;