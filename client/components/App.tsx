import Centre from './Centre'
import Header from './Header'
import Footer from './Footer'
import North from './North'
import East from './East'
import East2 from './East2'
import South from './South'
import West from './West'
import Shop from './Shop'
import Home from './Home'

import { Route, Routes } from 'react-router-dom'

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Centre" element={<Centre />} />
        <Route path="/Shop" element={<Shop />} />
        <Route path="/North" element={<North />} />
        <Route path="/East" element={<East />} />
        <Route path="/East2" element={<East2 />} />
        <Route path="/South" element={<South />} />
        <Route path="/West" element={<West />} />
      </Routes>
      <Footer />
    </>
  )
}
export default App
