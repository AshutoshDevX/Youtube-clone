import { Navbar } from "./components/navbar"
import { Home } from "./pages/Home"
import './App.css'
import { useState } from "react"
import { createContext } from "react"
import { BrowserRouter, Routes, Route } from "react-router"
export const ToggleContext = createContext(true);
function App() {
  const [toggle, setToggle] = useState(true);
  return (
    <>
      <Navbar toggle={toggle} setToggle={setToggle} />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ToggleContext.Provider value={toggle}><Home /></ToggleContext.Provider>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
