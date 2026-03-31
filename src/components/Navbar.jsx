const Navbar = ({ theme, toggleTheme }) => {
    return (
        <nav className="bg-white dark:bg-gray-900 shadow-md sticky top-0 z-50 transition-colors duration-300">
      <div className="w-full px-4 md:px-8 lg:px-12">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center cursor-pointer">
            <span className="text-2xl font-bold text-gray-800 dark:text-white tracking-wide">
              E-Shop<span className="text-blue-600">.</span>
            </span>
          </div>

          {/* Nav links */}
          <div className="hidden md:flex space-x-8 items-center">
            <a href="#" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 font-medium transition-colors">Welcome</a>
            <a href="#" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 font-medium transition-colors">Categories</a>
            
            {/* Dark Mode Toggle */}
            <button 
              onClick={toggleTheme}
              className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
            >
              {theme === 'light' ? '🌙' : '☀️'}
            </button>

            {/* Cart */}
            <button className="flex items-center text-gray-600 dark:text-gray-300 hover:text-blue-600">
              🛒 <span className="ml-1 bg-blue-600 text-white text-xs font-bold px-2 py-0.5 rounded-full">0</span>
            </button>
          </div>
        </div>
      </div>
    </nav>

    )
}

export default Navbar;