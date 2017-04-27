import React, { PropTypes } from 'react';
import { Link } from 'react-router';

function Header(props, context) {
  return (
<nav className="navbar navbar-default">
  <div className="container-fluid">
    <div className="navbar-header">
      <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
        <span className="sr-only">Toggle navigation</span>
        <span className="icon-bar"></span>
        <span className="icon-bar"></span>
        <span className="icon-bar"></span>
      </button>
      <a className="navbar-brand" href="#">BluJay On MERN</a>
    </div>
    <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
      <ul className="nav navbar-nav">
      </ul>
    </div>
  </div>
</nav>
)
}

Header.contextTypes = {
  router: React.PropTypes.object,
};

Header.propTypes = {
  onClick: PropTypes.func.isRequired,
  handleLogoClick: PropTypes.func,
};

export default Header;