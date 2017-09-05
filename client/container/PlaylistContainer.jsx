import React, { PropTypes, Component } from 'react';
import PlaylistListView from './PlaylistListView';
import { connect } from 'react-redux';
import * as Actions from '../redux/actions/actions';

class PlaylistContainer extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            showAddPlaylist : true //figure out wtf this is for
        };
        //this.handleClick = this.handleClick.bind(this);
        //this.add = this.add.bind(this);
    }
    
    handleClick(e) {
        this.setState({
            showAddPlaylist : !this.state.showAddPlaylist
        });
        e.preventDefault();
    }
    
    
    //add(name, title, blah)
    
    componentWillMount() {
        if(Object.keys(this.props.playlists).length === 0){
            console.log('componentDidMount() in playlistcontainer');
            this.props.dispatch(Actions.fetchPlaylists());
        }
    }
    
    render() {
        return (
            <div>
                <div className="container">
                    <PlaylistListView playlists={this.props.playlists} />
                </div>
            </div>
        );
    }
    
    
}

PlaylistContainer.need = [ () => { return Actions.fetchPlaylists(); }];
PlaylistContainer.contextTypes = {
    router : React.PropTypes.object,
};

function mapStateToProps(store) {
    return {
        playlists: store.playlists
    };
}

//Since react reads propTypes 
PlaylistContainer.PropTypes = {
  playlists: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    dateAdded: PropTypes.instanceOf(Date).isRequired,
    ownerID: PropTypes.string.isRequired,
  })).isRequired,
  dispatch: PropTypes.func.isRequired,
};


export default connect(mapStateToProps)(PlaylistContainer);