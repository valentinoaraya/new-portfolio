import Hero from "./Hero/Hero";
import Projects from "./Projects/Projects";
import Stack from "./Stack/Stack";
import Formation from "./Formation/Formation";
import AboutMe from "./AboutMe/AboutMe";
import Contact from "./Contact/Contact";

const Home = () => {
    return (
        <>
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
            </section>
        </>
    );
}

export default Home;
