// hooks everything up
import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import PlaylistContainer from './PlaylistContainer';
import Header from '../components/Header';
import Footer from '../components/Footer';

class App extends Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    return (
      <div>
        <Header />
          <PlaylistContainer/>
        <Footer />
      </div>
    );
  }
}

/*
App.propTypes = {
  children: PropTypes.object.isRequired,
};*/

export default connect()(App);