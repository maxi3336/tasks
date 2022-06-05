import { ElementType, FC } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { CloseIcon, HomeIcon, CalendarIcon, CheckIcon } from 'ui/Icons'
import chroma from 'chroma-js'
import { NavLink } from 'react-router-dom'
import { CreateCategory } from './CreateCategory'
import { CategoryState } from 'features/categories/categoriesSlice'
import { useSelector } from 'react-redux'
import { IRootState } from 'app/store'

export const Sidebar: FC<{ isVisible: boolean; onClose: () => void }> = ({
  isVisible,
  onClose
}) => {
  const categories: CategoryState[] = useSelector<IRootState, CategoryState[]>(
    (state) => state.categories
  )

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.aside
          className="fixed z-10 w-full h-full bg-white p-14 overflow-hidden"
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

            {categories.map(({ id, title, color }) => (
              <NavItem
                key={id}
                title={title}
                path={id}
                flag={color}
                count={13}
              />
            ))}

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
      className="grid grid-cols-sidebar_category gap-6 items-center py-4 px-6 rounded-2xl"
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
