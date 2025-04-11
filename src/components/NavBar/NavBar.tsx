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
                    <p className="section">PROYECTOS</p>
                    <p className="section">SOBRE MÍ</p>
                    <p className="section">CONTACTO</p>
                </div>
            </div>
        </nav>
    );
}

export default NavBar;
