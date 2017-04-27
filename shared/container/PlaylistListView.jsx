import React, { PropTypes } from 'react';
//import PostListItem from '../../components/PostListItem/PostListItem';
import { connect } from 'react-redux';
import * as Actions from '../redux/actions/actions';

function PlaylistListView(props) {
  return (
    <div className="listView">
      {
        props.playlists.map((playlist, i) => (
          <h1> Playlist {playlist.name} --- {playlist.dateAdded} </h1>
        ))
      }
    </div>
  );
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

export default connect()(PlaylistListView);