import { Navbar } from "./components/navbar"
import { Home } from "./pages/Home"
import './App.css'
import { useState } from "react"
function App() {
  const [toggle, setToggle] = useState(true);

  return (
    <>
      <div>
        <Navbar toggle={toggle} setToggle={setToggle} />
        <Home toggle={toggle} />
      </div>
    </>
  )
}

export default App
