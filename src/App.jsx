import NavBar from "./components/NavBar"
import { Routes, Route } from 'react-router-dom'
import HomePage from "./components/HomePage"
import About from "./components/About"
import Impact from "./components/Impact"
import WhatWeDo from "./components/WhatWeDo"
import Media from "./components/Media"
import Speeches from "./components/Speeches"
function App() {


  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About />} />
          <Route path="/impact" element={<Impact />} />
          <Route path="/whatwedo" element={<WhatWeDo />} />
          <Route path="/media" element={<Media />} />
          <Route path="/speeches" element={<Speeches />} />
      </Routes>
    </>
  )
}

export default App
