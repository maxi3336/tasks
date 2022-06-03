import { motion, HTMLMotionProps } from 'framer-motion'
import { forwardRef } from 'react'

const Button = forwardRef<HTMLButtonElement, HTMLMotionProps<'button'>>(
  ({ children, ...props }, ref) => (
    <motion.button
      className="h-10 rounded-lg text-white bg-sky-400 hover:bg-sky-500"
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      {...props}
    >
      {children}
    </motion.button>
  )
)

Button.displayName = 'Button'

export default Button
