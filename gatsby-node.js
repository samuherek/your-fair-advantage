const path = require(`path`);

exports.createPages = ({ graphql, boundActionCreators }) => {
  const { createPage } = boundActionCreators;

  const loadPosts = new Promise((resolve, reject) => {
    graphql(`
      {
        allContentfulPost {
          edges {
            node {
              slug
            }
          }
        }
      }
    `).then(result => {
      if (result.errors) {
        reject(result.errors);
      }
      result.data.allContentfulPost.edges.map(({ node }) => {
        createPage({
          path: `${node.slug}/`,
          component: path.resolve(`./src/templates/post.js`),
          context: {
            slug: node.slug
          }
        });
      });
      resolve();
    });
  });

  const loadVlogs = new Promise((resolve, reject) => {
    graphql(`
      {
        allContentfulVlog {
          edges {
            node {
              slug
            }
          }
        }
      }
    `).then(result => {
      if (result.errors) {
        reject(result.errors);
      }
      result.data.allContentfulVlog.edges.map(({ node }) => {
        createPage({
          path: `vlog/${node.slug}/`,
          component: path.resolve(`./src/templates/vlog.js`),
          context: {
            slug: node.slug
          }
        });
      });
      resolve();
    });
  });

  const loadPages = new Promise((resolve, reject) => {
    graphql(`
      {
        allContentfulPage {
          edges {
            node {
              slug
            }
          }
        }
      }
    `).then(result => {
      if (result.errors) {
        reject(result.errors);
      }
      result.data.allContentfulPage.edges.map(({ node }) => {
        createPage({
          path: `${node.slug}/`,
          component: path.resolve(`./src/templates/page.js`),
          context: {
            slug: node.slug
          }
        });
      });
      resolve();
    });
  });

  const loadTags = new Promise((resolve, reject) => {
    graphql(`
      {
        allContentfulTag {
          edges {
            node {
              slug
            }
          }
        }
      }
    `).then(result => {
      if (result.errors) {
        reject(result.errors);
      }
      result.data.allContentfulTag.edges.map(({ node }) => {
        createPage({
          path: `tag/${node.slug}/`,
          component: path.resolve(`./src/templates/tag.js`),
          context: {
            slug: node.slug
          }
        });
      });
      resolve();
    });
  });

  return Promise.all([loadPosts, loadVlogs, loadPages, loadTags]);
};
