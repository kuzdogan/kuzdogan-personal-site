/**
 * @type {import('next').NextConfig['redirects']}
 */

// Here maintaining the old links for the blog posts
const redirects = async () => {
  return [
    {
      source: '/cooking-matters',
      destination: '/blog/2024/cooking-matters',
      permanent: true,
    },
    {
      source: '/mixed-feelings-about-social-media',
      destination: '/blog/2024/mixed-feelings-about-social-media',
      permanent: true,
    },
    {
      source: '/call-the-fucking-vatican',
      destination: '/blog/2024/call-the-fucking-vatican',
      permanent: true,
    },
    // Older blog posts redirects
    {
      source: '/download-facebook-group-media',
      destination: '/blog/older/download-facebook-group-media',
      permanent: true,
    },
    {
      source: '/setting-up-google-analytics-for-gatsby',
      destination: '/blog/older/setting-up-google-analytics-for-gatsby',
      permanent: true,
    },
    {
      source: '/japan-recommendations',
      destination: '/blog/older/japan-recommendations',
      permanent: true,
    },
    {
      source: '/continous-glucose-monitor',
      destination: '/blog/older/continous-glucose-monitor',
      permanent: true,
    },
    {
      source: '/avoiding-mi-a3-android-11-update',
      destination: '/blog/older/avoiding-mi-a3-android-11-update',
      permanent: true,
    },
    {
      source: '/how-to-become-a-blockchain-developer',
      destination: '/blog/older/how-to-become-a-blockchain-developer',
      permanent: true,
    },
    {
      source: '/devconnect-food',
      destination: '/blog/older/devconnect-food',
      permanent: true,
    },
    {
      source: '/docker-compose-client-setting-for-ethereum-merge',
      destination: '/blog/older/docker-compose-client-setting-for-ethereum-merge',
      permanent: true,
    },
    {
      source: '/decentralizing-sourcify-repo',
      destination: '/blog/older/decentralizing-sourcify-repo',
      permanent: true,
    },
  ]
}

export default redirects
