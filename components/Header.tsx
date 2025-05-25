import siteMetadata from '@/data/siteMetadata'
import headerNavLinks from '@/data/headerNavLinks'
import Link from './Link'
import MobileNav from './MobileNav'
import ThemeSwitch from './ThemeSwitch'
import SearchButton from './SearchButton'

const Header = () => {
  let headerClass = 'flex items-center w-full justify-between py-6 md:py-8'
  if (siteMetadata.stickyNav) {
    headerClass += ' sticky top-0 z-50'
  }

  return (
    <header className={headerClass}>
      <Link href="/" className="font-courier-prime cursor-pointer">
        <div className="text-2xl font-medium md:text-3xl">
          kaan{' '}
          <span className="mx-[1px] inline-block h-[1.8rem] bg-gray-900 px-[1px] pt-[0.25rem] text-white md:h-[2.2rem] md:pt-[0.4rem] dark:bg-gray-100 dark:text-gray-900">
            uz
          </span>
          dogan
        </div>
      </Link>
      <div className="flex items-center space-x-4 leading-5 sm:space-x-5">
        <div className="no-scrollbar hidden max-w-40 items-center gap-x-4 overflow-x-auto sm:flex md:max-w-72 lg:max-w-96">
          {headerNavLinks
            .filter((link) => link.href !== '/')
            .map((link) => (
              <Link
                key={link.title}
                href={link.href}
                className="hover:text-primary-500 dark:hover:text-primary-400 m-1 font-medium text-gray-900 dark:text-gray-100"
              >
                {link.title}
              </Link>
            ))}
        </div>
        <SearchButton />
        <ThemeSwitch />
        <MobileNav />
      </div>
    </header>
  )
}

export default Header
