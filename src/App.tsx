import './App.css'
import NavBar from './components/NavBar/NavBar'
import Hero from './components/Hero/Hero'
import Projects from './components/Projects/Projects'

function App() {

  return (
    <>
      <NavBar />
      <main>
        <Hero />
        <Projects />
      </main>
    </>
  )
}

export default App
