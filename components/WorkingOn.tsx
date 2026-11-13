// "What I'm working on": two parts, at work and on the side.
// The content is in data/now.ts.
import Link from '@/components/Link'
import siteMetadata from '@/data/siteMetadata'
import { atWork, NowItem, nowUpdated, onTheSide } from '@/data/now'
import { formatDate } from 'pliny/utils/formatDate'
import SourcifyCount from './SourcifyCount'

const linkClass =
  'underline decoration-gray-300 underline-offset-4 hover:decoration-current dark:decoration-gray-600'

/** Turns "[words](url)" in a one-liner into links. */
function WithLinks({ text }: { text: string }) {
  const parts = text.split(/\[([^\]]+)\]\(([^)]+)\)/)
  // split() with two groups gives: text, words, url, text, words, url, ..., text
  return (
    <>
      {parts.map((part, i) => {
        if (i % 3 === 0) return part
        if (i % 3 === 1)
          return (
            <Link key={i} href={parts[i + 1]} className={linkClass}>
              {part}
            </Link>
          )
        return null
      })}
    </>
  )
}

/** The count at build time. The browser then loads the live number. */
async function buildTimeCount() {
  try {
    const res = await fetch('https://sourcify.dev/static/stats.json', {
      next: { revalidate: 3600 },
    })
    const stats: Record<string, { full_match?: number; partial_match?: number }> = await res.json()
    return Object.values(stats).reduce(
      (sum, c) => sum + (c.full_match || 0) + (c.partial_match || 0),
      0
    )
  } catch {
    return 59208864 // the count on 2026-11-13
  }
}

function Name({ item, className = '' }: { item: NowItem; className?: string }) {
  if (!item.href) return <span className={className}>{item.name}</span>
  return (
    <Link href={item.href} className={`${linkClass} ${className}`}>
      {item.name}
    </Link>
  )
}

function Line({ item }: { item: NowItem }) {
  return (
    <li className="text-gray-700 dark:text-gray-300">
      {item.prefix && <span className="text-gray-500 dark:text-gray-400">{item.prefix}: </span>}
      <Name item={item} className="font-bold text-gray-900 dark:text-gray-100" />
      <span className="text-gray-500 dark:text-gray-400">
        . <WithLinks text={item.oneLiner} />
      </span>
      {item.sub && (
        <ul className="mt-2 ml-5 list-disc space-y-2 marker:text-gray-400">
          {item.sub.map((s) => (
            <Line key={s.name} item={s} />
          ))}
        </ul>
      )}
    </li>
  )
}

function Part({
  title,
  color,
  children,
}: {
  title: string
  color: string
  children: React.ReactNode
}) {
  return (
    <div className="grid gap-x-10 gap-y-3 border-t border-gray-200 pt-6 md:grid-cols-[9rem_1fr] dark:border-gray-700">
      <h3 className={`text-lg font-bold ${color}`}>{title}</h3>
      <div>{children}</div>
    </div>
  )
}

export default async function WorkingOn() {
  const { lead, rest } = atWork
  const count = await buildTimeCount()
  return (
    <section className="space-y-6">
      <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
        <h2 className="text-2xl font-bold text-gray-900 md:text-3xl dark:text-gray-100">
          What I&apos;m working on
        </h2>
        <p className="text-sm text-gray-500 dark:text-gray-400">
          Last updated{' '}
          <time dateTime={nowUpdated}>{formatDate(nowUpdated, siteMetadata.locale)}</time>
        </p>
      </div>
      <Part title="At work" color="text-primary-600 dark:text-primary-400">
        <p className="text-2xl leading-snug font-bold text-gray-900 md:text-3xl dark:text-gray-100">
          <Name item={lead} />
        </p>
        <p className="mt-2 max-w-2xl text-lg text-gray-700 dark:text-gray-300">
          <WithLinks text={lead.oneLiner} />
        </p>
        <p className="mt-2 max-w-2xl text-gray-500 dark:text-gray-400">
          <SourcifyCount initial={count} /> contracts verified so far.
        </p>
        <ul className="mt-5 space-y-2">
          {rest.map((item) => (
            <Line key={item.name} item={item} />
          ))}
        </ul>
      </Part>
      <Part title="On the side" color="text-teal-700 dark:text-teal-400">
        <ul className="space-y-2">
          {onTheSide.map((item) => (
            <Line key={item.name} item={item} />
          ))}
        </ul>
      </Part>
    </section>
  )
}
