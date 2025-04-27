import './App.css'
import NavBar from './components/NavBar/NavBar'
import Home from './components/Home/Home'
import Footer from './components/Footer/Footer'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import BookifyDetail from './components/ProjectDetails/BookifyDetail/BookifyDetail'
import ScrollToTop from './components/ScrollToTop/ScrollToTop'
import VentaTrackDetail from './components/ProjectDetails/VentaTrackDetail/VentaTrackDetail'

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
        </Routes>
        <div className='divWithMaxWidth'>
          <Footer />
        </div>
      </BrowserRouter>
    </>
  )
}

export default App
