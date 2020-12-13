/* eslint arrow-body-style: 0 */

module.exports = (title) => ({
  query: `
    {
      site {
        siteMetadata {
          title: siteTitle
          description: siteDescription
          siteUrl
          site_url: siteUrl
        }
      }
    }
  `,
  feeds: [
    {
      serialize: ({ query: { site, allPost } }) => {
        return allPost.nodes.map((post) => {
          const siteUrl = site.siteMetadata.siteUrl;
          let html = post.html;
          // Hacky workaround for https://github.com/gaearon/overreacted.io/issues/65
          html = html
            .replace(/href="\//g, `href="${siteUrl}/`)
            .replace(/src="\//g, `src="${siteUrl}/`)
            .replace(/"\/static\//g, `"${siteUrl}/static/`)
            .replace(/,\s*\/static\//g, `,${siteUrl}/static/`);
          return {
            title: 'NOTATTITLE',
            date: post.date,
            excerpt: post.excerpt,
            url: siteUrl + post.slug,
            guid: siteUrl + post.slug,
            custom_elements: [{ "content:encoded": html }],
          }
        })
      },
      query: `
        {
          allPost(sort: { fields: date, order: DESC }) {
            nodes {
              title
              date(formatString: "MMMM D, YYYY")
              excerpt
              slug
              html
            }
          }
        }
      `,
      output: `rss.xml`,
      title,
    },
  ],
})