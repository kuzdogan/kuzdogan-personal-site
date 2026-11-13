'use client'
// The number of contracts verified on Sourcify, loaded in the visitor's browser.
// The site can be built as static files, so a number fetched at build time would get old.
// `initial` is the number from build time. The page shows it until the live number loads.
import { useEffect, useState } from 'react'

const STATS_URL = 'https://sourcify.dev/static/stats.json'

type Stats = Record<string, { full_match?: number; partial_match?: number }>

function countContracts(stats: Stats) {
  return Object.values(stats).reduce(
    (sum, c) => sum + (c.full_match || 0) + (c.partial_match || 0),
    0
  )
}

export default function SourcifyCount({ initial }: { initial: number }) {
  const [count, setCount] = useState(initial)

  useEffect(() => {
    let cancelled = false
    fetch(STATS_URL)
      .then((res) => (res.ok ? res.json() : Promise.reject(res.status)))
      .then((stats: Stats) => {
        const n = countContracts(stats)
        if (!cancelled && n > 0) setCount(n)
      })
      .catch(() => {
        // Keep the build-time number.
      })
    return () => {
      cancelled = true
    }
  }, [])

  return <span className="tabular-nums">{count.toLocaleString('en-US')}</span>
}
