import { motion } from 'framer-motion'

const tasks = [
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0
]

export const Tasks = () => (
  <>
    <div className="flex flex-col flex-1 sm:pr-16">
      <span className="text-sm text-slate-500 font-medium tracking-wider mb-4 px-6 sm:px-24">
        TODAYS TASKS
      </span>
      <div className="h-0 w-full pb-4 flex-auto overflow-y-auto overflow-x-hidden">
        <div className="flex flex-col gap-4 pb-20 sm:pb-0">
          {tasks.map((task, index) => (
            <motion.div
              key={'t' + index}
              className="mx-6 sm:ml-24 sm:mr-6 rounded-xl grid grid-cols-task items-center gap-4 p-4 bg-white shadow-md shadow-slate-400"
              whileHover={{ scale: 1.02 }}
            >
              <div className="h-6 w-6 border-2 border-purple-500 rounded-full" />
              <span className="w-full break-words text-sm">
                Task text content
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </div>

    <AddTask />
  </>
)

const AddTask = () => (
  <motion.button
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.9 }}
    className="rounded-full bg-blue-600 w-16 h-16 flex items-center cursor-pointer justify-center absolute bottom-4 right-4 shadow-lg shadow-slate-400"
  >
    <span className="-mt-1.5 text-5xl text-white">+</span>
  </motion.button>
)
