import { MenuAlt4Icon, SearchIcon } from '@heroicons/react/outline'
import { useState } from 'react'
import { Sidebar } from './Sidebar'

export const Header = () => {
  const [sidebar, setSidebar] = useState(false)

  const toggleSidebarHandler = () => setSidebar((prev) => !prev)

  return (
    <>
      <header className="mt-8 flex items-center justify-between px-6 sm:px-24">
        <MenuAlt4Icon
          className="w-8 h-8 text-slate-500"
          onClick={toggleSidebarHandler}
        />
        <SearchIcon className="w-8 h-8 text-slate-500" />
      </header>
      <Sidebar isVisible={sidebar} onClose={toggleSidebarHandler} />
    </>
  )
}
