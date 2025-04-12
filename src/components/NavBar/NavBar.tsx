import { useState, useEffect } from "react";
import "./NavBar.css"

const NavBar = () => {

    const [scrolled, setScrolled] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            const isScolled = window.scrollY > 10;
            setScrolled(isScolled)
        }

        window.addEventListener("scroll", handleScroll)

        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    const handleScrollToSection = (id: string) => {
        const section = document.getElementById(id)
        if (section) {
            section.scrollIntoView({ behavior: "smooth" })
        }
    }

    return (
        <nav className={`navBar ${scrolled ? "scrolled" : ""}`}>
            <div className="navBarContent">
                <h1
                    className="titleNavBar"
                    onClick={() => window.scrollTo(0, 0)}
                >
                    VALENTINO ARAYA
                </h1>
                <div className="sections">
                    <p className="section" onClick={() => handleScrollToSection("projects")}>PROYECTOS</p>
                    <p className="section" onClick={() => handleScrollToSection("aboutme")}>SOBRE MÍ</p>
                    <p className="section" onClick={() => handleScrollToSection("contact")}>CONTACTO</p>
                </div>
            </div>
        </nav>
    );
}

export default NavBar;
