import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Gifts from './pages/Gifts'
import GiftDetail from './pages/GiftDetail'
import NotFound from './pages/NotFound'

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Gifts />} />
        <Route path="/gifts/:giftId" element={<GiftDetail />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  )
}

export default App
