import React from 'react';
import { Link } from 'gatsby';
import { categories } from '../utils/constants/projectCategories';
import { map } from 'lodash';
import './sidebar.css';

const Sidebar = () => (
  <div className="sidebarContainer">
      {map(categories, (category) => {
        const { label, route } = category;
        return <Link className="sidebarLink" to={route}>{label}</Link>;
      })}
  </div>
);

export default Sidebar; 
