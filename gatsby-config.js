module.exports = {
  siteMetadata: {
    title: 'Design+Code 3',
    description: 'Code React stuff. Mainly for designers.',
    keywords: 'react course, react for designer, '
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/images/gatsby-icon.png', // This path is relative to the root of the site.
      },
    },
    {
      resolve: 'gatsby-source-contentful',
      options: {
        spaceId: 'bzeru68yquru',
        accessToken: 'f402b30640b2bb032bc72c4d8909b2dabbeac3ca573a27281ec1e0aed1babd45'
      }

    },
    'gatsby-plugin-offline',
  ],
}
