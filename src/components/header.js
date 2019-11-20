import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'
import { map } from 'lodash';
import './header.css';

const Header = ({ siteTitle, navBar, height }) => {
  const renderNavBarOptions = () => {
    const navBarOptions = map(navBar, (option) => {
      const { label, route } = option;
      return (
        <Link
          to={route}
        >
          {label}
        </Link>
      );
    });
    return (
      <div className="navBarOptions">
        {navBarOptions}
      </div>
    );
  }
    
  return (
    <header
      style={{
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'center',
        height,
      }}
    >
      {renderNavBarOptions()}
    </header>
  );
};

Header.propTypes = {
  siteTitle: PropTypes.string,
  navBar: PropTypes.array,
  height: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
  navBar: [],
  height: '3vh',
}

export default Header
