import { useState } from 'react'
import { Rocket, User } from 'lucide-react'

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-20 backdrop-blur bg-white/70 dark:bg-gray-900/70 border-b border-gray-200/70 dark:border-gray-800">
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="p-2 rounded-md bg-gradient-to-br from-indigo-500 to-purple-600 text-white">
            <Rocket size={18} />
          </div>
          <span className="font-semibold text-gray-900 dark:text-white tracking-tight">
            GuildHub
          </span>
          <span className="ml-2 text-xs px-2 py-0.5 rounded-full bg-indigo-100 text-indigo-700 dark:bg-indigo-900/40 dark:text-indigo-300">
            Suggestions & Reports
          </span>
        </div>

        <div className="hidden md:flex items-center gap-3">
          <a href="#features" className="text-sm text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white">Features</a>
          <a href="#public" className="text-sm text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white">Public Feed</a>
          <a href="#admin" className="text-sm text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white">Admin</a>
        </div>

        <div className="flex items-center gap-2">
          <button className="hidden sm:inline-flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium border border-gray-200 dark:border-gray-800 hover:border-gray-300 dark:hover:border-gray-700 text-gray-700 dark:text-gray-200">
            <User size={16} />
            Login with Discord
          </button>
          <button
            className="md:hidden inline-flex items-center justify-center w-9 h-9 rounded-md border border-gray-200 dark:border-gray-800 text-gray-700 dark:text-gray-200"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="w-5 h-5"
            >
              <path d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </nav>

      {menuOpen && (
        <div className="md:hidden border-t border-gray-200 dark:border-gray-800">
          <div className="max-w-6xl mx-auto px-4 py-3 flex flex-col gap-3">
            <a href="#features" className="text-sm text-gray-700 dark:text-gray-200">Features</a>
            <a href="#public" className="text-sm text-gray-700 dark:text-gray-200">Public Feed</a>
            <a href="#admin" className="text-sm text-gray-700 dark:text-gray-200">Admin</a>
            <button className="mt-2 inline-flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium border border-gray-200 dark:border-gray-800 text-gray-700 dark:text-gray-200">
              <User size={16} />
              Login with Discord
            </button>
          </div>
        </div>
      )}
    </header>
  )
}
