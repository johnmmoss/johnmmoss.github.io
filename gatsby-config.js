module.exports = {
  trailingSlash: "never",
  siteMetadata: {
    siteUrl: `http://johnmmoss.github.io`,
    title: `Tech Notes - johnmmoss`,
    description: `John's tech notes`,
  },
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: `articles`,
        path: `${__dirname}/articles`,
      },
    },
    "gatsby-transformer-sharp",
    "gatsby-remark-images",
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 1200,
            },
          },
        ],
      },
    },
    "gatsby-plugin-react-helmet",
  ],
};
