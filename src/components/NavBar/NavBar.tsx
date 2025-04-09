import "./NavBar.css"

const NavBar = () => {
    return (
        <nav className="navBar">
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
