module.exports = {
  trailingSlash: "never",
  siteMetadata: {
    siteUrl: `http://www.unstacked.net`,
    title: `unstacked.net`,
    description: `unstacked.net is a blog about software development, with a focus on ASP.NET Core, C#, and web development.`,
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
