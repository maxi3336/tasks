import { IRootState } from 'app/store'
import { CategoryState } from 'features/categories/categoriesSlice'
import { motion } from 'framer-motion'
import { useSelector } from 'react-redux'

export const Categories = () => {
  const categories: CategoryState[] = useSelector<IRootState, CategoryState[]>(
    (state) => state.categories
  )

  return (
    <div className="flex flex-col pl-4 sm:pl-24 sm:pr-24">
      <span className="text-sm text-slate-500 font-medium tracking-wider mb-2 pl-2">
        CATEGORIES
      </span>
      <div className="flex-1 w-full overflow-x-auto pl-2">
        <div className="inline-flex items-center pb-6">
          {categories.map(({ id, title, color }) => (
            <motion.div
              key={id}
              className="w-48 h-full mr-4 flex flex-col p-4 pt-6 cursor-pointer rounded-2xl bg-white shadow-md shadow-slate-400"
              whileHover={{ scale: 1.05 }}
            >
              <span className="text-sm text-slate-400 font-bold tracking-wide">
                40 tasks
              </span>
              <span className="text-xl font-bold tracking-wide">{title}</span>
              <div className="w-full h-1 mt-4 rounded-md bg-slate-200 relative">
                <div
                  className="w-1/2 h-full rounded-md absolute top-0 left-0"
                  style={{ backgroundColor: color }}
                >
                  <div
                    className="h-2 w-1 absolute right-0 bottom-0 rounded-t-lg rounded-br-lg"
                    style={{ backgroundColor: color }}
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}
