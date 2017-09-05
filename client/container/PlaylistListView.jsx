import React, { PropTypes } from 'react';
import * as Actions from '../redux/actions/actions';

function PlaylistListView(props) {
  if(Object.keys(props.playlists).length === 0){
    return null;
  }else {
    var playlists = []
    for (let [k, v] of Object.entries(props.playlists)) {
        var playlist = props.playlists[k];
        playlists.push((
            <div className="list-group">
              <a href="#" className="list-group-item active">
                <h4 className="list-group-item-heading">{playlist.name} </h4>
                <p className="list-group-item-text"> {playlist.dateAdded}</p>
              </a>
            </div>
        ));
    }
    return (<div className="listView">{playlists}</div>);
  }
}

//http://wecodetheweb.com/2015/06/02/why-react-proptypes-are-important/
// PlaylistListView.propTypes = {
//   playlists: PropTypes.arrayOf(PropTypes.shape({
//     name: PropTypes.string.isRequired,
//     //date added??
//     ownerID: PropTypes.string.isRequired,
//   })).isRequired,
//   dispatch: PropTypes.func.isRequired,
// };

export default PlaylistListView