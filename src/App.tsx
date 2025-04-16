import './App.css'
import NavBar from './components/NavBar/NavBar'
import Home from './components/Home/Home'
import Footer from './components/Footer/Footer'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import BookifyDetail from './components/ProjectDetails/BookifyDetail/BookifyDetail'

function App() {

  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/' element={
            <div className='divWithMaxWidth'>
              <Home />
            </div>
          } />
          <Route path='/bookify-detail' element={<BookifyDetail />} />
        </Routes>
        <div className='divWithMaxWidth'>
          <Footer />
        </div>
      </BrowserRouter>
    </>
  )
}

export default App
