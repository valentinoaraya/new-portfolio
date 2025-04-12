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
        <section id='projects'>
          <Projects />

        </section>
        <section id='aboutme'>
          <Stack />
          <Formation />
          <AboutMe />
        </section>
        <section id='contact'>
          <Contact />
          <Footer />
        </section>
      </main>
    </>
  )
}

export default App
