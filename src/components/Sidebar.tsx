import { ElementType, FC } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { CloseIcon, HomeIcon, CalendarIcon, CheckIcon } from 'ui/Icons'
import chroma from 'chroma-js'
import { NavLink } from 'react-router-dom'
import { CreateCategory } from './CreateCategory'

export const Sidebar: FC<{ isVisible: boolean; onClose: () => void }> = ({
  isVisible,
  onClose
}) => {
  return (
    <AnimatePresence>
      {isVisible && (
        <motion.aside
          className="fixed z-10 w-full h-full bg-white p-14"
          initial={{ x: '-100%', opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: '-100%', opacity: 0 }}
          transition={{ bounce: 0 }}
        >
          <CloseIcon
            className="absolute top-4 right-4 cursor-pointer"
            onClick={onClose}
          />

          <nav className="w-full h-full flex flex-col gap-2">
            <NavItem title="Home" path="/" flag={HomeIcon} count={40} />
            <NavItem
              title="Today"
              path="/today"
              flag={CalendarIcon}
              count={20}
            />
            <NavItem
              title="Business"
              path="/1"
              flag="rgb(168, 85, 247)"
              count={13}
            />
            <NavItem
              title="Complete"
              path="/complete"
              flag={CheckIcon}
              count={10}
            />

            <CreateCategory />
          </nav>
        </motion.aside>
      )}
    </AnimatePresence>
  )
}

export const NavItem: FC<{
  title: string
  flag: ElementType | string
  path: string
  count: number
}> = ({ title, flag: Flag, path, count }) => {
  const background =
    typeof Flag === 'string'
      ? chroma(Flag).alpha(0.15).hex()
      : chroma('#9AD3FF').alpha(0.15).hex()

  return (
    <NavLink
      to={path}
      className="flex items-center gap-6 py-4 px-6 rounded-2xl"
      style={({ isActive }) => (isActive ? { background } : {})}
    >
      {typeof Flag === 'string' ? (
        <div
          className="w-4 h-4 rounded-md"
          style={{ borderWidth: 3, borderColor: Flag }}
        />
      ) : (
        <Flag style={{ width: '1rem', height: '1rem', color: '#000' }} />
      )}
      <span className="text-sm font-medium tracking-wider">{title}</span>
      <div className="ml-auto w-6 h-6 flex items-center justify-center rounded-md bg-slate-300">
        <span
          className="text-xs text-slate-600 font-medium"
          style={{ lineHeight: 0, marginTop: 1 }}
        >
          {count}
        </span>
      </div>
    </NavLink>
  )
}
