import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import * as Actions from '../redux/actions/actions';
import Header from '../components/Header';
import Footer from '../components/Footer';

class PlaylistDetailView extends Component {

  constructor(props, context) {
    super(props, context);
  }

  render() {
    return (
      <div>
        <Header/>
        <div className="container">
          <div className="single-post post-detail">
            <h3 className="playlist-name">{this.props.playlist.name}</h3>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

PlaylistDetailView.need = [(params) => {
  return Actions.getPlaylistRequest.bind(null, params.slug)();
}];

PlaylistDetailView.contextTypes = {
  router: React.PropTypes.object,
};

// PlaylistDetailView.propTypes = {
//   playlist: PropTypes.shape({
//     name: PropTypes.string.isRequired,
//     //date added??
//     ownerID: PropTypes.string.isRequired,
//     slug: PropTypes.string.isRequired,
//   }).isRequired,
//   dispatch: PropTypes.func.isRequired,
// };

function mapStateToProps(store) {
  return {
    post: (store.post),
  };
}

export default connect(mapStateToProps)(PlaylistDetailView);
