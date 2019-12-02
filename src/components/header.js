import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'
import { map } from 'lodash';
import './header.css';

const Header = ({ siteTitle, pages, height }) => {
  const renderNavBarOptions = () => (
    <div className="navBarOptions">
      {map(pages, (page) => {
        const { label, route } = page;
        return (
          <Link
            to={route}
          >
            {label}
          </Link>
        );
      })
      }
    </div>
);
    
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
  pages: PropTypes.array,
  height: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
  pages: [],
  height: '3vh',
}

export default Header
