require(`dotenv`).config({
  path: `.env`,
});
const newsletterFeed = require(`./src/@lekoarts/gatsby-theme-minimal-blog/utils/newsletterFeed`);
const shouldAnalyseBundle = process.env.ANALYSE_BUNDLE;

module.exports = {
  siteMetadata: {
    siteTitle: "Kaan Uzdoğan",
    siteTitleAlt: `Kaan Uzdoğan - Personal Site`,
    siteHeadline: "Kaan Uzdoğan - Personal Site",
    siteUrl: `https://kaanuzdogan.com`,
    author: `@kaanuzdogan`,
    siteLanguage: "en",
    siteImage: "/banner.jpg",
    siteDescription: "Personal Blog and Website of Kaan Uzdogan",
  },
  plugins: [
    {
      resolve: `gatsby-plugin-umami`,
      options: {
        websiteId: "8d979d6a-1b2d-40ac-a122-11ea5bade564",
        srcUrl: "https://cloud.umami.is/script.js",
        includeInDevelopment: false,
        autoTrack: true,
        respectDoNotTrack: true,
        dataCache: false,
        dataDomains: "kaanuzdogan.com",
      },
    },
    {
      resolve: `@lekoarts/gatsby-theme-minimal-blog`,
      // See the theme's README for all available options
      options: {
        mdx: false, // Config .mdx .md below in gatsby-plugin-mdx
        feedTitle: "Kaan Uzdoğan's Personal Site",
        navigation: [
          {
            title: `Blog`,
            slug: `/blog`,
          },
          {
            title: `About`,
            slug: `/about`,
          },
        ],
        externalLinks: [
          {
            name: `Twitter`,
            url: `https://twitter.com/kaanuzdogan`,
          },
          {
            name: `Instagram`,
            url: `https://www.instagram.com/kuzdogan`,
          },
          {
            name: `Github`,
            url: `https://github.com/kuzdogan`,
          },
        ],
        formatString: "DD MMMM YYYY",
      },
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [`.mdx`, `.md`],
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 960,
              backgroundColor: "transparent",
              quality: 100,
              // wrapperStyle: "max-height: 450px",
              linkImagesToOriginal: true,
            },
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-feed`,
      options: newsletterFeed("Kaan Uzdoğan's Personal Site"),
    },
    {
      resolve: `gatsby-plugin-disqus`,
      options: {
        shortname: process.env.DISQUS_SHORTNAME,
      },
    },
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        trackingIds: [
          process.env.GOOGLE_MEASUREMENT_ID, // Google Analytics / GA
        ],
      },
    },
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `minimal-blog - @lekoarts/gatsby-theme-minimal-blog`,
        short_name: `minimal-blog`,
        description: `Typography driven, feature-rich blogging theme with minimal aesthetics. Includes tags/categories support and extensive features for code blocks such as live preview, line numbers, and code highlighting.`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#6B46C1`,
        display: `standalone`,
        icons: [
          {
            src: `/android-chrome-192x192.png`,
            sizes: `192x192`,
            type: `image/png`,
          },
          {
            src: `/android-chrome-512x512.png`,
            sizes: `512x512`,
            type: `image/png`,
          },
        ],
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-netlify`,
    shouldAnalyseBundle && {
      resolve: `gatsby-plugin-webpack-bundle-analyser-v2`,
      options: {
        analyzerMode: `static`,
        reportFilename: `_bundle.html`,
        openAnalyzer: false,
      },
    },
    {
      resolve: "gatsby-plugin-mailchimp",
      options: {
        endpoint:
          "https://kaanuzdogan.us7.list-manage.com/subscribe/post?u=86ff29b1f460007d00cf6f4f6&amp;id=341da9b4a6",
        timeout: 3500,
      },
    },
  ].filter(Boolean),
};
