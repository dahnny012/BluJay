import React, { PropTypes, Component } from 'react';
import PlaylistDetailView from './PlaylistDetailView';
import { connect } from 'react-redux';
import * as Actions from '../redux/actions/actions';

class PlaylistDetailViewContainer extends Component {
    constructor(props, context) {
        super(props, context);
    }
    
    //add(name, title, blah)
    
    componentWillMount() {
        if(this.props.playlists[this.props.routeParams.slug] == undefined) {
            console.log('componentDidMount() in playlistcontainer');
            this.props.dispatch(Actions.fetchPlaylist(this.props.routeParams.slug));
        }
    }
    
    render() {
        if (this.props.playlists[this.props.routeParams.slug]) {
            return (
                <div>
                    <div className="container">
                        <PlaylistDetailView playlist={this.props.playlists[this.props.routeParams.slug]} />
                    </div>
                </div>
            );
        }
        else{
            return (<div>Loading</div>)
        }
    }
    
    
}

PlaylistDetailViewContainer.need = [ () => { return Actions.fetchPlaylists(); }];
PlaylistDetailViewContainer.contextTypes = {
    router : React.PropTypes.object,
};

function mapStateToProps(store) {
    return {
        playlists: store.playlists
    };
}

//Since react reads propTypes 
PlaylistDetailViewContainer.PropTypes = {
  playlists: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    dateAdded: PropTypes.instanceOf(Date).isRequired,
    ownerID: PropTypes.string.isRequired,
  })).isRequired,
  dispatch: PropTypes.func.isRequired,
};


export default connect(mapStateToProps)(PlaylistDetailViewContainer);