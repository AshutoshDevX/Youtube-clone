import { Navbar } from "./components/navbar"
import { Home } from "./pages/Home"
import { Video } from "./pages/Video"
import './App.css'
import { useState } from "react"
import { createContext } from "react"
import { Channel } from "./pages/Channel"
import { NotFound } from "./components/NotFound"
import { BrowserRouter, Routes, Route } from "react-router-dom"
export const ToggleContext = createContext([]);

function App() {
  const [toggle, setToggle] = useState(true);
  return (
    <>
      <ToggleContext.Provider value={[toggle, setToggle]}>
        <Navbar />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/watch/:id" element={<Video />}></Route>
            <Route path="/channel/:id" element={<Channel />}></Route>
            <Route path="*" element={<NotFound />}></Route>
          </Routes>
        </BrowserRouter>
      </ToggleContext.Provider >
    </>
  )
}

export default App
