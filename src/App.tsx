import './App.css'
import NavBar from './components/NavBar/NavBar'
import Hero from './components/Hero/Hero'
import Projects from './components/Projects/Projects'
import Formation from './components/Formation/Formation'
import Stack from './components/Stack/Stack'

function App() {

  return (
    <>
      <NavBar />
      <main>
        <Hero />
        <Projects />
        <Stack />
        <Formation />
      </main>
    </>
  )
}

export default App
