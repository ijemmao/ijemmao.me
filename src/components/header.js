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
import './header.css';

const Header = ({ siteTitle, pages, height }) => {

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
  }

  const renderNavBarOptions = () => (
    <div className="navBarOptions">
      {map(pages, (page) => {
        const { label, route } = page;
        return (
          <Link
            key={label}
            to={route}
            onClick={(e) => handleRoute(e, route, label)}
          >
            {label}
          </Link>
        );
      })
      }
    </div>
);
    
  return (
    <header style={{ height }}>
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
