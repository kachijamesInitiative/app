import NavBar from "./components/NavBar"
import { Routes, Route } from 'react-router-dom'
import HomePage from "./components/Home"
//import Home from "./components/Home"
import About from "./components/About"
import Impact from "./components/Impact"
import WhatWeDo from "./components/WhatWeDo"
import Media from "./components/Media"
import Speeches from "./components/Speeches"
import Footer from "./components/Footer"
import OurJourneyDetailPage from "./components/OurJourneyDetailPage"
import StartConversationPage from "./components/Contact"

function App() {


  return (
    <>
      <NavBar className=" hidden lg:block sticky top-0 z-50" />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About />} />
          <Route path="/impact" element={<Impact />} />
          <Route path="/whatwedo" element={<WhatWeDo />} />
          <Route path="/media" element={<Media />} />
          <Route path="/speeches" element={<Speeches />} />
          <Route path="/details/:id" element={<OurJourneyDetailPage />} />
          <Route path="/contact" element={<StartConversationPage />} />
        
      </Routes>
      <Footer />
    </>
  )
}

export default App
