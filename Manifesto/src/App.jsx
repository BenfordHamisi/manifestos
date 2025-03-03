import { useState } from 'react'
import { BrowserRouter, Router, Routes, Route } from 'react-router-dom'
import HomePage from './Pages/HomePage'
import Candidate from './Pages/Candidate'
import About from './Pages/About'
import CandidateInfo from './Pages/CandidateInfo'

function App() {
 
  return (
    <>
      <BrowserRouter>
      <Routes>
          <Route path = "/" element = {< HomePage />} />
          <Route path='/candidates' element = {<Candidate/>} />
          <Route path='/about' element= {<About />} />
          <Route path='/candidate/:id' element = {<CandidateInfo />} />
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
