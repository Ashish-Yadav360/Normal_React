import { Home } from "./Pages/Home"
import Nav from "./Pages/Nav"

const App = () => {
  return (
    <div className="flex-col">
      <Nav/>
      <Home/>
    </div>
  )
}

export default App