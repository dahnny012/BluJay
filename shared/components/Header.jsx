import React, { PropTypes } from 'react';
import { Link } from 'react-router';

function Header(props, context) {
  return (
    <div className="header">
      <div className="header-content">
        <h1 className="site-title">
          <Link to="/">BluJay on MERN</Link>
        </h1>
        {
          context.router.isActive('/', true)
            ? <a className="add-playlist-button" href="#">Add Playlist (removed onclick action)</a>
            : null
        }
      </div>
    </div>
  );
}

Header.contextTypes = {
  router: React.PropTypes.object,
};

Header.propTypes = {
  onClick: PropTypes.func.isRequired,
  handleLogoClick: PropTypes.func,
};

export default Header;