import { motion } from 'framer-motion'

const categoriesList = [
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0
]

export const Categories = () => (
  <div className="flex flex-col pl-4 sm:pl-24 sm:pr-24">
    <span className="text-sm text-slate-500 font-medium tracking-wider mb-2 pl-2">
      CATEGORIES
    </span>
    <div className="flex-1 w-full overflow-x-auto pl-2">
      <div className="inline-flex items-center pb-6">
        {categoriesList.map((category, index) => (
          <motion.div
            key={'c' + index}
            className="w-48 h-full mr-4 flex flex-col p-4 pt-6 cursor-pointer rounded-2xl bg-white shadow-md shadow-slate-400"
            whileHover={{ scale: 1.05 }}
          >
            <span className="text-sm text-slate-400 font-bold tracking-wide">
              40 tasks
            </span>
            <span className="text-xl font-bold tracking-wide">Business</span>
            <div className="w-full h-1 mt-4 rounded-md bg-slate-200 relative">
              <div className="w-1/2 h-full bg-purple-500 rounded-md absolute top-0 left-0">
                <div className="h-2 w-1 bg-purple-500 absolute right-0 bottom-0 rounded-t-lg rounded-br-lg" />
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </div>
)
