import Level1 from './Level1'
import Header from './Header'
import Footer from './Footer'

import Test from './Test'
import Home from './Home'
import { Route, Routes } from 'react-router-dom'


import { useState } from 'react'


function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Level1" element={<Level1 />} />
        <Route path="/Test" element={<Test />} />
      </Routes>
      <Footer />
    </>
  )
}
export default App
