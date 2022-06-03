import { Categories } from './components/Categories'
import { Header } from './components/Header'
import { Tasks } from './components/Tasks'

const App = () => {
  return (
    <div className="w-screen h-screen flex flex-col relative gap-6 bg-sky-50/50 overflow-hidden">
      <Header />

      <Categories />

      <Tasks />
    </div>
  )
}

export default App
