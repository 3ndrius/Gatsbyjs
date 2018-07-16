module.exports = {
  siteMetadata: {
    title: 'Gatsby Wordpress',
    subtitle: `Fetch data from my wp-site`,
  },
  plugins: [
    'gatsby-plugin-react-helmet',
 
    {
      resolve: `gatsby-source-wordpress`,
      options: {
      

        baseUrl: `apiwordpress.cba.pl`,
      
        protocol: `http`,
       
        hostingWPCOM: false,
     
      },
    },
  ],
}