const pages = require('./src/utils/constants/navbar');

exports.createPages = ({ actions }) => {
  const { createPage } = actions;

  pages.forEach(page => {
    const { label, route } = page; 
    createPage({
      path: route,
      component: require.resolve(`./src/pages/${label}.js`),
      context: { page },
    });
  });
}
