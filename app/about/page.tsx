import { Authors, allAuthors } from 'contentlayer/generated'
import { MDXLayoutRenderer } from 'pliny/mdx-components'
import { genPageMetadata } from 'app/seo'

export const metadata = genPageMetadata({ title: 'About' })

// The text of this page is in data/authors/default.mdx.
export default function Page() {
  const author = allAuthors.find((p) => p.slug === 'default') as Authors
  return (
    <div className="pt-6 pb-16">
      <h1 className="text-3xl font-extrabold tracking-tight text-gray-900 md:text-5xl dark:text-gray-100">
        About
      </h1>
      <div className="prose dark:prose-invert max-w-2xl pt-8 md:text-lg">
        <MDXLayoutRenderer code={author.body.code} />
      </div>
    </div>
  )
}
