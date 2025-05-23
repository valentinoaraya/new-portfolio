import './App.css'
import NavBar from './components/NavBar/NavBar'
import Home from './components/Home/Home'
import Footer from './components/Footer/Footer'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import ScrollToTop from './components/ScrollToTop/ScrollToTop'
import BookifyDetail from './components/ProjectDetails/BookifyDetail/BookifyDetail'
import VentaTrackDetail from './components/ProjectDetails/VentaTrackDetail/VentaTrackDetail'
import TurneroDetail from './components/ProjectDetails/TurneroDetail/TurneroDetail'
import SportyMaxxDetail from './components/ProjectDetails/SportyMaxxDetail/SportyMaxxDetail'

function App() {
  return (
    <>
      <BrowserRouter>
        <ScrollToTop />
        <NavBar />
        <Routes>
          <Route path='/' element={
            <div className='divWithMaxWidth'>
              <Home />
            </div>
          } />
          <Route path='/bookify-detail' element={<BookifyDetail />} />
          <Route path='/ventatrack-detail' element={<VentaTrackDetail />} />
          <Route path='/turnero-detail' element={<TurneroDetail />} />
          <Route path='/sportymaxx-detail' element={<SportyMaxxDetail />} />
        </Routes>
        <div className='divWithMaxWidth'>
          <Footer />
        </div>
      </BrowserRouter>
    </>
  )
}

export default App
