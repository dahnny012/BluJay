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
            <ul>
              {this.props.playlist.songs.map(item => {
                return (<li>{item}</li>)
              })}
            </ul>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default PlaylistDetailView
