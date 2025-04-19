import { useState, useEffect } from "react";
import "./NavBar.css"
import { HamburgerIcon } from "../../common/Icons/Icons";
import { useLocation, useNavigate } from "react-router-dom";

const NavBar = () => {
    const [scrolled, setScrolled] = useState(false)
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const navigate = useNavigate()
    const { pathname } = useLocation()

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
            setIsMenuOpen(false)
        }
    }

    return (
        <nav className={`navBar ${scrolled ? "scrolled" : ""}`}>
            <div className="navBarContent">
                <h1
                    className="titleNavBar"
                    onClick={pathname === "/" ?
                        () => {
                            handleScrollToSection("hero")
                        }
                        :
                        () => {
                            navigate("/")
                        }
                    }
                >
                    VALENTINO ARAYA
                </h1>
                <button
                    className={`hamburger ${isMenuOpen ? "open" : ""}`}
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                    <HamburgerIcon
                        width="30"
                        height="30"
                    />
                </button>
                <div className={`sections ${isMenuOpen ? "open" : ""}`}>
                    <p className="section" onClick={
                        pathname === "/" ?
                            () => handleScrollToSection("projects")
                            :
                            () => {
                                navigate("/")
                                handleScrollToSection("projects")
                            }
                    }>PROYECTOS</p>
                    <p className="section" onClick={
                        pathname === "/" ?
                            () => handleScrollToSection("aboutme")
                            :
                            () => {
                                navigate("/")
                                handleScrollToSection("aboutme")
                            }
                    }>SOBRE MÍ</p>
                    <p className="section" onClick={
                        pathname === "/" ?
                            () => handleScrollToSection("contact")
                            :
                            () => {
                                navigate("/")
                                handleScrollToSection("contact")
                            }
                    }>CONTACTO</p>
                </div>
            </div>
        </nav >
    );
}

export default NavBar;
