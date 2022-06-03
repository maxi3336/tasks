import { motion } from 'framer-motion'
import { useDispatch, useSelector } from 'react-redux'
import { toggle, create, TaskState, Task } from 'features/tasks/tasksSlice'
import { IRootState } from 'app/store'
import chroma from 'chroma-js'
import { CreateTask } from './CreateTask'

export const Tasks = () => {
  const tasks: TaskState[] = useSelector<IRootState, TaskState[]>(
    (state) => state.tasks
  )
  const dispatch = useDispatch()

  return (
    <>
      <div className="flex flex-col flex-1 sm:pr-16">
        <span className="text-sm text-slate-500 font-medium tracking-wider mb-4 px-6 sm:px-24">
          TODAYS TASKS
        </span>
        <div className="h-0 w-full pb-4 flex-auto overflow-y-auto overflow-x-hidden">
          <div className="flex flex-col gap-4 pb-20 sm:pb-0">
            {tasks.map(({ id, color, content, completed }) => (
              <motion.div
                key={id}
                className="mx-6 sm:ml-24 sm:mr-6 rounded-xl grid grid-cols-task items-center gap-4 p-4 bg-white shadow-md shadow-slate-400"
                whileHover={{ scale: 1.02 }}
              >
                <div
                  className="h-6 w-6 border-2 rounded-full"
                  onClick={() => dispatch(toggle(id))}
                  style={{
                    borderColor: color,
                    background: completed
                      ? chroma(color).alpha(0.5).hex()
                      : 'transparent'
                  }}
                />
                <span className="w-full break-words text-sm">{content}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <CreateTask onCreate={(newTask: Task) => dispatch(create(newTask))} />
    </>
  )
}
