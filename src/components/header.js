import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { map } from 'lodash';

const Header = ({ siteTitle, navBar }) => {
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
        marginBottom: `1.45rem`,
        display: 'flex',
        padding: '20px',
        justifyContent: 'flex-end',
        alignItems: 'center',
      }}
    >
      {renderNavBarOptions()}
    </header>
  );
};

Header.propTypes = {
  siteTitle: PropTypes.string,
  navBar: PropTypes.array,
}

Header.defaultProps = {
  siteTitle: ``,
  navBar: [],
}

export default Header
