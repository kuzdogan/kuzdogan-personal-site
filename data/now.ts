// The "What I'm working on" section on the homepage reads this file.
// Change `updated` each time you edit the lists below. The homepage shows this date.

export const nowUpdated = '2026-11-13'

export interface NowItem {
  name: string
  /** One sentence, plain words. Write a link as [words](url). */
  oneLiner: string
  href?: string
  /** Words before the name, for example "Recent talk". */
  prefix?: string
  /** Lines shown indented under this item. */
  sub?: NowItem[]
}

/** The lead shows in large type. Under it, the page shows the live count of verified contracts. */
export const atWork: { lead: NowItem; rest: NowItem[] } = {
  lead: {
    name: 'Sourcify',
    oneLiner: 'Source code verification for Ethereum smart contracts. Open-source and open-data.',
    href: 'https://sourcify.dev',
  },
  rest: [
    {
      name: 'Clear signing',
      oneLiner:
        'I maintain the spec and the [registry](https://github.com/ethereum/clear-signing-erc7730-registry) of ERC-7730. It lets Ethereum users see "Swap 1 ETH for 3,200 USDC" instead of raw hex when they sign.',
      href: 'https://erc7730.sourcify.dev',
      sub: [
        {
          prefix: 'Recent talk',
          name: 'Goodbye YOLO Signing',
          oneLiner: 'Devcon 8, Mumbai, November 2026.',
          href: 'https://www.youtube.com/watch?v=EHU2mXIWgeo',
        },
      ],
    },
    {
      name: 'Onay',
      oneLiner:
        'A browser extension and desktop app. It checks a transaction a second time, on your own machine, before your wallet signs it.',
      href: 'https://onay.sh',
    },
  ],
}

/** Side projects have no lead. All items have the same weight. */
export const onTheSide: NowItem[] = [
  {
    name: 'Napalım?',
    oneLiner:
      "A free email every Sunday evening: next week's concerts, plays, club nights, stand-up shows and films in Istanbul, one line each.",
    href: 'https://napalim.app',
  },
  {
    name: 'wifi var mı?',
    oneLiner:
      'Cafes in Istanbul that I work from, with wifi speeds and coffee prices, shared on Instagram.',
    href: 'https://www.instagram.com/wifi_var_mi/',
  },
  {
    name: 'Writing here',
    oneLiner: 'More posts on this site: tech, food, and things I learned the hard way.',
    href: '/blog',
  },
]
