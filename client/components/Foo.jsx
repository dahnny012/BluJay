import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import * as Actions from '../redux/actions/actions';
import Header from './Header';
import Footer from './Footer';

class Foo extends Component {

  constructor(props, context) {
    super(props, context);
  }

  render() {
    return (
      <div>
        <Header/>
        <div className="container">
            I AM FOO
        </div>
        <Footer />
      </div>
    );
  }
}

Foo.need = [(params) => {
  return Actions.getPlaylistRequest.bind(null, params.slug)();
}];

Foo.contextTypes = {
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

export default connect(mapStateToProps)(Foo);
