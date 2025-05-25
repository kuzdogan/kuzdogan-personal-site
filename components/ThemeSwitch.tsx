'use client'

import { useEffect, useState } from 'react'
import { useTheme } from 'next-themes'
import { BiSun, BiMoon } from 'react-icons/bi'

const ThemeSwitch = () => {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme, resolvedTheme } = useTheme()

  // When mounted on client, now we can show the UI
  useEffect(() => setMounted(true), [])

  // Toggle between light and dark
  const toggleTheme = () => {
    if (resolvedTheme === 'dark') {
      setTheme('light')
    } else {
      setTheme('dark')
    }
  }

  return (
    <button
      className="hover:text-primary-500 dark:hover:text-primary-400 flex items-center justify-center"
      onClick={toggleTheme}
      aria-label={`Switch to ${resolvedTheme === 'dark' ? 'light' : 'dark'} theme`}
    >
      <div className="relative h-6 w-6">
        {mounted && (
          <>
            <span
              className={`absolute left-0 transition-all duration-300 ${
                resolvedTheme === 'dark'
                  ? 'scale-100 rotate-0 opacity-100'
                  : 'scale-0 rotate-90 opacity-0'
              }`}
            >
              <BiMoon className="h-6 w-6" />
            </span>
            <span
              className={`absolute left-0 transition-all duration-300 ${
                resolvedTheme === 'dark'
                  ? 'scale-0 -rotate-90 opacity-0'
                  : 'scale-100 rotate-0 opacity-100'
              }`}
            >
              <BiSun className="h-6 w-6" />
            </span>
          </>
        )}
        {!mounted && <div className="h-6 w-6" />}
      </div>
    </button>
  )
}

export default ThemeSwitch
