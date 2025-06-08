import Link from '@/components/Link'
import Tag from '@/components/Tag'
import siteMetadata from '@/data/siteMetadata'
import { formatDate } from 'pliny/utils/formatDate'
import NewsletterForm from 'pliny/ui/NewsletterForm'

const MAX_DISPLAY = 5

export default function Home({ posts }) {
  return (
    <>
      <div className="space-y-2">
        <div className="space-y-2 pt-6 pb-8">
          <h1 className="text-3xl font-extrabold tracking-tight text-gray-900 md:text-6xl dark:text-gray-100">
            Hi!
          </h1>
          <div className="prose dark:prose-invert">
            <p className="md:text-lg">I'm Kaan. This is my place on the internet 🌎.</p>
            <p className="md:text-lg">
              I'm a curious computer science grad and software developer from Turkey 🇹🇷, currently
              based in Berlin 🇩🇪.
            </p>
            <p className="md:text-lg">
              I am working on <Link href="https://sourcify.dev">Sourcify</Link> at the Ethereum
              Foundation.
            </p>
            <p className="md:text-lg">
              I write my thoughts, experiences, and some <code>technical stuff</code> here.
            </p>
            {/* <p className="md:text-lg">
              <Link href="/about">More about me</Link>.
            </p> */}
          </div>
        </div>
        <div className="flex flex-row items-center justify-between">
          <h2 className="text-2xl font-bold text-gray-900 md:text-3xl dark:border-gray-700 dark:text-gray-100">
            Latest Posts
          </h2>
          <Link
            href="/blog"
            className="text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 text-sm md:text-base"
          >
            Read All Posts &rarr;
          </Link>
        </div>
        <ul className="">
          {!posts.length && 'No posts found.'}
          {posts.slice(0, MAX_DISPLAY).map((post) => {
            const { slug, date, title } = post
            return (
              <li key={slug} className="py-1">
                <h2 className="text-base">
                  <Link href={`/blog/${slug}`} className="text-gray-900 dark:text-gray-100">
                    {title}
                  </Link>{' '}
                  <dl className="inline-flex items-center">
                    <dt className="sr-only">Published on</dt>
                    <dd className="text-xs leading-6 font-medium text-gray-400 dark:text-gray-500">
                      <time dateTime={date}>{formatDate(date, siteMetadata.locale)}</time>
                    </dd>
                  </dl>
                </h2>
              </li>
            )
          })}
        </ul>
      </div>
      {/* {siteMetadata.newsletter?.provider && (
        <div className="flex items-center justify-center pt-4">
          <NewsletterForm />
        </div>
      )} */}
    </>
  )
}
