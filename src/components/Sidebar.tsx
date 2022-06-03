import { FC } from 'react'
import { XIcon as CloseIcon } from '@heroicons/react/outline'
import { motion, AnimatePresence } from 'framer-motion'

export const Sidebar: FC<{ isVisible: boolean; onClose: () => void }> = ({
  isVisible,
  onClose
}) => {
  return (
    <AnimatePresence>
      {isVisible && (
        <motion.aside
          className="absolute z-10 w-screen h-screen bg-red-200"
          initial={{ x: '-100%', opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: '-100%', opacity: 0 }}
          transition={{ bounce: 0 }}
        >
          <h1>Sidebar</h1>
          <CloseIcon className="w-8 h-8" onClick={onClose} />
        </motion.aside>
      )}
    </AnimatePresence>
  )
}
