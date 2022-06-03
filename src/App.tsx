import { MenuAlt4Icon, SearchIcon } from '@heroicons/react/outline'

const App = () => {
  return (
    <div className="w-screen h-screen flex flex-col relative gap-6 bg-sky-50/50">
      <div className="mt-8 flex items-center justify-between px-6">
        <MenuAlt4Icon className="w-8 h-8 text-slate-500" />
        <SearchIcon className="w-8 h-8 text-slate-500" />
      </div>
      <div className="flex flex-col pl-4">
        <span className="text-sm text-slate-500 font-medium tracking-wider mb-2 pl-2">
          CATEGORIES
        </span>
        <div className="flex-1 w-full overflow-x-auto pl-2">
          <div className="inline-flex gap-4 items-center pb-6">
            <div className="w-48 h-full flex flex-col p-4 pt-6 rounded-2xl bg-white shadow-md shadow-slate-400">
              <span className="text-sm text-slate-400 font-bold tracking-wide">
                40 tasks
              </span>
              <span className="text-xl font-bold tracking-wide">Business</span>
              <div className="w-full h-1 mt-4 rounded-md bg-slate-200 relative">
                <div className="w-1/2 h-full bg-purple-500 rounded-md absolute top-0 left-0">
                  <div className="h-2 w-1 bg-purple-500 absolute right-0 bottom-0 rounded-t-lg rounded-br-lg" />
                </div>
              </div>
            </div>

            <div className="w-48 h-full flex flex-col p-4 pt-6 rounded-2xl bg-white shadow-md shadow-slate-400">
              <span className="text-sm text-slate-400 font-bold tracking-wide">
                40 tasks
              </span>
              <span className="text-xl font-bold tracking-wide">Business</span>
              <div className="w-full h-1 mt-4 rounded-md bg-slate-200 relative">
                <div className="w-1/2 h-full bg-purple-500 rounded-md absolute top-0 left-0">
                  <div className="h-2 w-1 bg-purple-500 absolute right-0 bottom-0 rounded-t-lg rounded-br-lg" />
                </div>
              </div>
            </div>

            <div className="w-48 h-full flex flex-col p-4 pt-6 rounded-2xl bg-white shadow-md shadow-slate-400">
              <span className="text-sm text-slate-400 font-bold tracking-wide">
                40 tasks
              </span>
              <span className="text-xl font-bold tracking-wide">Business</span>
              <div className="w-full h-1 mt-4 rounded-md bg-slate-200 relative">
                <div className="w-1/2 h-full bg-purple-500 rounded-md absolute top-0 left-0">
                  <div className="h-2 w-1 bg-purple-500 absolute right-0 bottom-0 rounded-t-lg rounded-br-lg" />
                </div>
              </div>
            </div>

            <div className="w-48 h-full flex flex-col p-4 pt-6 rounded-2xl bg-white shadow-md shadow-slate-400">
              <span className="text-sm text-slate-400 font-bold tracking-wide">
                40 tasks
              </span>
              <span className="text-xl font-bold tracking-wide">Business</span>
              <div className="w-full h-1 mt-4 rounded-md bg-slate-200 relative">
                <div className="w-1/2 h-full bg-purple-500 rounded-md absolute top-0 left-0">
                  <div className="h-2 w-1 bg-purple-500 absolute right-0 bottom-0 rounded-t-lg rounded-br-lg" />
                </div>
              </div>
            </div>

            <div className="w-48 h-full mr-4 flex flex-col p-4 pt-6 rounded-2xl bg-white shadow-md shadow-slate-400">
              <span className="text-sm text-slate-400 font-bold tracking-wide">
                40 tasks
              </span>
              <span className="text-xl font-bold tracking-wide">Business</span>
              <div className="w-full h-1 mt-4 rounded-md bg-slate-200 relative">
                <div className="w-1/2 h-full bg-purple-500 rounded-md absolute top-0 left-0">
                  <div className="h-2 w-1 bg-purple-500 absolute right-0 bottom-0 rounded-t-lg rounded-br-lg" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col flex-1">
        <span className="text-sm text-slate-500 font-medium tracking-wider mb-4  px-6">
          TODAYS TASKS
        </span>
        <div className="h-0 w-full pb-4 flex-auto overflow-y-auto">
          <div className="flex flex-col gap-4">
            <div className="mx-6 rounded-xl grid grid-cols-task items-center gap-4 p-4 bg-white shadow-md shadow-slate-400">
              <div className="h-6 w-6 border-2 border-purple-500 rounded-full" />
              <span className="w-full break-words text-sm">
                Task text content
              </span>
            </div>
            <div className="mx-6 rounded-xl grid grid-cols-task items-center gap-4 p-4 bg-white shadow-md shadow-slate-400">
              <div className="h-6 w-6 border-2 border-purple-500 rounded-full" />
              <span className="w-full break-words text-sm">
                Task text content
              </span>
            </div>
            <div className="mx-6 rounded-xl grid grid-cols-task items-center gap-4 p-4 bg-white shadow-md shadow-slate-400">
              <div className="h-6 w-6 border-2 border-purple-500 rounded-full" />
              <span className="w-full break-words text-sm">
                Task text content
              </span>
            </div>
            <div className="mx-6 rounded-xl grid grid-cols-task items-center gap-4 p-4 bg-white shadow-md shadow-slate-400">
              <div className="h-6 w-6 border-2 border-purple-500 rounded-full" />
              <span className="w-full break-words text-sm">
                Task text content
              </span>
            </div>
            <div className="mx-6 rounded-xl grid grid-cols-task items-center gap-4 p-4 bg-white shadow-md shadow-slate-400">
              <div className="h-6 w-6 border-2 border-purple-500 rounded-full" />
              <span className="w-full break-words text-sm">
                Task text content
              </span>
            </div>
            <div className="mx-6 rounded-xl grid grid-cols-task items-center gap-4 p-4 bg-white shadow-md shadow-slate-400">
              <div className="h-6 w-6 border-2 border-purple-500 rounded-full" />
              <span className="w-full break-words text-sm">
                Task text content
              </span>
            </div>
            <div className="mx-6 rounded-xl grid grid-cols-task items-center gap-4 p-4 bg-white shadow-md shadow-slate-400">
              <div className="h-6 w-6 border-2 border-purple-500 rounded-full" />
              <span className="w-full break-words text-sm">
                Task text content
              </span>
            </div>
            <div className="mx-6 rounded-xl grid grid-cols-task items-center gap-4 p-4 bg-white shadow-md shadow-slate-400">
              <div className="h-6 w-6 border-2 border-purple-500 rounded-full" />
              <span className="w-full break-words text-sm">
                Task text content
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="rounded-full bg-blue-600 w-16 h-16 flex items-center justify-center absolute bottom-4 right-4 shadow-lg shadow-slate-400">
        <span className="-mt-1.5 text-5xl text-white">+</span>
      </div>
    </div>
  )
}

export default App
