import { useEffect, useState } from 'react';
import $ from 'jquery';
import { render } from 'react-dom';
import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'
import { map } from 'lodash';
import {
  HomeContainer,
  ProjectsContainer,
  AboutContainer
} from '../page-containers';
import handleNavigation from '../utils/handleNavigation';
import './header.less';

const Header = ({ siteTitle, pages, height }) => {
  const [isMobileMenuVisible, setIsMobileMenuVisible] = useState(false);

  const renderPage = (node, label) => {
    let component;
    switch (label) {
      case 'home':
        component = <HomeContainer />;
        break;
      case 'projects':
        component = <ProjectsContainer />;
        break;
      case 'about':
        component = <AboutContainer />;
        break;
      default:
        break;
    }
    return render(component, node);
  }

  const handleRoute = (e, route, label) => {
    e.preventDefault();

    const projectDataUrl = `${window.location.origin}${route}/index.html`;
    
    handleNavigation(route, projectDataUrl, (data) => {
      const main = document.querySelector('main');
      renderPage(main, label);
    });

    $('.pageLink').animate({ opacity: 0 }, 300, () => {
        setIsMobileMenuVisible(false);
    });
  } 

  const renderPages = () => (
    map(pages, (page) => {
        const { label, route } = page;
        return (
          <Link
            className="pageLink"
            key={label}
            to={route}
            onClick={(e) => handleRoute(e, route, label)}
          >
            {label}
          </Link>
        );
      })

  )

  const renderNavBarOptions = () => (
    <div className="navBarOptions">
      {renderPages()}
    </div>
  );

  const renderMenuIcon = () => (
    <div
      className="navMobileButton"
      onClick={() => setIsMobileMenuVisible(!isMobileMenuVisible)}
    >
      <div id="bar1" />
      <div id="bar2" />
      <div id="bar3" />
    </div>
  )

  const renderMobileNavBarOptions = () => (
    <div className={`navMobileBarOptions ${isMobileMenuVisible ? 'expanded' : ''}`}>
      {renderMenuIcon()}
      <div className="navMobileContainer">
        {isMobileMenuVisible && renderPages()}
      </div>
    </div>
  )
    
  return (
    <header style={{ height: !isMobileMenuVisible ? height : 'auto' }}>
      {renderNavBarOptions()}
      {renderMobileNavBarOptions()}
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

export default Header;
