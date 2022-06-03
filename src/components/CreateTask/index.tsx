import { Task } from 'features/tasks/tasksSlice'
import { AnimatePresence, motion } from 'framer-motion'
import { FC, useState } from 'react'
import { Portal } from 'react-portal'
import { CreateTaskForm } from './CreateTaskForm'

export const CreateTask: FC<{ onCreate: (task: Task) => void }> = () => {
  const [open, setOpen] = useState(false)

  return (
    <>
      <motion.div
        className="rounded-full bg-blue-600 w-16 h-16 cursor-pointer absolute bottom-4 right-4 shadow-lg shadow-slate-400"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <motion.button
          onClick={() => setOpen((prev) => !prev)}
          className="w-full h-full p-4 flex items-center justify-center"
          animate={open ? 'open' : 'closed'}
          variants={{
            open: {
              rotate: '135deg'
            },
            closed: {
              rotate: 0
            }
          }}
        >
          <div className="absolute w-1/2 h-1 bg-white" />
          <div className="absolute w-1 h-1/2 bg-white" />
        </motion.button>
      </motion.div>
      <CreateTaskModal visible={open} close={() => setOpen(false)} />
    </>
  )
}

const CreateTaskModal = ({
  visible,
  close
}: {
  visible: boolean
  close: () => void
}) => {
  return (
    <Portal>
      <AnimatePresence>
        {visible && (
          <motion.div
            className="fixed z-10 left-0 bottom-24 w-full px-4"
            initial={{
              y: 1000,
              opacity: 0
            }}
            animate={{
              y: 0,
              opacity: 1
            }}
            exit={{
              y: 1000,
              opacity: 0
            }}
          >
            <div className="bg-white p-4 rounded-lg w-full sm:w-1/4 mx-auto sm:mx-0 sm:ml-auto sm:mr-4 shadow-lg shadow-slate-400">
              <CreateTaskForm onSubmit={close} />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </Portal>
  )
}
