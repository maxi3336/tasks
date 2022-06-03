import { useState } from 'react'
import { MenuIcon, SearchIcon } from 'ui/Icons'
import { Sidebar } from 'components/Sidebar'

export const Header = () => {
  const [sidebar, setSidebar] = useState(false)

  const toggleSidebarHandler = () => setSidebar((prev) => !prev)

  return (
    <>
      <header className="mt-8 flex items-center justify-between px-6 sm:px-24">
        <MenuIcon onClick={toggleSidebarHandler} />
        <SearchIcon />
      </header>
      <Sidebar isVisible={sidebar} onClose={toggleSidebarHandler} />
    </>
  )
}
