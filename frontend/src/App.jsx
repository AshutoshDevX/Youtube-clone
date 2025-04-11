import { Navbar } from "./components/navbar"
import { Home } from "./pages/Home"
import { Video } from "./pages/Video"
import './App.css'
import { useState } from "react"
import { createContext } from "react"
import { Channel } from "./pages/Channel"
import { NotFound } from "./components/NotFound"
import { BrowserRouter, Routes, Route } from "react-router-dom"
export const SetContext = createContext();

function App() {
  const [toggle, setToggle] = useState(true);
  const [inputSearch, setInputSearch] = useState("");
  return (
    <>
      <SetContext.Provider value={{ toggle, setToggle, inputSearch, setInputSearch }}>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/watch/:id" element={<Video />}></Route>
            <Route path="/channel/:id" element={<Channel />}></Route>
            <Route path="*" element={<NotFound />}></Route>
          </Routes>
        </BrowserRouter>
      </SetContext.Provider >
    </>
  )
}

export default App
