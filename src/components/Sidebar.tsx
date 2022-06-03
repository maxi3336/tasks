import { FC } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { CloseIcon } from 'ui/Icons'

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

          <div className="w-full h-full border-2"></div>
        </motion.aside>
      )}
    </AnimatePresence>
  )
}
