/** @jsx jsx */
import { Link } from "gatsby"
import { jsx } from "theme-ui"
import Layout from "../components/layout"
import Listing from "../components/listing"
import Title from "../components/title"
import useMinimalBlogConfig from "../hooks/use-minimal-blog-config"
import useSiteMetadata from "../hooks/use-site-metadata"
import { visuallyHidden } from "../styles/utils"
// @ts-ignore
import Hero from "../texts/hero"
import replaceSlashes from "../utils/replaceSlashes"
import NewsletterForm from './newsletterform'
import Spotify from './spotify'

type PostsProps = {
  posts: {
    slug: string
    title: string
    date: string
    excerpt: string
    description: string
    timeToRead?: number
    tags?: {
      name: string
      slug: string
    }[]
  }[]
  [key: string]: any
}

const Homepage = ({ posts }: PostsProps) => {
  const { basePath, blogPath } = useMinimalBlogConfig()
  const { siteTitle } = useSiteMetadata()

  return (
    <Layout>
      <h1 sx={visuallyHidden}>{siteTitle}</h1>
      <section sx={{ mb: [4, 5], p: { fontSize: [1, 2, 3], mt: [1, 2] }, variant: `section_hero` }}>
        <Hero />
      </section>
      <section sx={{ mb: [4, 5], fontSize: [1, 2], display: 'none' }} >
        <h2
          sx={{ fontWeight: `medium`, fontSize: [3, 4], fontFamily: `heading`, lineHeight: `heading`, color: `heading`, textAlign: ["left", "center"] }}
        >
          Subscribe to my blog posts
        </h2>
        <NewsletterForm />
      </section>
      <Title text="Latest Posts">
        <Link to={replaceSlashes(`/${basePath}/${blogPath}`)}>Read all posts</Link>
      </Title>
      <Listing posts={posts} showTags={false} />
      <Spotify />
    </Layout>
  )
}

export default Homepage