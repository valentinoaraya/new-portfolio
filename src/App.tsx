import './App.css'
import NavBar from './components/NavBar/NavBar'
import Hero from './components/Hero/Hero'
import Projects from './components/Projects/Projects'
import Formation from './components/Formation/Formation'
import Stack from './components/Stack/Stack'
import AboutMe from './components/AboutMe/AboutMe'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'

function App() {

  return (
    <>
      <NavBar />
      <main>
        <Hero />
        <Projects />
        <Stack />
        <Formation />
        <AboutMe />
        <Contact />
        <Footer />
      </main>
    </>
  )
}

export default App
