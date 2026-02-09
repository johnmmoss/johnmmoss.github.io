const path = require("path");
const _ = require("lodash");

exports.createPages = async ({ actions, graphql }) => {
  const { createPage } = actions;

  const tagTemplate = path.resolve("src/templates/categories.js");

  const result = await graphql(`
    {
      tagsGroup: allMdx(limit: 2000) {
        group(field: frontmatter___tags) {
          fieldValue
        }
      }
    }
  `);

  // Extract tag data from query
  const tags = result.data.tagsGroup.group;

  // Make tag pages
  tags.forEach((tag) => {
    createPage({
      path: `/tags/${_.kebabCase(tag.fieldValue)}/`,
      component: tagTemplate,
      context: {
        tag: tag.fieldValue,
      },
    });
  });
};
